// Theme Toggle (Dark Mode)
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
});

// Scientific Mode Toggle
const scientificToggle = document.getElementById("scientific-toggle");
const scientificButtons = document.querySelector(".scientific-buttons");

scientificToggle.addEventListener("click", () => {
    scientificButtons.classList.toggle("hidden");
});

// Calculator Button Logic
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

function handleButtonClick(event) {
    const target = event.target;
    
    if (target.tagName === "BUTTON") {
        const value = target.textContent;
        
        if (value === "C") {
            display.value = "";
        } else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else {
            display.value += value;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});
