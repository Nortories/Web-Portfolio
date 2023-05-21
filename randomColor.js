// get HTML elements
const staticScreen = document.getElementById('tv_static');
const tvButton = document.getElementById('stop-start-button');
// set images URL and color code inside array
const image = ['aboutme.jpg', 'page1.jpg', 'page2.jpg', 'page3.jpg', 'monster1.png', 'monster2.png', 'ballSmash2.jpg', 'BallSmash1', '#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080'];
let intervalId = null;

// Start the TV static on start up
startStatic();

// Start/Stop the TV static on button click
tvButton.addEventListener('click', onButtonClick);

// Button logic
function onButtonClick() {
    if (tvButton.textContent == 'Stop TV') {
        stopStatic();
    } else {
        startStatic();
    }
}

// Stop Tv
function stopStatic() {
    tvButton.textContent = 'Start TV';
    clearInterval(intervalId);
}

// Start the interval to change the background color randomly
function startStatic() {
    tvButton.textContent = 'Stop TV';
    intervalId = setInterval(changeBackground, 500);
}

// Change the background image at randomly from the image array
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * image.length); // get random number
    const selected = image[randomIndex]; // select a img from the index
    if (selected.startsWith('#')) { // check if selected is color code or a URL
        staticScreen.style.backgroundImage = 'none';
        staticScreen.style.backgroundColor = selected; // Set color
    } else {
        staticScreen.style.backgroundImage = `url(${selected})`; // Set image
        staticScreen.style.backgroundColor = ''; // Reset color
        staticScreen.style.backgroundSize = 'cover'
    }
}