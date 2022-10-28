import React from 'react';
import './style.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Управление рассылками</h1>
      <p className="header__text">Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться.<br/>
        Но пожалуйста, исключите только те категории, которые действительно вас не интересуют.<br/>
        Мы обещаем слать только полезные письма где 😊
      </p>
    </header>
  );
};