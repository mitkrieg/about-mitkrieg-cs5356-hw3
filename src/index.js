const head = document.getElementById("headerText");

function wave() {
    console.log('wave!')
    const hand = document.getElementById("wave");
    hand.style.transform = "rotate(45deg)";
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},250);
    setTimeout(() => {hand.style.transform = "rotate(45deg)";},250);
    setTimeout(() => {hand.style.transform = "rotate(0deg)";},250);
    // hand.style.transform = "rotate(45deg)";
}

head.addEventListener("mouseover", wave);