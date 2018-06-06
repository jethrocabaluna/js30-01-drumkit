document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("keypress", e => {

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
        if (!audio) return;
        key.classList.add("playing");
        setTimeout(function() {
            key.classList.remove("playing");
        },100);
        audio.currentTime = 0;
        audio.play();
    });
});