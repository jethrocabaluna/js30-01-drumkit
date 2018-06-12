function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== "transform" && !this.classList.contains("playing")) return;
    this.classList.remove("playing");
}

document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("keypress", playSound);

    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});