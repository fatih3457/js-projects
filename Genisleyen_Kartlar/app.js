const panels = document.querySelectorAll(".panel");

panels.forEach( panel => {
    panel.addEventListener("click", () => {

        removeAction();
        panel.classList.add("active");
    })
})

function removeAction() {
    panels.forEach( panel => {
        panel.classList.remove("active");
    } )
}