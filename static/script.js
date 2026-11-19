


const compareBtn = document.getElementById("compareBtn");
 
const originalText = document.getElementById("originalText");
const modifiedText = document.getElementById("modifiedText");
 
const resultSection = document.getElementById("result");
const originalHash = document.getElementById("originalHash");
const modifiedHash = document.getElementById("modifiedHash");
const statusText = document.getElementById("status");
 
 
 
compareBtn.addEventListener("click", async function () {
 
    const original = originalText.value;
    const modified = modifiedText.value;

    clearError();
    resultSection.hidden = true;

   

    if (original.trim() === "" || modified.trim() === "") {

        showError(
            "Please enter both original and modified text."
        );

        return;
    }
 
    try {
 
        const response = await fetch("/compare", {
 
            method: "POST",
 
            headers: {
                "Content-Type": "application/json"
            },
 
            body: JSON.stringify({
                original_text: original,
                modified_text: modified
            })
 
        });
 
        const data = await response.json();


        if (!response.ok) {

            showError(
                data.error || "Something went wrong."
            );

            return;
        }

     

        highlightHashes(
            data.original_hash,
            data.modified_hash
        );

        

        if (data.match) {

            statusText.textContent =
                "Text is identical. No changes detected.";

            statusText.style.color = "green";
 
        } else {

            statusText.textContent =
                "Text has been modified. Hashes do not match.";

            statusText.style.color = "red";
 
        }
 
        resultSection.hidden = false;
 
    } catch (error) {

        showError(
            "Unable to compare text. Please check if the server is running."
        );

        console.error(error);
    }
 
});




function updateTextCounter(textareaId, wordCountId, charCountId) {

    const textarea = document.getElementById(textareaId);
    const wordCount = document.getElementById(wordCountId);
    const charCount = document.getElementById(charCountId);
 
    if (!textarea || !wordCount || !charCount) {
        return;
    }
 
    function updateCounts() {

        const text = textarea.value;
 
        const words = text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;
 
        wordCount.textContent = words;
        charCount.textContent = text.length;
    }
 
    textarea.addEventListener("input", updateCounts);
 
    updateCounts();
}




updateTextCounter(
    "originalText",
    "originalWordCount",
    "originalCharCount"
);




updateTextCounter(
    "modifiedText",
    "modifiedWordCount",
    "modifiedCharCount"
);




const testInputBtn = document.getElementById("testInputBtn");
const testInputValue = document.getElementById("testInputValue");
const testInputType = document.getElementById("testInputType");
const validationResult = document.getElementById("validationResult");




function showValidationResult(message, color) {

    validationResult.textContent = message;
    validationResult.style.color = color;
}




testInputBtn.addEventListener("click", async function () {

    const enteredValue = testInputValue.value;
    const selectedType = testInputType.value;

    let convertedValue;

    

    if (selectedType === "text") {

        convertedValue = enteredValue;

    }

    

    else if (selectedType === "number") {

        if (
            enteredValue.trim() === "" ||
            !Number.isFinite(Number(enteredValue))
        ) {

            showValidationResult(
                "Please enter a valid number.",
                "red"
            );

            return;
        }

        convertedValue = Number(enteredValue);

    }

   

    else if (selectedType === "boolean") {

        const value = enteredValue.trim().toLowerCase();

        if (value !== "true" && value !== "false") {

            showValidationResult(
                "Please enter true or false.",
                "red"
            );

            return;
        }

        convertedValue = value === "true";

    }

    

    else if (selectedType === "array") {

        try {

            convertedValue = JSON.parse(enteredValue);

            if (!Array.isArray(convertedValue)) {

                showValidationResult(
                    "Please enter a valid JSON array, such as [1,2].",
                    "red"
                );

                return;
            }

        } catch (error) {

            showValidationResult(
                "Invalid array format. Example: [1,2].",
                "red"
            );

            return;
        }

    }

    
    else if (selectedType === "null") {

        if (enteredValue.trim().toLowerCase() !== "null") {

            showValidationResult(
                "Please enter null.",
                "red"
            );

            return;
        }

        convertedValue = null;

    }

    showValidationResult(
        "Testing input...",
        "black"
    );

    

    try {

        const response = await fetch("/compare", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                original_text: convertedValue,
                modified_text: "Hello"
            })

        });

        const data = await response.json();

        

        if (selectedType !== "text") {

            if (response.status === 400) {

                showValidationResult(
                    "PASS: Invalid input rejected. " +
                    (data.error || "HTTP 400"),
                    "green"
                );

            } else {

                showValidationResult(
                    "FAIL: Invalid input was not rejected. HTTP " +
                    response.status,
                    "red"
                );

            }

            return;
        }

        

        if (enteredValue.trim() === "") {

            if (response.status === 400) {

                showValidationResult(
                    "PASS: Empty text rejected by backend.",
                    "green"
                );

            } else {

                showValidationResult(
                    "FAIL: Backend accepted empty text.",
                    "red"
                );

            }

            return;
        }

        

        if (response.ok) {

            showValidationResult(
                "PASS: Valid text accepted. HTTP 200.",
                "green"
            );

        } else {

            showValidationResult(
                "FAIL: Valid text was rejected. " +
                (data.error || "HTTP " + response.status),
                "red"
            );

        }

    } catch (error) {

        showValidationResult(
            "ERROR: Unable to connect to Flask.",
            "red"
        );

        console.error(error);
    }

});
