from app import db

#модель таблицы для БД

class Vacancy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    company = db.Column(db.String(255), nullable=False)
    salary = db.Column(db.Float, nullable=True)
    region = db.Column(db.String(255), nullable=False)
    url = db.Column(db.String(255), unique=True, nullable=False)
    requirement = db.Column(db.Text, nullable=True)

#перевод в словарь для удобного использования в API
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'company': self.company,
            'salary': self.salary,
            'region': self.region,
            'url': self.url,
            'requirement': self.requirement
        }
    
#просто отладка

    def __repr__(self):
        return f'<Vacancy {self.name}>'
