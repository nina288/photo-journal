import React from 'react';
import BannerImage from './components/BannerImage';
import AlbumMaker from './components/AlbumMaker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BannerImage />
        <div>
        <h1> Давайте влюбляться</h1>
        <h3>24.05.2022 @Чекалина Н.</h3>
        <h7>
        <quote>  Давайте влюбляться, как в юности – ярко.
          Давайте дарить теплоту и подарки,
          За руки давайте возьмем мы друг - друга
          И выйдем из скуки порочного круга.
          Давайте мы память от пыли встряхнем
          И день, что грядет, мы с улыбки начнем.
          Любимым подарим свиданья - как раньше.
          Забудем о ссорах, забудем о фальши.
          Давайте изменим своё отношенье
          К тому, что вокруг, и изменим решенье.
          Давайте макнем этот мир в чудо - краски
          И душу избавим от серости маски.</quote></h7>
        <AlbumMaker/>
        </div>
      
      </header>
    </div>
  );
}

export default App;
