const modalWindowElement = document.getElementById("modal-window");
const btnElements = document.querySelectorAll(".button");
const closeElement = document.getElementsByClassName("close")[0];

btnElements.forEach(function(btn) {
    btn.onclick = function() {
        modalWindowElement.style.display = "block";
    }
});
closeElement.onclick = function() {
    modalWindowElement.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalWindowElement) {
        modalWindowElement.style.display = "none";
    }
}