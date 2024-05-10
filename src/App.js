import React from 'react';
import './App.css';
import myPhoto from './images/myphoto.jpg';
import { FaMapMarkerAlt, FaBirthdayCake, FaGraduationCap } from 'react-icons/fa'; // Импорт иконок

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function App() {
  const age = calculateAge('2001-06-19'); // Посчитаем возраст

  return (
    <div className="App">
      <header className="App-header">
        <img src={myPhoto} className="App-photo" alt="My Photo" />
        <h1>Привет, меня зовут Илья Добрынин</h1>
        <p>Backend Go разработчик из Казани, Россия</p>
        <p>
          <FaMapMarkerAlt className="icon" /> Казань, Россия
        </p>
        <p>
          <FaBirthdayCake className="icon" /> Возраст: {age} лет
        </p>
        <div className="bio">
          <h1>Образование</h1>
          <p>
          <ul>
            <li>
              <FaGraduationCap className="icon" /> КНИТУ-КАИ Колледж Информационных Технологий, Техник-Программист (выпуск 2021)
            </li>
            <li>
              <FaGraduationCap className="icon" /> КНИТУ-КАИ Институт Компьютерных Технологий и Защиты информации, Кафедра САПР и ИИ, Программист (окончание обучения в 2025 году)
            </li>
          </ul>
          </p>
        </div>
        <div className="links">
          <h2>Контакты</h2>
          <ul>
            <li><a href="https://t.me/dobryninilya" target="_blank" rel="noopener noreferrer">Telegram</a></li>
            <li><a href="https://github.com/DobryninIlya" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://vk.com/ilya_dobrynin" target="_blank" rel="noopener noreferrer">VK</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
