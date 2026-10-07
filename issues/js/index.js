import { drawText } from "https://esm.sh/canvas-txt";


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

const contentJson = {
    "issue": 1,
    "date": "Octuber 9, 2026",
    "pages": [
        {
            "format": "fullpage",
            "type": "mainPage",
            "headline": "Big Release!",
            "text": [
                "This is the first edition",
                "We will have more text",
                "Stay tuned"
            ],
            "image": "readers"
        },
        {
            "format": "fullpage",
            "type": "featuredArea",
            "headline": "EverBrook Bank",
            "text": [
                {
                    "text": "Everbrook Bank, also known as EB, is the hot spot in the Flatland",
                    "x": 600,
                    "y": 0
                },
                {
                    "text": "Flatters of all ages get together to talk and trade there",
                    "x": 600,
                    "y": 200
                },
                {
                    "text": "The bank main porpose is to bank and withdraw items, to list and buy items from the Global Market",
                    "x": 600,
                    "y": 400
                }
            ],
            "images": [
                {
                    "name": "featuredArea",
                    "x": 275,
                    "y": 350
                }
            ]
        },
        {
            "format": "fullpage",
            "type": "puzzle",
            "game": "sudoku",
            "puzzle": "017006900356194020089007106065000273872563419043000685521000000798005300634000590",
            "puzzle2": "804071090976030000501960000307495000",
            "headline": "Sudoku"
        },
        {
            "format": "fullpage",
            "type": "poetry",
            "headline": "The day the world became Flat",
            "text": [
                {
                    "text": "Awakened alone, in a land that was Flat.\nI came across a crying lady, who had just lost her cat.\nShe would give me ten coins, if I could bring the pet home.\nWhere this feline was, I did not know.",
                    "x": 50,
                    "y": 130
                },
                {
                    "text": "Walking due North, I passed by a large home with guards garrisoned outside.\nThey were armed with bronze swords, standing by the words, \"Mayor's House\", on a sign.\nAs I continued through town, I thought to myself, \"this man...must be rich!\"\nThen I saw in the distance, a place where people could stand and fish.",
                    "x": 50,
                    "y": 275
                },
                {
                    "text": "I met a guy named Ned, he loved the beach and he owned a boat.\nFor 25 coins, I could float to a jungle island, but I was too broke.\nThat's when I found the cat, watching some men fish for sardines.\nHere kitty, kitty, kitty, but she would not come to me.",
                    "x": 50,
                    "y": 450
                },
                {
                    "text": "Fresh out of ideas, South bound, I retraced my steps.\nI found a farm with a cow and a pail, so I beat the cow to death\nDon't ask me how it happened, but there was milk in my bucket.\nI took it back to the kitty, and the kitty loved it!",
                    "x": 650,
                    "y": 50,
                    "width": 450
                },
                {
                    "text": "Back to her home, back to her owner, the cat followed me back.\nThe crying lady stopped crying, thanking me for the task.\nAs promised by her, she gave me my ten coins in pay.\nWhat I did with those ten coins, is a story for another day!",
                    "x": 650,
                    "y": 190,
                    "width": 460
                },
                {
                    "text": "Ever since then, more people have came and joined the fun.\nAt first they walk slowly, but then they learn how to run.\nTrapped together in this world, we can quest and we can chat.\nAnd that's what happened when I awoke in a world that was Flat.",
                    "x": 650,
                    "y": 340,
                    "width": 450
                },
                {
                    "text": "-From taoteching",
                    "x": 950,
                    "y": 430
                }
            ]
        },
        {
            "format": "half",
            "sections": [
                {
                    "type": "comic",
                    "headline": "Comics",
                    "images": [
                        {
                            "name": "comic",
                            "x": 290,
                            "y": 350,
                            "width": 520
                        }
                    ],
                    "text": [
                        {
                            "text": "-By Orange",
                            "x": 210,
                            "y": 370,
                            "font": 15
                        }
                    ]
                },
                {
                    "type": "art",
                    "headline": "Fan Art",
                    "images": [
                        {
                            "name": "fanart",
                            "x": 290,
                            "y": 350,
                            "width": 520
                        }
                    ],
                    "text": [
                        {
                            "text": "-By Sunlit",
                            "x": 215,
                            "y": 405,
                            "font": 15
                        }
                    ]
                }
            ]
        },
        {
            "format": "half",
            "sections": [
                {
                    "type": "ad",
                    "images": [
                        {
                            "name": "ad",
                            "x": 288,
                            "y": 320,
                            "width": null,
                            "height": 640,
                            "clip": true
                        }
                    ]
                },
                {
                    "type": "help",
                    "headline": "We Need Your help!",
                    "text": [
                        {
                            "text": "The Flat Times is looking for fresh ink! Do you have stories to tell, witty riddles, or original jokes to share with the flatland?",
                            "x": 0,
                            "y": 170
                        },
                        {
                            "text": "SUBMISSION GUIDELINES:\n• All content must be original.\n• Include the answer when submitting riddles.\n• Accepted submissions will be featured in upcoming editions!",
                            "x": 0,
                            "y": 320
                        },
                        {
                            "text": "Send your drafts via Discord ticket or directly to our Chief Editor:",
                            "x": 0,
                            "y": 450
                        },
                        {
                            "text": "@dounford",
                            "x": -100,
                            "y": 505
                        },
                        {
                            "text": "discord.gg/KHz4sEUse3",
                            "x": 120,
                            "y": 505
                        }
                    ],
                    "images": [
                        {
                            "name": "discord",
                            "x": 80,
                            "y": 600,
                            "width": 50
                        }
                    ]
                }
            ]
        }
    ],
    "images": [
        "readers",
        "featuredArea",
        "ad",
        "comic",
        "fanart"
    ]
}

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

        const pet = (contentJson.issue % 9) + 1;

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

