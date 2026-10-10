class Sudoku {
    constructor() {
        this.initialX = 650;
        this.initialY = 125;
        this.type = 1;
        this.rowAmount;
        this.cellSize;
        this.halfCell;
        this.board;
        this.clicked = [null, null];
        this.invalids = [];
        
        clickHandler.sudoku = (e)=>this.handleClick(e);
        keyHandler.sudoku = (e)=>this.handleKey(e);

        const path99 = new Path2D();
        const rowAmount99 = 9;
        const cellSize99 = 50;
        path99.moveTo(this.initialX + 3 * cellSize99, this.initialY);
        path99.lineTo(this.initialX + 3 * cellSize99, this.initialY + cellSize99 * rowAmount99);
        path99.moveTo(this.initialX + 6 * cellSize99, this.initialY);
        path99.lineTo(this.initialX + 6 * cellSize99, this.initialY + cellSize99 * rowAmount99);
        path99.moveTo(this.initialX, this.initialY + 3 * cellSize99);
        path99.lineTo(this.initialX + cellSize99 * rowAmount99, this.initialY + 3 * cellSize99);
        path99.moveTo(this.initialX, this.initialY + 6 * cellSize99);
        path99.lineTo(this.initialX + cellSize99 * rowAmount99, this.initialY + 6 * cellSize99);
        path99.closePath();


        const path66 = new Path2D();
        const rowAmount66 = 6;
        const cellSize66 = 75;
        path66.moveTo(this.initialX + 3 * cellSize66, this.initialY);
        path66.lineTo(this.initialX + 3 * cellSize66, this.initialY + cellSize66 * rowAmount66);
        path66.moveTo(this.initialX, this.initialY + 2 * cellSize66);
        path66.lineTo(this.initialX + cellSize66 * rowAmount66, this.initialY + 2 * cellSize66);
        path66.moveTo(this.initialX, this.initialY + 4 * cellSize66);
        path66.lineTo(this.initialX + cellSize66 * rowAmount66, this.initialY + 4 * cellSize66);
        path66.closePath();
        this.sudokuPath = [path66, path99];
    }
    
    /** @param {MouseEvent} e */
    handleClick(e) {
        if(e.clientX < this.initialX || e.clientX > this.initialX + this.cellSize * this.rowAmount || e.clientY < this.initialY || e.clientY > this.initialY + this.cellSize * this.rowAmount) {
            this.clicked[0] = null;
            this.clicked[1] = null;
        } else {
            console.log(e.clientX, this.initialX, this.cellSize)
            this.clicked[0] = Math.floor((e.clientX - this.initialX) / this.cellSize);
            this.clicked[1] = Math.floor((e.clientY - this.initialY) / this.cellSize);
        }
        this.drawBoard();
    }

    /** @param {KeyboardEvent} e */
    handleKey(e) {
        console.log(e)
        if(this.clicked[0] === null) return;
        if(e.keyCode > 48 && e.keyCode < 58) {
            const num = e.keyCode - 48;
            this.board[this.clicked[0]][this.clicked[1]] = num;
            this.checkInvalid(this.clicked[0], this.clicked[1]);
            this.drawBoard();
        } else if (e.key === "0" || e.key === "Backspace") {
            this.board[this.clicked[0]][this.clicked[1]] = 0;
            this.checkInvalid(this.clicked[0], this.clicked[1]);
            this.drawBoard();
        }
    }

    init(page) {
        const boardStr = page.puzzle;
        
        if(boardStr.length === 81) {
            this.type = 1;
            this.rowAmount = 9;
            this.cellSize = 450 / this.rowAmount;
            this.halfCell = this.cellSize / 2;
            this.board = [
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
            this.type = 0;
            this.rowAmount = 6;
            this.cellSize = 450 / this.rowAmount;
            this.halfCell = this.cellSize / 2;
            this.board = [
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
            const x = index % this.rowAmount;
            const y = Math.floor(index / this.rowAmount);
            this.board[x][y] = Number(num);
        })

        this.drawBoard();
    }

    drawBoard() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.initialX, this.initialY, this.cellSize * this.rowAmount, this.cellSize * this.rowAmount)
        ctx.fillStyle = "black";
        ctx.globalAlpha = 1;

        for(let i = 1; i < this.rowAmount; i++) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.initialX, this.initialY + i * this.cellSize);
            ctx.lineTo(this.initialX + this.cellSize * this.rowAmount, this.initialY + i * this.cellSize)
            ctx.moveTo(this.initialX + i * this.cellSize, this.initialY);
            ctx.lineTo(this.initialX + i * this.cellSize, this.initialY + this.cellSize * this.rowAmount)
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.lineWidth = 5;

        ctx.stroke(this.sudokuPath[this.type]);

        if(this.clicked[0] !== null) {
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = "gray";
            for(let i = 0; i < this.rowAmount; i++) {
                ctx.rect(this.initialX + i * this.cellSize, this.initialY + this.clicked[1] * this.cellSize, this.cellSize, this.cellSize);
                ctx.rect(this.initialX + this.clicked[0] * this.cellSize, this.initialY + i * this.cellSize, this.cellSize, this.cellSize);
            }
            ctx.fill();
            ctx.beginPath();
            ctx.globalAlpha = 0.5;
            ctx.rect(this.initialX + this.clicked[0] * this.cellSize, this.initialY + this.clicked[1] * this.cellSize, this.cellSize, this.cellSize);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
        ctx.fillStyle = "red";
        this.invalids.forEach(invalid => {
            ctx.beginPath();
            ctx.globalAlpha = 0.4;
            ctx.rect(this.initialX + invalid[0] * this.cellSize, this.initialY + invalid[1] * this.cellSize, this.cellSize, this.cellSize);
            ctx.fill();
        })
        ctx.globalAlpha = 1;

        for(let x = 0; x < this.rowAmount; x++) {
            for(let y = 0; y < this.rowAmount; y++) {
                if(this.board[x][y] === 0) continue;
                drawImageHelper(images["sudokuPet" + this.board[x][y]], this.initialX + x * this.cellSize + this.halfCell, this.initialY + y * this.cellSize + this.halfCell, this.cellSize * 0.8)
            }
        }
    }

    checkInvalid(x, y) {
        const num = this.board[x][y];
        if(num === 0) return;
        for(let i = 0; i < 6; i++) {

        }
    }

    render() {
        drawText(ctx, "Fill each 3x3 set with a different pet", {
            x: 50,
            y: 100,
            width: 200,
            height: 200,
            fontSize: 24,
        });
        drawText(ctx, "Fill cells until the this.board is complete. Pets in sets, rows or columns cannot repeat", {
            x: 50,
            y: 250,
            width: 200,
            height: 200,
            fontSize: 24,
        });
        drawText(ctx, "Each pet can only appear on the this.board 9 times", {
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

        this.drawBoard();
    }
}

Games["sudoku"] = new Sudoku();