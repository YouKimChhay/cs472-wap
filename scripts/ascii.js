"use strict";

window.onload = load;

let textarea = document.getElementById("text-area");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let animationSelection = document.getElementById("animation");
let fontSizeSelection = document.getElementById("fontsize");
let turboSpeed = document.getElementById("turbo");

let originalText = textarea.value;
let toBeAnimated = ANIMATIONS[animationSelection.value];

let startAnimationTimer;
let animationIndex = 0;

let timer = 250;

let fontSize = {
  "Tiny": "7px",
  "Small": "10px",
  "Medium": "12px",
  "Large": "16px",
  "Extra Large": "24px",
  "XXL": "32px"
};

// let fontSizeClassName = {
//   "Tiny": "tiny",
//   "Small": "small",
//   "Medium": "medium",
//   "Large": "large",
//   "Extra Large": "xlarge",
//   "XXL": "xxlarge"
// };

function load() {
  // "use strict";

  // console.log("hello");

  startbtn.onclick = handleStartClicked;
  stopbtn.onclick = handleStopClicked;
  fontSizeSelection.onchange = handleFontSizeSelectionChanged;
  turboSpeed.onchange = handleTurboSpeedChanged;
}

function handleStartClicked() {
  // console.log("start btn clicked!");
  startbtn.disabled = true;
  stopbtn.disabled = false;

  // console.log(textarea.value);
  // console.log(animationSelection.value);
  // console.log(fontSizeSelection.value);
  // console.log(turboSpeed.checked);

  toBeAnimated = ANIMATIONS[animationSelection.value];

  originalText = textarea.value;
  if (originalText != "") {
    toBeAnimated = originalText;
  }

  animating();
}

function handleStopClicked() {
  // console.log("stop btn clicked!");
  stopbtn.disabled = true;
  startbtn.disabled = false;

  clearInterval(startAnimationTimer);
  textarea.value = originalText;
  animationIndex = 0;
}

function animating() {
  let animations = getAnimations();
  clearInterval(startAnimationTimer);
  startAnimationTimer = setInterval(animate, timer, animations);
}

function getAnimations() {
  // let animations = ANIMATIONS[toBeAnimated].split("=====\n");
  // console.log(animations);
  // return animations;
  return toBeAnimated.split("=====\n");
}

function animate(animations) {
  if (animationIndex >= animations.length) {
    animationIndex = 0;
  }
  textarea.value = animations[animationIndex];
  animationIndex++;
}

function handleFontSizeSelectionChanged() {
  let size = fontSizeSelection.value;
  textarea.style.fontSize = fontSize[size];

  // textarea.className = fontSizeClassName[size];
}

function handleTurboSpeedChanged() {
  if (turboSpeed.checked) {
    timer = 50;
  } else {
    timer = 250;
  }

  if (startbtn.disabled) {
    animating();
  }
}
