const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
const clearButton = document.getElementById('clear');
const allClearButton = document.getElementById('allClear');
const equalsButton = document.getElementById('equals');

// A function to check and correct the display
function correctDisplay() {
    if (display.value === "") {
        display.value = "0";
    }
}

// For buttons with data-value attribute
buttons.forEach(button => {
    button.addEventListener('click', function() {

        // Check if the button has a data-value attribute
        if (this.hasAttribute('data-value')) {

            // If display is 0 and clicked value is not ".", reset the display before adding new value
            if (display.value === "0" && this.getAttribute('data-value') !== ".") {
                display.value = "";
            }

            const value = this.getAttribute('data-value');
            display.value += value;
        }
    });
});

// C button functionality
clearButton.addEventListener('click', function() {
    display.value = display.value.slice(0, -1);  // Remove last character
    correctDisplay();
});

// AC button functionality
allClearButton.addEventListener('click', function() {
    display.value = '';  // Clear entire display
    correctDisplay();
});

// Equals button functionality
equalsButton.addEventListener('click', function() {
    try {

        // Replace the division symbol (÷) with the actual JavaScript division operator (/)
        let expression = display.value.replace(/÷/g, '/');
        display.value = eval(expression);
        correctDisplay();
    } catch (e) {
        display.value = 'Error';
    }
});

// Initial display correction when the page is loaded
correctDisplay();