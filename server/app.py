#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

# Local imports

# Instantiate app, set attributes
app = Flask(__name__)

# Instantiate REST API
api = Api(app)

# Instantiate CORS
CORS(app)

# Standard library imports

import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
# Add your model imports

# Initialize Firebase app
cred = credentials.Certificate("../simpleLifeLandscaping/server/simplelifedb-7678d-firebase-adminsdk-s4s61-530f7b6f63.json")

firebase_admin.initialize_app(cred)

# Initialize Firestore client after Firebase app initialization
db = firestore.client()

# Remote library imports
from flask import request, make_response, jsonify, session
from flask_restful import Resource

@app.route('/')
def hello_world():
    return 'Eman was here'

class Image(Resource):
    def get(self):
        images_ref = db.collection('images')
        images = [doc.to_dict() for doc in images_ref.stream()]
        return make_response(jsonify(images), 200)

    def post(self):
        data = request.get_json()
        image_url = data["image_url"]
        # doc_ref = db.collection("images").add({"image_url" : image_url, "name" : name})
        # image_data = db.collection("images").document(doc_ref.id).get().to_dict()

        doc_ref = db.collection('images').document()
        doc_ref.set(data)

        # Retrieve the data from Firestore and return it
        retrieved_doc = doc_ref.get()
        retrieved_data = retrieved_doc.to_dict()

        return make_response(jsonify(retrieved_data), 201)
    
api.add_resource(Image, '/images')

class ImageDelete(Resource):
    def delete(self, document_name):
        db.collection("images").document(document_name).delete()

api.add_resource(ImageDelete, "/image/<string:document_name>")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
