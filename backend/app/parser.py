#собственно сам парсер
import requests
from app.models import Vacancy
from app import db

#гет-запрос на API hh.ru чтобы получить вакансии

def get_vacancies(search_text, region, per_page=100):
    url = 'https://api.hh.ru/vacancies'
    params = {
        'text': search_text,
        'area': region,
        'per_page': per_page
    }
    
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code}")
        return None

#сохранение вакансий в БД

def save_vacancies_to_db(vacancies, min_salary=0):
    try:
        min_salary = float(min_salary)  # преобразование min_salary в число
    except ValueError:
        print("Ошибка: min_salary не является числом")
        return

    Vacancy.query.delete()

    for vacancy in vacancies['items']:
        name = vacancy['name']
        company = vacancy['employer']['name']
        salary = vacancy['salary']
        url = vacancy['alternate_url']
        region = vacancy['area']['name']
        requirement = vacancy['snippet']['requirement']


        if salary is not None:
            # если salary['from'] и salary['to'] могут быть None, то обработаем это
            salary_from = salary['from'] if salary['from'] is not None else 0
            salary_to = salary['to'] if salary['to'] is not None else 0
            salary = max(salary_from, salary_to)
        else:
            salary = 0
#если подходит - заносим в БД
        if salary >= min_salary:
            new_vacancy = Vacancy(name=name, company=company, salary=salary, region=region, url=url, requirement=requirement)
            db.session.add(new_vacancy)
    db.session.commit()
