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
cred = credentials.Certificate("./server/simple-life-f6b75-firebase-adminsdk-pic98-feb59a2fc7.json")
# "./simpleLifeLandscaping/server/simple-life-f6b75-firebase-adminsdk-pic98-feb59a2fc7.json"
# "./server/simple-life-f6b75-firebase-adminsdk-pic98-feb59a2fc7.json"
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
        images_ref = db.collection('images').order_by("createdAt", direction=firestore.Query.ASCENDING).stream()
        images = [doc.to_dict() for doc in images_ref]
        return make_response(jsonify(images), 200)

    def post(self):
        data = request.get_json()
        image_url = data["image_url"]
        name = data["name"]
        # doc_ref = db.collection("images").add({"image_url" : image_url, "name" : name})
        # image_data = db.collection("images").document(doc_ref.id).get().to_dict()

        doc_ref = db.collection('images').document()
        doc_ref.set({"image_url" : image_url, "name" : name, "createdAt" : firestore.SERVER_TIMESTAMP})

        retrieved_doc = doc_ref.get()
        retrieved_data = retrieved_doc.to_dict()
        retrieved_data['id'] = doc_ref.id

        return make_response(jsonify(retrieved_data), 201)
    
api.add_resource(Image, '/images')

class ImageDelete(Resource):
    def delete(self):
        image_name = request.args.get("name")
        print(image_name)

        if not image_name:
            return jsonify({"error" : "No image name provided"})
        

        images_ref = db.collection('images')
        query = images_ref.where("name", "==", image_name).stream()
        print(query)

        for doc in query:
            doc.reference.delete()
        
        return make_response({"message" : "success"}, 200)

        # try:
        #     images_ref = db.collection("images")

        #     query = images_ref.where("name" == image_name).stream()

        #     found = False

        #     for doc in query:
        #         doc.reference.delete()
        #         found = True

        #     if found:
        #         return make_response({"success" : True, "message" : "successfully "}, 200)
        #     else:
        #         return make_response({"error": "Project not found"}, 404)

        # except Exception as e:
        #     return make_response({"error": str(e)}, 500)
        
        
api.add_resource(ImageDelete, "/delete_project")



if __name__ == '__main__':
    app.run(port=5555, debug=True)
