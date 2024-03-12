console.log("This is a test for my capstone project.");

const slider = document.querySelector("input[type='range']");
const sliderFG = document.querySelector(".hero-slider-foreground");
const sliderBG = document.querySelector(".hero-slider-background");

const sliderFGImageWidth = getComputedStyle(sliderFG).width.slice(
    0,
    getComputedStyle(sliderFG).width.indexOf("r")
);

slider.addEventListener("input", (e) => {
    adjustImage(e.target);
})

function adjustImage(target) {
    sliderFG.computedStyleMap.width = `${(target.value / 100) * sliderFGImageWidth}rem`
}

adjustImage(slider);







// console.log(slider);

// slider.addEventListener("drag", sliderMove);

// function sliderMove(e) {
//     const sliderPos = e.target.value;
//     console.log(e.target.value);
//     ('.hero-slider-foreground').css('width', `${sliderPos}%`);
// }

// document.getElementById("slider").addEventListener("change",  (e) => {
//     const sliderPos = e.target.value;
//     // Update the width of the foreground image
//     ('.hero-slider-foreground').css('width', `${sliderPos}%`)
//   })
