import { drawText } from "https://esm.sh/canvas-txt";
import lastIssue from '../json/issues.json' with { type: 'json' };

const sectionsMap = {
    featuredArea: "Featured Area",
    puzzle: "Puzzle",
    ad: "Advertisement",
    joke: "Jokes",
    riddle: "Riddles",
    poetry: "Poetry",
    comic: "Comics",
    help: "Help Us!",
    bot: "Ask Yuri",
    dev: "Ask Smitty",
    featuredStory: "Featured Story",
    art: "Fan Art",
    announcement: "Announcements",
    news: "Breaking News",
    contest: "Contest",
    poll: "Poll",
    tip: "Tips",
    extra: "Extras"
}

const issues = {};

let currentIssue = lastIssue;
let currentPage = 0;
let currentGame = null;

const games = {
    sudoku(page) {
        drawText(ctx, "Fill each 3x3 set with a different pet", {
            x: 50,
            y: 100,
            width: 200,
            height: 200,
            fontSize: 24,
        });
        drawText(ctx, "Fill cells until the board is complete. Pets in sets, rows or columns cannot repeat", {
            x: 50,
            y: 250,
            width: 200,
            height: 200,
            fontSize: 24,
        });
        drawText(ctx, "Each pet can only appear on the board 9 times", {
            x: 300,
            y: 150,
            width: 200,
            height: 200,
            fontSize: 24,
        });
        drawText(ctx, "Have Fun!", {
            x: 50,
            y: 400,
            width: 200,
            height: 200,
            fontSize: 24,
            fontWeight: 700
        });

        const pet = (issues[currentIssue].issue % 9) + 1;

        drawImageHelper(images["sudokuPet" + pet], 400, 450, 100, 100);

        initSudoku(page.puzzle)
    }
}

async function loadImages(imagesArr) {
    const loadPromises = imagesArr.map(imagePath => {
        const img = new Image();
        img.src = imagePath[1];
        images[imagePath[0]] = img;
        return new Promise((resolve) => {
            if (img.complete && img.naturalWidth !== 0) {
                resolve();
            } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
            }
        });
    });
    
    await Promise.all(loadPromises);
}

async function loadIssue(issue) {
  try {
    const issueJson = await import(`../json/issue${issue}.json`, { with: { type: 'json' } });

    issues[issue] = issueJson.default;
  } catch (err) {
    console.error(`Issue ${issue} could not be loaded, with error:\n`, err);
  }
}

async function init() {
    const imagesArr = [];
    for (let i = 1; i < 10; i++) {
        imagesArr.push(["sudokuPet" + i, `./images/sudokuPet${i}.png`])
    }
    
    imagesArr.push(["discord", `./images/discord.png`]);
    
    await loadImages(imagesArr);
    await switchIssue(lastIssue);
}

async function switchIssue(issue) {
    if(issue > lastIssue || issue < 1) return;
    if(!Object.hasOwn(issues, issue)) {
        await loadIssue(issue);
    }
    currentIssue = issue;
    const imagesArr = issues[currentIssue].images.map(imagePath => [imagePath, `./images/issue${issues[currentIssue].issue}_${imagePath}.png`]);
    await loadImages(imagesArr);
    renderMainPage();
    canvas.focus();
}

function switchPage(direction) {
    const newPage = currentPage + direction;
    const pageCount = issues[currentIssue].pages.length - 1;
    if(newPage > pageCount || newPage < 0) return;
    currentPage = newPage;
    currentGame = null;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(newPage === 0) {
        renderMainPage();
    } else {
        renderPage();
    }
}

function renderMainPage() {
    //Page Background color
    ctx.fillStyle = "#e6e6e6";
    //Border color
    ctx.strokeStyle = "#000000";
    //Border Width
    ctx.lineWidth = 2;
    //Page Borders
    ctx.fill(bgFullPath);
    ctx.stroke(bgFullPath);
    
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.font = "bold 64px 'Times New Roman', Times, serif";
    ctx.fillText("THE FLAT TIMES", 575, 50);
    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    ctx.fillText("$10", 100, 50);
    ctx.fillText("Issue #" + issues[currentIssue].issue, 1050, 50);
    ctx.beginPath();
    ctx.moveTo(25, 80);
    ctx.lineTo(1125, 80);
    ctx.fillText("Flatland Newspaper", 120, 95);
    ctx.fillText(issues[currentIssue].date, 1050, 95);
    ctx.moveTo(25, 110);
    ctx.lineTo(1125, 110);
    ctx.stroke();

    ctx.font = "48px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    ctx.fillText(issues[currentIssue].pages[0].headline.toLocaleUpperCase(), 575, 150);
    
    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";

    for(let i = 0; i < issues[currentIssue].pages[0].text.length; i++) {
        const text = issues[currentIssue].pages[0].text[i];
        drawText(ctx, text, {
            x: 100,
            y: i * 100 + 200,
            width: 200,
            height: 200,
            fontSize: 24,
        });
    }

    drawImageHelper(images[issues[currentIssue].pages[0].image], 575, 400, 400, 400);

    ctx.beginPath()
    ctx.fillStyle = "#656565";
    ctx.fillText("Sections", 935, 250);
    ctx.moveTo(900, 260);
    ctx.lineTo(1125, 260);

    let sections = 1;
    for(let page = 1; page < issues[currentIssue].pages.length; page++) {
        if(issues[currentIssue].pages[page].format === "fullpage") {
            const sectionName = sectionsMap[issues[currentIssue].pages[page].type] || "Extras";
            ctx.fillText(sectionName, 1000, 250 + (30 * sections));
            ctx.moveTo(900, 260 + (30 * sections));
            ctx.lineTo(1125, 260 + (30 * sections));
            sections++;
        } else {
            const section1Name = sectionsMap[issues[currentIssue].pages[page].sections[0].type] || "Extras";
            const section2Name = sectionsMap[issues[currentIssue].pages[page].sections[1].type] || "Extras";
            ctx.fillText(section1Name, 1000, 250 + (30 * sections));
            ctx.moveTo(900, 260 + (30 * sections));
            ctx.lineTo(1125, 260 + (30 * sections));
            sections++;
            ctx.fillText(section2Name, 1000, 250 + (30 * sections));
            ctx.moveTo(900, 260 + (30 * sections));
            ctx.lineTo(1125, 260 + (30 * sections));
            sections++;
        }
    }
    ctx.stroke();
}

