from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import os

app = Flask(__name__)  # Correct initialization
CORS(app)  # Allow requests from React frontend

# MongoDB Connection
client = MongoClient('mongodb+srv://divInfo:Qwerty123@clusterportfolio.umfnx.mongodb.net/Divyansh')  # Replace with your MongoDB URI
db = client['Divyansh']  # Your MongoDB database name
# mongo = PyMongo(app)

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Portfolio API!"})

# Experience Route to Fetch Data from MongoDB
@app.route('/experience', methods=['GET'])
def get_experience():
    experience = db.experience.find()
      # Fetching all documents from the "experience" collection
    experience_list = []
    for exp in experience:
        exp['_id'] = str(exp['_id'])  # Convert ObjectId to string
        experience_list.append(exp)
    return jsonify(experience_list)

@app.route('/about', methods=['GET'])
def get_about():
    about_data = db.about.find_one()  # Fetch the single document from the "about" collection
    if about_data:
        about_data['_id'] = str(about_data['_id'])  # Convert ObjectId to string
        return jsonify(about_data)
    return jsonify({})  # Return an empty JSON if no data found

@app.route('/education', methods=['GET'])
def get_education():
    education_data = list(db.education.find())  # Fetch all documents from the "education" collection
    for data in education_data:
        data['_id'] = str(data['_id'])  # Convert ObjectId to string

        # Check if CGPA exists and convert it to float
        if 'cgpa' in data:
            data['cgpa'] = data['cgpa'] if isinstance(data['cgpa'], float) else float(data['cgpa']['$numberDouble'])

        # Handle duration formatting
        if 'duration' in data and isinstance(data['duration'], dict):
            data['duration'] = f"{data['duration'].get('start', '')} – {data['duration'].get('end', '')}"
        else:
            data['duration'] = None

        # Assign degree based on your schema
        data['degree'] = data.get('qualification', data.get('degree', ''))

    return jsonify(education_data)

@app.route('/projects', methods=['GET'])
def get_projects():
    projects = db.projects.find()  # Fetch all documents from the "projects" collection
    projects_list = []
    for project in projects:
        project['_id'] = str(project['_id'])  # Convert ObjectId to string

        # Convert technologies list to a comma-separated string if needed
        project['technologies'] = ", ".join(project['technologies'])  # Optional
        project['description'] = project.get('description', [])  # Ensure description exists

        projects_list.append(project)  # Append the processed project data to the list

    return jsonify(projects_list)

@app.route('/skills', methods=['GET'])
def get_skills():
    skills_data = db.skills.find_one()  # Fetch the single document from the "skills" collection
    if skills_data:
        skills_data['_id'] = str(skills_data['_id'])  # Convert ObjectId to string
        return jsonify(skills_data['skills'])  # Return only the skills data as JSON
    return jsonify({})  # Return an empty JSON if no data found

@app.route('/achievements', methods=['GET'])
def get_achievements():
    achievements_data = db.achievements.find_one()  # Fetch the single document from the "achievements" collection
    if achievements_data:
        achievements_data['_id'] = str(achievements_data['_id'])  # Convert ObjectId to string
        return jsonify(achievements_data)  # Return achievements data
    return jsonify({})  # Return an empty JSON if no data found

@app.route('/extracurricular', methods=['GET'])
def get_extracurricular():
    extracurricular_data = db.extracurricular.find_one()  # Fetch the single document from the "extracurricular_activities" collection
    if extracurricular_data:
        extracurricular_data['_id'] = str(extracurricular_data['_id'])  # Convert ObjectId to string
        return jsonify(extracurricular_data)  # Return extracurricular activities data
    return jsonify({})  # Return an empty JSON if no data found
 # Return an empty JSON if no data found


if __name__ == '__main__':  # Correct conditional
    app.run(debug=True)
