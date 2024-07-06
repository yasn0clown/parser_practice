from flask import request, jsonify
from app.models import Vacancy
from app import db
from app.parser import get_vacancies, save_vacancies_to_db

def register_routes(app):

#-----тестовый рут-----
    @app.route("/")
    def hello_world():
        return "<p>Hello, World!</p>"
#----------------------

#пост запрос, получаем данные о вакансиях и сохраняем их в БД
    @app.route('/parse_vacancies', methods=['POST'])
    def parse_vacancies():
        data = request.json
        search_text = data.get('search_text', '')
        region = data.get('region', '')
        min_salary = data.get('min_salary', 0)

        vacancies_data = get_vacancies(search_text, region)
        if vacancies_data:
            save_vacancies_to_db(vacancies_data, min_salary)
            vacancies = Vacancy.query.all()
            return jsonify([vac.to_dict() for vac in vacancies])
        return jsonify({"status": "error"}), 500