import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

//начальные значения полей на сайте
function App() {
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState(113);
  const [minSalary, setMinSalary] = useState('');
  const [vacancies, setVacancies] = useState([]);

//пост запрос, получаем данные из БД и выводим (или ошибка)
  const handleParse = async () => {
    try {
      const response = await axios.post('http://localhost:5000/parse_vacancies', {
        search_text: searchText,
        region: region,
        min_salary: minSalary
      });
      console.log(response.data);
      setVacancies(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to parse vacancies');
    }
  };

//сами компоненты сайта (поля ввода и вывода, ну и кнопка)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Парсер вакансий</h1>
      </header>
      <div className="container">
        <form>
          <input
            type="text"
            placeholder="Название вакансии"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="113">Россия</option>
            <option value="1">Москва</option>
            <option value="2">Санкт-Петербург</option>
            <option value="130">Севастополь</option>
            <option value="1217">Алтайский край</option>
            <option value="1932">Амурская область</option>
            <option value="1008">Архангельская область</option>
            <option value="1505">Астраханская область</option>
            <option value="1817">Белгородская область</option>
            <option value="1828">Брянская область</option>
            <option value="1716">Владимирская область</option>
            <option value="1511">Волгоградская область</option>
            <option value="1739">Вологодская область</option>
            <option value="1844">Воронежская область</option>
            <option value="2134">Донецкая Народная Республика</option>
            <option value="1941">Еврейская АО</option>
            <option value="1192">Забайкальский край</option>
            <option value="2155">Запорожская область</option>
            <option value="1754">Ивановская область</option>
            <option value="1124">Иркутская область</option>
            <option value="1463">Кабардино-Балкарская республика</option>
            <option value="1020">Калининградская область</option>
            <option value="1859">Калужская область</option>
            <option value="1943">Камчатский край</option>
            <option value="1471">Карачаево-Черкесская Республика</option>
            <option value="1229">Кемеровская область</option>
            <option value="1661">Кировская область</option>
            <option value="1771">Костромская область</option>
            <option value="1438">Краснодарский край</option>
            <option value="1146">Красноярский край</option>
            <option value="1308">Курганская область</option>
            <option value="1880">Курская область</option>
            <option value="145">Ленинградская область</option>
            <option value="1890">Липецкая область</option>
            <option value="2173">Луганская Народная Республика</option>
            <option value="1946">Магаданская область</option>
            <option value="2019">Московская область</option>
            <option value="1061">Мурманская область</option>
            <option value="1985">Ненецкий АО</option>
            <option value="1679">Нижегородская область</option>
            <option value="1051">Новгородская область</option>
            <option value="1202">Новосибирская область</option>
            <option value="1249">Омская область</option>
            <option value="1563">Оренбургская область</option>
            <option value="1898">Орловская область</option>
            <option value="1575">Пензенская область</option>
            <option value="1317">Пермский край</option>
            <option value="1948">Приморский край</option>
            <option value="1090">Псковская область</option>
            <option value="1422">Республика Адыгея</option>
            <option value="1216">Республика Алтай</option>
            <option value="1347">Республика Башкортостан</option>
            <option value="1118">Республика Бурятия</option>
            <option value="1424">Республика Дагестан</option>
            <option value="1434">Республика Ингушетия</option>
            <option value="1553">Республика Калмыкия</option>
            <option value="1077">Республика Карелия</option>
            <option value="1041">Республика Коми</option>
            <option value="2114">Республика Крым</option>
            <option value="1620">Республика Марий Эл</option>
            <option value="1556">Республика Мордовия</option>
            <option value="1174">Республика Саха (Якутия)</option>
            <option value="1475">Республика Северная Осетия-Алания</option>
            <option value="1624">Республика Татарстан</option>
            <option value="1169">Республика Тыва</option>
            <option value="1187">Республика Хакасия</option>
            <option value="1530">Ростовская область</option>
            <option value="1704">Рязанская область</option>
            <option value="1586">Самарская область</option>
            <option value="1596">Саратовская область</option>
            <option value="1960">Сахалинская область</option>
            <option value="1261">Свердловская область</option>
            <option value="1103">Смоленская область</option>
            <option value="1481">Ставропольский край</option>
            <option value="1905">Тамбовская область</option>
            <option value="1783">Тверская область</option>
            <option value="1255">Томская область</option>
            <option value="1913">Тульская область</option>
            <option value="1342">Тюменская область</option>
            <option value="1646">Удмуртская Республика</option>
            <option value="1614">Ульяновская область</option>
            <option value="1975">Хабаровский край</option>
            <option value="1368">Ханты-Мансийский АО - Югра</option>
            <option value="2209">Херсонская область</option>
            <option value="1384">Челябинская область</option>
            <option value="1500">Чеченская республика</option>
            <option value="1652">Чувашская Республика</option>
            <option value="1982">Чукотский АО</option>
            <option value="1414">Ямало-Ненецкий АО</option>
            <option value="1806">Ярославская область</option>
          </select>
          <input
            type="number"
            placeholder="Минимальная З/П"
            value={minSalary}
            onChange={(e) => setMinSalary(e.target.value)}
          />
          <button type="button" onClick={handleParse}>
            Спарсить новые вакансии
          </button>
        </form>
        <ul className="vacancy-list">
          {vacancies.map((vacancy, index) => (
            <li key={index}>
              <h2>{vacancy.name}</h2>
              <p>{vacancy.company}</p>
              <p>{vacancy.salary}</p>
              <p>{vacancy.region}</p>
              <p>{vacancy.requirement}</p>
              <a href={vacancy.url} target="_blank" rel="noopener noreferrer">
                Посмотреть вакансию
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
