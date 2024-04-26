from classes import db
from tianguis-fc.src.models.Modelo_Vendedor import obtener_vendedor
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
