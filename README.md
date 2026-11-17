# text-integrity-verifier
Text Integrity Verification Application using SHA-256 and Flask

### Project Overview
This project is a web-based application designed to identify whether text has been changed or remains the same using the SHA-256 hashing algorithm. Users can enter two pieces of text: the original text and the modified text. The system creates a SHA-256 hash value for each text and compares them. If both hash values are the same, it means the text is identical and no changes have been made. If the hash values are different, it means the text has been modified. The application also highlights the differences between the hash values to show the avalanche effect, which explains how even a small change in text can produce a completely different hash value.

## Technologies Used
-Python
-Flask
-HTML
-CSS
-JavaScript
-SHA-256
-Git and GitHub

## Main Features
- Enter original and modified text
-Generate SHA-256 hashes
-Compare two hash values
-Display text integrity status
-Highlight differences between hashes
-Explain SHA-256 and the avalanche effect
-Validate text input

## Installation Instructions
1. git clone https://github.com/shishir341/text-integrity-verifier.git

2.open the project folder:
  cd text-integrity-verifier

3. Create a Python virtual environment:
   py -m venv .venv

4. Activate the environment in PowerShell:
  .\.venv\Scripts\Activate.ps1

5. Python -m pip install -r requirements.txt

6. Run the application:
   python app.py

## How to use
1. Enter text in the origina; Text box.
2. Enter text in the modified Text box.
3. Click the compare Text button.
4. View the generated SHA-256 hashes.
5. Check whether the text is identical or modified.
6. Observe the highlighted hash differences.

## Project Team
Shishir Kandel - Backend Development and Scrum Master
Pooja Bist - Frontend Development, product owner and backend development

## Project Purpose
This application was developed as part of the Integrated Studio III project implementation assessment. It demonstrates how cryptographic hashing can be used to check text integrity and understand the avalanche effect.

