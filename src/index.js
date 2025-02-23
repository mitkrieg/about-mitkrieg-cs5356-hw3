const head = document.getElementById("headerText");

function wave() {
    console.log('wave!')
    const hand = document.getElementById("wave");
    hand.style.transform = "rotate(45deg)";
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},250);
    setTimeout(() => {hand.style.transform = "rotate(45deg)";},500);
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},750);
}

window.onload = () => {
    setTimeout(wave,500);
}

head.addEventListener("mouseover", wave);
