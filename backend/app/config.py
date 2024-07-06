import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'postgresql://hh_user:hh_password@db/hh_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
#конфиг для подлкючения к БД