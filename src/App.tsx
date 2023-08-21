import React from 'react';
import './App.scss';
import Button from './Components/Button/Button';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <div className="container">
        <div className="section">
          <div>
            <img
              src="./vlada.jpg"
              alt="Vladyslava Titarenko Avatar"
              className="avatar"
            />
          </div>
          <div className="description">
            <h1 className="description__name">Vladyslava T.</h1>
            <h2 className="description__bio">читаю книги, стимулюю розбрат і проституцію / голівка тві</h2>
          </div>
        </div>
        <div>
          <Button
            title="Twitter (X)"
            linkApp="https://twitter.com/omg_vlt"
            image="./iconTW.png"
          />
        </div>

        <div>
          <Button
            title="OnlyFans (Ви цього дочекались!)"
            linkApp="https://send.monobank.ua/jar/61gEWCDfJz"
            image="./onlyBG.png"
          />
        </div>

        <div>
          <Button
            title="На машину ЗСУ"
            linkApp="https://send.monobank.ua/jar/61gEWCDfJz"
            image="./money.png"
          />
        </div>
      </div>
    </div>
  );
};
