
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

    if (original.trim() === "" || modified.trim() === "") {

        alert("Please enter both original and modified text.");
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

            alert(data.error || "Something went wrong.");
            return;

        }

        function highlightHashes(hash1, hash2) {

            let originalResult = "";
            let modifiedResult = "";

            for (let i = 0; i< hash1.length; i++) {

                if (hash1[i] !== hash2[i]) {

                    originalResult += '<span class="different">${hash1[i]}</span>';
                    modifiedResult += '<span class="different">${hash2[i]}</span>';

                } else {

                    originalResult += hash1[i];
                    modifiedResult += hash2[i];

                }
            }

            originalHash.innerHTML = originalResult;
            modifiedHash.innerHTML = modifiedResult;
        }

        highlightHashes(data.original_hash, data.modified_hash);

        if (data.match) {

            statusText.textContent = "Text is identical. No changes detected.";
            statusText.style.color = "green";

        } else {

            statusText.textContent = "Text has been modified. Hashes do not match.";
            statusText.style.color = "red";

        }

        resultSection.hidden = false;

    } catch (error) {

        alert("Unable to compare text. Please check if the server is running.");
        console.error(error);

    }

});
