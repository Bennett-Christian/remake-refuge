// The new concept I pursued was to create a comparison image slider to simultaneously show two images that occupy the same space. The slider changes the width of the image containers to show a percent of the images to match the slider's value

const scrollButton = document.querySelector(".hero-button");
const scrollTitle = document.getElementById("scroll-title");
if (scrollButton) {
    scrollButton.addEventListener("click", () => {
        scrollTitle.scrollIntoView();
        console.log("Scrolling downwards")
    });
}

const slider = document.querySelector("input[type='range']");
const sliderContainer = document.querySelector(".hero-slider-container")
const sliderLeft = document.querySelector(".hero-slider-left");
const sliderRight = document.querySelector(".hero-slider-right");
if (slider) {
    slider.addEventListener("input", e => {
        sliderLeft.style.flexBasis = e.target.value + "%";
        sliderRight.style.flexBasis = (100 - e.target.value) + "%";
        const imageRight = sliderRight.children[0];
        const widthLeftPct = e.target.value;
        const widthRightPct = 100 - widthLeftPct;
        imageRight.style.left = (widthLeftPct / widthRightPct * -100) + "%";
        console.log("Slider value changed, image adjusted");
    });
}

const carousel = document.querySelector(".central-carousel-container");
console.log(carousel);
if (carousel) {
    const carouselFirst = document.querySelector(".central-carousel-first");
    const carouselSecond = document.querySelector(".central-carousel-second");
    const carouselThird = document.querySelector(".central-carousel-third");
    const carouselFourth = document.querySelector(".central-carousel-fourth");
    const displayButtonFirst = document.querySelector(".central-display-button-first");
    const displayButtonSecond = document.querySelector(".central-display-button-second");
    const displayButtonThird = document.querySelector(".central-display-button-third");
    const displayButtonFourth = document.querySelector(".central-display-button-fourth");
    displayButtonFirst.addEventListener("click", () => {
        carouselSecond.style.display = "none";
        carouselFirst.style.display = "block";
        console.log("Hiding second carousel image, showing first carousel image");
    });
    displayButtonSecond.addEventListener("click", () => {
        carouselFirst.style.display = "none";
        carouselSecond.style.display = "block";
        console.log("Hiding first carousel image, showing second carousel image");
    });
    displayButtonThird.addEventListener("click", () => {
        carouselFourth.style.display = "none";
        carouselThird.style.display = "block";
        console.log("Hiding fourth carousel image, showing third carousel image");
    });
    displayButtonFourth.addEventListener("click", () => {
        carouselFourth.style.display = "block";
        carouselThird.style.display = "none";
        console.log("Hiding third carousel image, showing fourth carousel image");
    });
}

const subscribeForm = document.getElementById("subscribe-form");
function pollResultsRequest(vote) {
    // in real life, this could contact an API to handle this
    const results = {
        "Secret of Mana": 1,
        "Final Fantasy VII": 4,
        "Spyro Reignited Trilogy": 3,
    };
    let keys = Object.keys(results);
    if (!keys.includes(vote)) {
        return results; // this might normally raise an error, but just returns results unchanged
    }
    results[vote] += 1;
    return results;
}

if (subscribeForm) {
    subscribeForm.addEventListener("submit", e => {
        e.preventDefault();
        while (true) {
            let answer = prompt("To prove you are a human, answer 3 + 14:");
            if (answer === null) {
                console.log("Cancelled");
                return;
            }
            answer = parseInt(answer);
            if (answer === (3 + 14)) {
                console.log("Verified as human, showing poll results:");
                break;
            }
        }
        const gameDropdown = document.getElementById("game");
        const resultsDiv = document.createElement("div");
        resultsDiv.id = "poll-results";
        resultsDiv.innerText = "The current poll results are as follows:";
        const vote = gameDropdown.value;
        const pollResults = pollResultsRequest(vote);
        const keys = Object.keys(pollResults);
        const values = Object.values(pollResults);
        for (i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = values[i];
            console.log(key, value);
            const wrapperDiv = document.createElement("div");
            const gameNameSpan = document.createElement("span");
            gameNameSpan.innerText = key + ": ";
            const gameVotesSpan = document.createElement("span");
            gameVotesSpan.innerText = pollResults[key];
            wrapperDiv.append(gameNameSpan, gameVotesSpan);
            resultsDiv.append(wrapperDiv);
        }
        subscribeForm.replaceWith(resultsDiv);
        const pollText = document.getElementById("central-poll-text");
        const dotIndex = pollText.innerText.indexOf(".");
        const newPollText = pollText.innerText.slice(0, dotIndex + 1);
        pollText.innerText = newPollText;
    });
}
