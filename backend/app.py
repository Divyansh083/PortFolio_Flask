from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')  # Correct initialization
CORS(app)  # Allow requests from React frontend

# MongoDB Connection
client = MongoClient('mongodb+srv://divInfo:Qwerty123@clusterportfolio.umfnx.mongodb.net/Divyansh')  # Replace with your MongoDB URI
db = client['Divyansh']  # Your MongoDB database name


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/experience', methods=['GET'])
def get_experience():
    try:
        experience = db.experience.find()
        experience_list = []
        for exp in experience:
            exp['_id'] = str(exp['_id'])  # Convert ObjectId to string
            experience_list.append(exp)
        return jsonify(experience_list)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/about', methods=['GET'])
def get_about():
    try:
        about_data = db.about.find_one()
        if about_data:
            about_data['_id'] = str(about_data['_id'])  # Convert ObjectId to string
            return jsonify(about_data)
        return jsonify({})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/education', methods=['GET'])
def get_education():
    try:
        education_data = list(db.education.find())
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
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/projects', methods=['GET'])
def get_projects():
    try:
        projects = db.projects.find()
        projects_list = []
        for project in projects:
            project['_id'] = str(project['_id'])  # Convert ObjectId to string
            project['technologies'] = ", ".join(project['technologies'])  # Optional
            project['description'] = project.get('description', [])  # Ensure description exists
            projects_list.append(project)

        return jsonify(projects_list)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/skills', methods=['GET'])
def get_skills():
    try:
        skills_data = db.skills.find_one()
        if skills_data:
            skills_data['_id'] = str(skills_data['_id'])  # Convert ObjectId to string
            return jsonify(skills_data['skills'])
        return jsonify({})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/achievements', methods=['GET'])
def get_achievements():
    try:
        achievements_data = db.achievements.find_one()
        if achievements_data:
            achievements_data['_id'] = str(achievements_data['_id'])  # Convert ObjectId to string
            return jsonify(achievements_data)
        return jsonify({})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/extracurricular', methods=['GET'])
def get_extracurricular():
    try:
        extracurricular_data = db.extracurricular.find_one()
        if extracurricular_data:
            extracurricular_data['_id'] = str(extracurricular_data['_id'])  # Convert ObjectId to string
            return jsonify(extracurricular_data)
        return jsonify({})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
