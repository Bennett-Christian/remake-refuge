// The slider changes the width of the image containers to show a percent of the images that matches the slider

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
    });
}

const scrollButton = document.querySelector(".hero-button");
const scrollTitle = document.getElementById("scroll-title");
if (scrollButton) {
    scrollButton.addEventListener("click", () => {
        scrollTitle.scrollIntoView();
    });
}

const subscribeForm = document.getElementById("subscribe-form");
function pollResultsRequest(vote) {
    // in real life, this would contact an API to handle this
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
            console.log(answer);
            if (answer === null) {
                return;
            }
            answer = parseInt(answer);
            if (answer === (3 + 14)) {
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
        console.log(keys);
        for (i = 0; i < keys.length; i++) {
            const key = keys[i];
            console.log(key);
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