function renderPage() {
    //Page Background color
    ctx.fillStyle = "#e6e6e6";
    //Border color
    ctx.strokeStyle = "#000000";
    //Border Width
    ctx.lineWidth = 2;
    

    //Page Borders
    ctx.fill(bgPath);
    ctx.stroke(bgPath);

    //Content
    if(issues[currentIssue].pages[currentPage].format === "fullpage") {
        drawContentFull();
    } else {
        drawContent();
    }
    
    ctx.lineWidth = 2;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    ctx.beginPath();
    ctx.moveTo(25, 20);
    ctx.lineTo(530, 20);
    ctx.moveTo(25, 50);
    ctx.lineTo(530, 50);
    ctx.moveTo(620, 20);
    ctx.lineTo(1125, 20);
    ctx.moveTo(620, 50);
    ctx.lineTo(1125, 50);
    ctx.stroke();

    //Shadow
    const shadowWidth = 30;
    
    ctx.save();
    ctx.clip(bgPath);

    const grad = ctx.createLinearGradient(meio - shadowWidth, 0, meio + shadowWidth, 0);
    grad.addColorStop(0, "rgba(0, 0, 0, 0)");
    grad.addColorStop(0.5, "rgba(0, 0, 0, 0.18)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(meio - shadowWidth, 0, shadowWidth * 2, canvas.height);

    ctx.restore();
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(meio, recuo);
    ctx.lineTo(meio, canvas.height - recuo);
    ctx.stroke();
}

function drawContentFull() {
    const page = issues[currentIssue].pages[currentPage];
    ctx.fillStyle = "black";

    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";

    if(page.type) {
        drawText(ctx, sectionsMap[page.type], {
            x: 25,
            y: 30,
            width: 475,
            fontSize: 16,
        });
        drawText(ctx, sectionsMap[page.type], {
            x: 650,
            y: 30,
            width: 475,
            fontSize: 16,
        });
    }

    ctx.font = "48px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    if(page.headline) {
        drawText(ctx, page.headline.toLocaleUpperCase(), {
            x: 0,
            y: 75,
            width: 550,
            fontSize: 48,
        });
    }
    
    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";

    if(page.type === "puzzle") {
        currentGame = page.game;
        games[page.game](page);
        return;
    }
    
    if(page.images) {
        page.images.forEach(image => {
            drawImageHelper(images[image.name], image.x, image.y, image.width || 450, image.height || 450)
        })
    }

    if(page.text) {
        page.text.forEach(text => {
            drawText(ctx, text.text, {
                x: text.x,
                y: text.y,
                width: text.width || 500,
                height: text.height || 200,
                fontSize: text.font || 18,
                align: "left"
            });
        })
    }
}

function drawContent() {
    const page = issues[currentIssue].pages[currentPage];

    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    ctx.fillStyle = "black";

    for(let i = 0; i < 2; i++) {
        const initialX = i * 575;
        const section = page.sections[i];
        if(section.images) {
            section.images.forEach(image => {
                drawImageHelper(images[image.name], initialX + image.x, image.y, image.width || 450, image.height || 450, image.clip || false)
            })
        }

        if(section.text) {
            section.text.forEach(text => {
                drawText(ctx, text.text, {
                    x: initialX + text.x,
                    y: text.y,
                    width: text.width || 575,
                    height: text.height || 200,
                    fontSize: text.font || 24,
                });
            })
        }

        //Section Name
        if(section.type) {
            drawText(ctx, sectionsMap[section.type], {
                x: 25 + (625 * i),
                y: 30,
                width: 475,
                fontSize: 16,
            });
        }
        //Headline
        if(section.headline) {
            drawText(ctx, section.headline.toLocaleUpperCase(), {
                x: 25 + (625 * i),
                y: 75,
                width: 475,
                fontSize: 48,
            });
        }
    }
}


/** @param {MouseEvent} */
canvas.addEventListener("click", /** @param {MouseEvent} e */ (e) => {
    if(currentGame) {
        clickHandler[currentGame](e);
    }
    if(e.clientX > 0 && e.clientX < 50) {
        switchPage(-1);
    } else if (e.clientX < 1150 && e.clientX > 1100) {
        switchPage(1);
        
    }
})
canvas.addEventListener("keydown", /** @param {KeyboardEvent} e */ (e) => {
    if(currentGame) {
        keyHandler[currentGame](e);
    }

    if(e.key === "ArrowLeft") {
        switchPage(-1);
    } else if (e.key === "ArrowRight") {
        switchPage(1);
    }
})

init();