async function init() {
    const imagesArr = contentJson.images.map(imagePath => [imagePath, `./images/issue${contentJson.issue}_${imagePath}.png`]);

    for (let i = 1; i < 10; i++) {
        imagesArr.push(["sudokuPet" + i, `./images/sudokuPet${i}.png`])
    }

    imagesArr.push(["discord", `./images/discord.png`]);
    
    await loadImages(imagesArr);
    
    renderMainPage();
    switchPage(2)
    
    canvas.focus();
}

function switchPage(direction) {
    const newPage = currentPage + direction;
    const pageCount = contentJson.pages.length - 1;
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
    ctx.fillText("Issue #" + contentJson.issue, 1050, 50);
    ctx.beginPath();
    ctx.moveTo(25, 80);
    ctx.lineTo(1125, 80);
    ctx.fillText("Flatland Newspaper", 120, 95);
    ctx.fillText(contentJson.date, 1050, 95);
    ctx.moveTo(25, 110);
    ctx.lineTo(1125, 110);
    ctx.stroke();

    ctx.font = "48px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    ctx.fillText(contentJson.pages[0].headline.toLocaleUpperCase(), 575, 150);
    
    ctx.font = "16px 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";

    for(let i = 0; i < contentJson.pages[0].text.length; i++) {
        const text = contentJson.pages[0].text[i];
        drawText(ctx, text, {
            x: 100,
            y: i * 100 + 200,
            width: 200,
            height: 200,
            fontSize: 24,
        });
    }

    drawImageHelper(images[contentJson.pages[0].image], 575, 400, 400, 400);

    ctx.beginPath()
    ctx.fillStyle = "#656565";
    ctx.fillText("Sections", 935, 250);
    ctx.moveTo(900, 260);
    ctx.lineTo(1125, 260);

    let sections = 1;
    for(let page = 1; page < contentJson.pages.length; page++) {
        if(contentJson.pages[page].format === "fullpage") {
            const sectionName = sectionsMap[contentJson.pages[page].type] || "Extras";
            ctx.fillText(sectionName, 1000, 250 + (30 * sections));
            ctx.moveTo(900, 260 + (30 * sections));
            ctx.lineTo(1125, 260 + (30 * sections));
            sections++;
        } else {
            const section1Name = sectionsMap[contentJson.pages[page].sections[0].type] || "Extras";
            const section2Name = sectionsMap[contentJson.pages[page].sections[1].type] || "Extras";
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
    if(contentJson.pages[currentPage].format === "fullpage") {
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
    const page = contentJson.pages[currentPage];
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
    const page = contentJson.pages[currentPage];

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