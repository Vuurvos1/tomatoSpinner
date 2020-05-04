const tomato = document.querySelector('#tomato');
const tomatoContainer = document.querySelector('#tomatoContainer');
let minClickDelay = 1000 / 12;
let lastClickDate = new Date();
let angle = 0;
let anglePlus = 2;
let clicks = 0;

// Set functions to loop here (25x per second)
window.setInterval(() => {
    // testing()
    rotateTomato();
}, 40);

tomatoContainer.addEventListener('click', () => {
    let now = new Date();
    // Prevent spam
    if (now.getTime() - lastClickDate.getTime() < minClickDelay) {
        console.log('no clickie :<')
        return;
    }
    lastClickDate = now;

    anglePlus++;

    // clicks++;
    // console.log(clicks)
});


function testing() {
    console.log('test test');
}

function rotateTomato() {
    angle += anglePlus;
    // angle++;
    tomato.style.transform = `rotate(${angle}deg)`;
}