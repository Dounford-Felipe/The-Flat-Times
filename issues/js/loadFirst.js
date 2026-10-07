/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const images = {};
const clickHandler = {};
const keyHandler = {};
const meio = canvas.width/2;
const recuo = 60;
const bgPath = new Path2D();
bgPath.moveTo(1, 0);
bgPath.lineTo(meio - recuo, 1);
bgPath.quadraticCurveTo(meio, 0, meio, recuo);
bgPath.quadraticCurveTo(meio, 0, meio + recuo, 1);
bgPath.lineTo(canvas.width - 1, 1);
bgPath.lineTo(canvas.width - 1, canvas.height);
bgPath.lineTo(meio + recuo, canvas.height - 1);
bgPath.quadraticCurveTo(meio, canvas.height, meio, canvas.height - recuo);
bgPath.quadraticCurveTo(meio, canvas.height, meio - recuo, canvas.height - 1);
bgPath.lineTo(0, canvas.height - 1);
bgPath.closePath();
const bgFullPath = new Path2D();
bgFullPath.moveTo(1, 0);
bgFullPath.lineTo(canvas.width - 1, 1);
bgFullPath.lineTo(canvas.width - 1, canvas.height);
bgFullPath.lineTo(0, canvas.height - 1);
bgFullPath.closePath();

function drawImageHelper(img, x, y, maxW = img.width, maxH = img.height, clip = false) {
    const ratio = Math.min(maxW / img.width, maxH / img.height);
    
    const finalWidth = img.width * ratio;
    const finalHeight = img.height * ratio;

    ctx.save();
    if(clip) {
        ctx.clip(bgPath);
    }
    ctx.translate(x, y);
    ctx.drawImage(img, -finalWidth / 2, -finalHeight / 2, finalWidth, finalHeight);
    ctx.restore();
}