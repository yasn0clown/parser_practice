#создание приложения, подключение корса (связь фронта и бэка) и создание БД
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config.from_object('app.config.Config')
    db.init_app(app)
    
    with app.app_context():
        from .routes import register_routes
        register_routes(app)
        db.create_all()
    
    return app
