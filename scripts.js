console.log("This is a test for my capstone project.");

const slider = document.querySelector("input[type='range']");
const sliderFG = document.querySelector(".hero-slider-foreground");
const sliderBG = document.querySelector(".hero-slider-background");

const sliderFGImageWidth = parseInt(getComputedStyle(sliderFG).width.slice(
    0,
    getComputedStyle(sliderFG).width.indexOf("r"))
);
console.log(sliderFGImageWidth);

slider.addEventListener("input", (e) => {
    adjustImage(e.target);
})

function adjustImage(target) {
    sliderFG.computedStyleMap.width = `${(target.value / 100) * sliderFGImageWidth}rem`
    console.log(sliderFG.computedStyleMap.width);
}

adjustImage(slider);
