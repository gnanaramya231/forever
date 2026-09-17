function openGift() {
    
setInterval(createHeart, 700);
    document.getElementById("gift").scrollIntoView({
        behavior: "smooth"
    });
}

function createHeart() {

    const container = document.getElementById("floating-hearts");

    const heart = document.createElement("div");

    const hearts = ["❤️", "💕", "💖", "✨", "💗"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.classList.add("floating-heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);

function revealSurprise() {

    const message = document.getElementById("secret-message");

    message.style.display = "block";

}

function revealSurprise() {

    const message = document.getElementById("secret-message");

    message.style.display = "block";

}