# text-integrity-verifier
Text Integrity Verification Application using SHA-256 and Flask

### Project Overview
This project is a web-based application developed to check whether text content has been changed using SHA-256 cryptographic hashing. Users can enter original text and modified text. The application generates a SHA-256 hash for each input and compares the results. If both hashes match, the application shows that the text is identical. If the hashes are different, it indicates that the text has been modified. The application also highlights differences between the hash values to demonstrate the avalanche effect.

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
Pooja Bist - Frontend Development and Product Owner

## Project Purpose
This application was developed as part of the Integrated Studio III project implementation assessment. It demonstrates how cryptographic hashing can be used to check text integrity and understand the avalanche effect.

