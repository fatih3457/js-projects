const loadText = document.querySelector(".load-text")
const bg = document.querySelector(".bg")

let load = 0;

let int = setInterval(bluring, 30)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int);
    }
}
