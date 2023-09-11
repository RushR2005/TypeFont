document.addEventListener("DOMContentLoaded", function () {
    const fontSelect = document.getElementById("fontSelect");
    const fontSizeSelect = document.getElementById("fontSizeSelect");
    const textFormatSelect = document.getElementById("textFormatSelect");
    const textInput = document.getElementById("textInput");
    const displayText = document.getElementById("displayText");
    const copyButton = document.getElementById("copyButton");

    // Populate the font dropdown with available fonts (including the previous ones)
    const fonts = [
        "Arial, sans-serif",
        "Georgia, serif",
        "Courier New, monospace",
        "Comic Sans MS, cursive",
        "Impact, fantasy",
        "Times New Roman, serif",
        "Verdana, sans-serif",
        "Tahoma, sans-serif",
        "Helvetica, sans-serif",
        "Garamond, serif",
        "Palatino, serif",
        "Lucida Console, monospace",
        "Trebuchet MS, sans-serif",
        "Open Sans, sans-serif",
        "Roboto, sans-serif",
        "Lato, sans-serif",
        "Montserrat, sans-serif",
        "Raleway, sans-serif",
        "Playfair Display, serif",
        "Avenir, sans-serif",
        "Bebas Neue, sans-serif",
        "Dancing Script, cursive",
        "Oswald, sans-serif",
        "Pacifico, cursive",
        "Quicksand, sans-serif",
        "Source Sans Pro, sans-serif",
        "Ubuntu, sans-serif",
        "Vollkorn, serif",
        "Fira Sans, sans-serif",
        "Merriweather, serif",
        "Nunito, sans-serif",
        "Calibri, sans-serif",
        "Jokerman, fantasy",
        "Impact, fantasy",
        // Add popular fonts here
        "Verdana, sans-serif",
        "Helvetica, sans-serif",
        "Times New Roman, serif",
        "Arial, sans-serif",
        "Courier New, monospace",
        "Comic Sans MS, cursive",
        "Garamond, serif",
        "Palatino, serif",
        "Trebuchet MS, sans-serif",
        "Open Sans, sans-serif",
        "Roboto, sans-serif",
        "Lato, sans-serif",
        "Montserrat, sans-serif",
        "Raleway, sans-serif",
        "Avenir, sans-serif",
        "Pacifico, cursive",
        "Source Sans Pro, sans-serif",
        "Ubuntu, sans-serif",
        "Fira Sans, sans-serif",
        "Merriweather, serif",
        "Nunito, sans-serif",
        "Calibri, sans-serif",
        "Impact, fantasy",
        "Jokerman, fantasy"
    ];

    fonts.forEach((font) => {
        const option = document.createElement("option");
        option.value = font;
        option.textContent = font.split(",")[0];
        fontSelect.appendChild(option);
    });

    // Populate the font size dropdown with available sizes (including larger sizes)
    const fontSizes = [
        "12px", "16px", "20px", "24px", "28px", "32px", "36px",
        "40px", "44px", "48px", "52px", "56px", "60px", "64px",
        "68px", "72px", "76px", "80px", "84px", "88px", "92px", "96px"
    ];
    
    fontSizes.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        fontSizeSelect.appendChild(option);
    });

    // Apply text formatting when a new option is selected
    textFormatSelect.addEventListener("change", function () {
        const selectedFormat = textFormatSelect.value;
        switch (selectedFormat) {
            case "normal":
                displayText.style.fontStyle = "normal";
                displayText.style.fontWeight = "normal";
                displayText.style.textDecoration = "none";
                displayText.style.backgroundColor = "transparent";
                break;
            case "italic":
                displayText.style.fontStyle = "italic";
                displayText.style.fontWeight = "normal";
                displayText.style.textDecoration = "none";
                displayText.style.backgroundColor = "transparent";
                break;
            case "bold":
                displayText.style.fontStyle = "normal";
                displayText.style.fontWeight = "bold";
                displayText.style.textDecoration = "none";
                displayText.style.backgroundColor = "transparent";
                break;
            case "underline":
                displayText.style.fontStyle = "normal";
                displayText.style.fontWeight = "normal";
                displayText.style.textDecoration = "underline";
                displayText.style.backgroundColor = "transparent";
                break;
            case "highlight":
                displayText.style.fontStyle = "normal";
                displayText.style.fontWeight = "normal";
                displayText.style.textDecoration = "none";
                displayText.style.backgroundColor = "yellow";
                break;
            case "strikethrough":
                displayText.style.fontStyle = "normal";
                displayText.style.fontWeight = "normal";
                displayText.style.textDecoration = "line-through";
                displayText.style.backgroundColor = "transparent";
                break;
            case "bold-italic":
                displayText.style.fontStyle = "italic";
                displayText.style.fontWeight = "bold";
                displayText.style.textDecoration = "none";
                displayText.style.backgroundColor = "transparent";
                break;
            default:
                break;
        }
    });

    // Apply selected font to the displayed text
    fontSelect.addEventListener("change", function () {
        const selectedFont = fontSelect.value;
        displayText.style.fontFamily = selectedFont;
    });

    // Apply selected font size to the displayed text
    fontSizeSelect.addEventListener("change", function () {
        const selectedSize = fontSizeSelect.value;
        displayText.style.fontSize = selectedSize;
    });

    // Update the displayed text as the user types
    textInput.addEventListener("input", function () {
        const inputText = textInput.value;
        displayText.textContent = inputText;
    });

    // Copy text to clipboard when the "Copy Text" button is clicked
    copyButton.addEventListener("click", function () {
        const textToCopy = displayText.textContent;
        const tempTextArea = document.createElement("textarea");
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand("copy");
        document.body.removeChild(tempTextArea);
        alert("Text copied to clipboard!");
    });
});
