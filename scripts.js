console.log("This is a test for my capstone project.");

const slider = document.querySelector(".slider");
const sliderBG = document.querySelector(".hero-slider-background");
const sliderFG = document.querySelector(".hero-slider-foreground");

// console.log(slider);

// slider.addEventListener("drag", sliderMove);

// function sliderMove(e) {
//     const sliderPos = e.target.value;
//     console.log(e.target.value);
//     ('.hero-slider-foreground').css('width', `${sliderPos}%`);
// }

document.getElementById("slider").addEventListener("change",  (e) => {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    ('.hero-slider-foreground').css('width', `${sliderPos}%`)
  })
