// Get references to HTML elements
const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const displayArea = document.getElementById("displayArea");

// Event listener for the Save button
saveButton.addEventListener("click", () => {
    const text = textInput.value;

    if (text.trim() !== "") {
        // Save text to local storage
        localStorage.setItem("SoulScribbles", text);
        displayArea.textContent = "Your Scribbles are saved!";
    } else {
        displayArea.textContent = "Please do write some Scribbles first :)";
    }
});

// Event listener for the Clear button
clearButton.addEventListener("click", () => {
    // Clear text from text area and local storage
    textInput.value = "";
    localStorage.removeItem("SoulScribbles");
    displayArea.textContent = "OH ! your Scribbles are cleared:(";
});

// Initialize the text area with content from local storage (if available)
const savedText = localStorage.getItem("SoulScribbles");
if (savedText) {
    textInput.value = savedText;
    displayArea.textContent = "Your Previously Saved Scribbles <3";
}