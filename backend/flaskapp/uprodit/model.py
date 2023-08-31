from db import db
class Profile(db.Model):
    __tablename__ = 'customers'
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    email_address = db.Column(db.String(255), nullable=True)
    phone_number = db.Column(db.Integer, nullable=False)
    specialities = db.Column(db.String(255), nullable=True)

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
