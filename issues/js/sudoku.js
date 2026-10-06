let rowAmount;
let cellSize;
let halfCell;
const initialX = 650;
const initialY = 125;
let board;
const clicked = [null, null];
const invalids = [];

/**
 * @param {MouseEvent} e 
 */
clickHandler.sudoku = function(e) {
    if(e.clientX < initialX || e.clientX > initialX + cellSize * rowAmount || e.clientY < initialY || e.clientY > initialY + cellSize * rowAmount) {
        clicked[0] = null;
        clicked[1] = null;
    } else {
        clicked[0] = Math.floor((e.clientX - initialX) / cellSize);
        clicked[1] = Math.floor((e.clientY - initialY) / cellSize);
    }
    drawBoard();
}
/**
 * @param {KeyboardEvent} e 
 */
keyHandler.sudoku = function(e)  {
    console.log(e)
    if(clicked[0] === null) return;
    if(e.keyCode > 48 && e.keyCode < 58) {
        const num = e.keyCode - 48;
        board[clicked[0]][clicked[1]] = num;
        checkInvalid(clicked[0], clicked[1]);
        drawBoard();
    } else if (e.key === "0" || e.key === "Backspace") {
        board[clicked[0]][clicked[1]] = 0;
        checkInvalid(clicked[0], clicked[1]);
        drawBoard();
    }
}

function checkInvalid(x, y) {
    const num = board[x][y];
    if(num === 0) return;
    for(let i = 0; i < 6; i++) {

    }
}

function drawBoard() {
    ctx.fillStyle = "white";
    ctx.fillRect(initialX, initialY, cellSize * rowAmount, cellSize * rowAmount)
    ctx.fillStyle = "black";
    ctx.globalAlpha = 1;

    for(let i = 1; i < rowAmount; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.moveTo(initialX, initialY + i * cellSize);
        ctx.lineTo(initialX + cellSize * rowAmount, initialY + i * cellSize)
        ctx.moveTo(initialX + i * cellSize, initialY);
        ctx.lineTo(initialX + i * cellSize, initialY + cellSize * rowAmount)
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(initialX + 3 * cellSize, initialY);
    ctx.lineTo(initialX + 3 * cellSize, initialY + cellSize * rowAmount);
    if(board.length === 9) {
        ctx.moveTo(initialX + 6 * cellSize, initialY);
        ctx.lineTo(initialX + 6 * cellSize, initialY + cellSize * rowAmount);
        ctx.moveTo(initialX, initialY + 3 * cellSize);
        ctx.lineTo(initialX + cellSize * rowAmount, initialY + 3 * cellSize);
        ctx.moveTo(initialX, initialY + 6 * cellSize);
        ctx.lineTo(initialX + cellSize * rowAmount, initialY + 6 * cellSize);
    } else {
        ctx.moveTo(initialX, initialY + 2 * cellSize);
        ctx.lineTo(initialX + cellSize * rowAmount, initialY + 2 * cellSize);
        ctx.moveTo(initialX, initialY + 4 * cellSize);
        ctx.lineTo(initialX + cellSize * rowAmount, initialY + 4 * cellSize);
    }
    ctx.stroke();

    if(clicked[0] !== null) {
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = "gray";
        for(let i = 0; i < rowAmount; i++) {
            ctx.rect(initialX + i * cellSize, initialY + clicked[1] * cellSize, cellSize, cellSize);
            ctx.rect(initialX + clicked[0] * cellSize, initialY + i * cellSize, cellSize, cellSize);
        }
        ctx.fill();
        ctx.beginPath();
        ctx.globalAlpha = 0.5;
        ctx.rect(initialX + clicked[0] * cellSize, initialY + clicked[1] * cellSize, cellSize, cellSize);
        ctx.fill();
        ctx.globalAlpha = 1;
    }
    ctx.fillStyle = "red";
    invalids.forEach(invalid => {
        ctx.beginPath();
        ctx.globalAlpha = 0.4;
        ctx.rect(initialX + invalid[0] * cellSize, initialY + invalid[1] * cellSize, cellSize, cellSize);
        ctx.fill();
    })
    ctx.globalAlpha = 1;

    for(let x = 0; x < rowAmount; x++) {
        for(let y = 0; y < rowAmount; y++) {
            if(board[x][y] === 0) continue;
            drawImageHelper(images["sudokuPet" + board[x][y]], initialX + x * cellSize + halfCell, initialY + y * cellSize + halfCell, cellSize * 0.8)
        }
    }
}

function initSudoku(boardStr) {
    console.log(boardStr, boardStr.length)
    if(boardStr.length === 81) {
        rowAmount = 9;
        cellSize = 450 / rowAmount;
        halfCell = cellSize / 2;
        board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    } else {
        rowAmount = 6;
        cellSize = 450 / rowAmount;
        halfCell = cellSize / 2;
        board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    }


    const puzzle = boardStr.split("");
    puzzle.forEach((num, index) => {
         const x = index % rowAmount;
         const y = Math.floor(index / rowAmount);
         board[x][y] = Number(num);
     })

    drawBoard();
}