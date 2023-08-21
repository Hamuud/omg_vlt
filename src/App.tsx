import React from 'react';
import './App.scss';
import MainButton from './Components/MainButton/MainButton';

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
        <div className="button__section">

          <div>
            <MainButton
              image="./iconTW.png"
              title="Twitter (X)"
              link="https://twitter.com/omg_vlt"
            />
          </div>

          <div>
            <MainButton
              image="./onlyBG.png"
              title="OnlyFans(Ви цього дочекались!)"
              link="https://send.monobank.ua/jar/61gEWCDfJz"
            />
          </div>

          <div>
            <MainButton
              image="./money.png"
              title="На машину ЗСУ"
              link="https://send.monobank.ua/jar/61gEWCDfJz"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
