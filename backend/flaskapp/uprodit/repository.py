from model import Profile
from db import db

class ProfileRepository:
    def create_profile(self, first_name, last_name, email_address, phone_number, specialities):
        profile = Profile(first_name=first_name, last_name=last_name, email_address=email_address, phone_number=phone_number, specialities=specialities)
        db.session.add(profile)
        db.session.commit()
        return profile

    def get_all_profiles(self):
        return Profile.query.all()

    def update_profile_specialities(self, profile_id, new_specialities):
        profile = Profile.query.get(profile_id)
        if profile:
            profile.specialities = new_specialities
            db.session.commit()
            return profile
        return None

    def delete_profile(self, profile_id):
        profile = Profile.query.get(profile_id)
        if profile:
            db.session.delete(profile)
            db.session.commit()
            return True
        return False
