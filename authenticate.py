from classes import db
from models import User
from sqlalchemy.orm.exc import NoResultFound
import bcrypt

def authenticate_user(username, password):
    try:
        user = obtener_vendedor(username)
        if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
            return True
        else:
            return False
    except NoResultFound:
        return False
