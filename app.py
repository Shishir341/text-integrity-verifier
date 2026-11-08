from flask import Flask, render_template, request, jsonify
from hashing import compare_texts


app = Flask(__name__)

@app.route("/")
def home():

    return render_template("index.html")

@app.route("/compare", methods=["POST"])
def compare():

    data = request.get_json(silent=True)

    if not isinstance(data, dict):
        return jsonify({"error": "Invalid request"}), 400

    original_text = data.get("original_text")
    modified_text = data.get("modified_text")

    if not isinstance(original_text, str) or not isinstance(modified_text, str):
        return jsonify({"error": "Please enter valid text"}), 400

    result = compare_texts(original_text, modified_text)

    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
    