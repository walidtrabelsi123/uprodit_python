class HelloService:
    def __init__(self, profile_repository):
        self.profile_repository = profile_repository
    def get_hello_message(self):
        return "Hello from the service!"

    def get_all_profiles(self):
        return self.profile_repository.get_all_profiles()

    def create_profile(self, first_name, last_name, email_address, phone_number, specialities):
        return self.profile_repository.create_profile(first_name, last_name, email_address, phone_number, specialities)

    def update_profile_specialities(self, profile_id, new_specialities):
        return self.profile_repository.update_profile_specialities(profile_id, new_specialities)

    def delete_profile(self, profile_id):
        return self.profile_repository.delete_profile(profile_id)


