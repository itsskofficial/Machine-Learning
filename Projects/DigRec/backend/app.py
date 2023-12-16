from flask import Flask, request, jsonify
from flask_cors import CORS
from utils import *
import tensorflow as tf
print(tf.__version__)

app = Flask(__name__)
CORS(app, resource={r"/*" : {"origins" : "*"}})

@app.route("/")
def home():
    return "This is the backend of DigRec made with Flask"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.json
        image = data["image"]
        prediction = recognize(image)
        return jsonify(prediction = prediction), 200
    except Exception as e:
        return jsonify(error = str(e)), 400

if __name__ == "__main__":
    app.run(debug = True)