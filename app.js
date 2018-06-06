document.addEventListener("DOMContentLoaded", e => {
    document.addEventListener("keypress", e => {
        console.log(e.keyCode);
        if (e.keyCode === 65 || e.keyCode === 97) {
            document.getElementById("A-key").play();
            document.getElementById("key-a").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-a").classList.remove("playing");
            },100);
        } else if (e.keyCode === 83 || e.keyCode === 115) {
            document.getElementById("S-key").play();
            document.getElementById("key-s").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-s").classList.remove("playing");
            },100);
        } else if (e.keyCode === 68 || e.keyCode === 100) {
            document.getElementById("D-key").play();
            document.getElementById("key-d").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-d").classList.remove("playing");
            },100);
        } else if (e.keyCode === 70 || e.keyCode === 102) {
            document.getElementById("F-key").play();
            document.getElementById("key-f").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-f").classList.remove("playing");
            },100);
        } else if (e.keyCode === 71 || e.keyCode === 103) {
            document.getElementById("G-key").play();
            document.getElementById("key-g").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-g").classList.remove("playing");
            },100);
        } else if (e.keyCode === 72 || e.keyCode === 104) {
            document.getElementById("H-key").play();
            document.getElementById("key-h").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-h").classList.remove("playing");
            },100);
        } else if (e.keyCode === 74 || e.keyCode === 106) {
            document.getElementById("J-key").play();
            document.getElementById("key-j").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-j").classList.remove("playing");
            },100);
        } else if (e.keyCode === 75 || e.keyCode === 107) {
            document.getElementById("K-key").play();
            document.getElementById("key-k").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-k").classList.remove("playing");
            },100);
        } else if (e.keyCode === 76 || e.keyCode === 108) {
            document.getElementById("L-key").play();
            document.getElementById("key-l").classList.add("playing");
            setTimeout(function() {
                document.getElementById("key-l").classList.remove("playing");
            },100);
        }
    });
});