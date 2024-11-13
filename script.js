const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

let noClickCount = 0;
const noMessages = [
    "Creo que te equivocaste",
    "Te equivocaste de nuevo :(",
    "Te tomaste la pasta de hoy miamor?",
    "¡Siga haci y vera oyo",
    "¡Ya sabia q no me amabas!"
];

noButton.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
        noButton.textContent = noMessages[noClickCount];
        noButton.style.transform = `scale(${1 - noClickCount * 0.15})`;
        noClickCount++;
    } else {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yo te amo más, mi amor 💖</h1>
            <p class="heart-animation">Eres mi vida ❤️</p>
            <div class="love-messages">
                <p>💖 Siempre juntos 💖</p>
                <p>💖 Te Lobo mucho 💖</p>
                <p>💖 Mi vida entera eres tú 💖</p>
            </div>
            <div class="hearts"></div>
        </div>
    `;
});
