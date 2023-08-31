from flask import Flask, jsonify, request
from db import db
import service
from repository import ProfileRepository
from model import Profile
from flask_cors import CORS



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12848499@localhost:3000/Master'
db.init_app(app)
CORS(app)

# Create an instance of ProfileRepository
profile_repository = ProfileRepository()

# Create a Flask app instance
hello_service = service.HelloService(profile_repository)


@app.route('/profiles', methods=['GET'])
def get_all_profiles():
    profiles = hello_service.get_all_profiles()
    profile_list = [{'id': profile.user_id,
                     'first_name': profile.first_name,
                     'last_name': profile.last_name,
                     'email_address': profile.email_address,
                     'phone_number': profile.phone_number,
                    'specialities': profile.specialities.split(",")
                     } for profile in profiles]
    return jsonify(profile_list)
    

@app.route('/add_user',methods=['POST'] )
def add_user():
    data = request.json
    #loop through specialities array and convert to string with comma without comma
    specialities = ""
    for i in data['specialities']:
        specialities = specialities + i + ","
    # delete the last comma
    specialities = specialities[:-1]  
    hello_service.create_profile(data['first_name'],data['last_name'],data['email_address'],data['phone_number'],specialities)
    return data

## delete profile
@app.route('/delete_user/<id>',methods=['DELETE'] )
def delete_user(id):
    hello_service.delete_profile(id)
    return id

if __name__ == '__main__':
    app.run()
