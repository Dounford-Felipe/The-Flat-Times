const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function shuffleAlphabet() {
    const suffled = [...alphabet];
    for (let i = suffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [suffled[i], suffled[j]] = [suffled[j], suffled[i]];
    }
    return suffled;
}

/**
 * 
 * @param {string} message 
 */
function shuffleMessage(message) {
    const shuffledAlphabet = shuffleAlphabet();

    const messageArr = message.toLocaleUpperCase().split("");
    const newMessage = messageArr.map(l => {
        const index = alphabet.findIndex(a => a === l);
        if(index !== -1) return shuffledAlphabet[index];
        return l;
    }).join("");

    return [newMessage, shuffledAlphabet];
}

const messageEl = document.getElementById("message");
const shuffledEl = document.getElementById("shuffledMessage");
const alphabetEl = document.getElementById("shuffledAlphabet");
messageEl.addEventListener("input", () => {
    const message = messageEl.value;
    const [shuffled, alpha] = shuffleMessage(message);
    shuffledEl.innerText = shuffled;
    alphabetEl.innerText = alpha;
})
