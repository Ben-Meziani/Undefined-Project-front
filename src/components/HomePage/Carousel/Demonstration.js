import React from 'react';
import './style.scss';

const src = 'https://pbs.twimg.com/profile_images/1028408684559458304/uE0XdKkL.jpg';

const Demonstration = () => (
  <div className="demo">
    <h1 className="demo-title">How to use Undefind Role-Play ?</h1>
    <div className="demo-box">
      <div className="demo-left">
        <div className="demo-box1">
          <img className="demo-img" src={src} alt="" />
          <p className="demo-text1"> Quand tu fais le calcul, là on voit qu'on a beaucoup à travailler sur nous-mêmes car là, j'ai un chien en ce moment à côté de moi et je le caresse, et je ne cherche pas ici à mettre un point ! Pour te dire comme on a beaucoup à apprendre sur la vie ! </p>
        </div>
        <div className="demo-box2">
          <img src={src} alt="" />
          <p className="demo-text2">Tu comprends, j'ai vraiment une grande mission car il y a de bonnes règles, de bonnes rules et cela même si les gens ne le savent pas ! Et j'ai toujours grandi parmi les chiens.</p>
        </div>
      </div>
      <div className="demo-right">
        <div className="demo-box3">
          <img src={src} alt="" />
          <p className="demo-text3">Je ne voudrais pas rentrer dans des choses trop dimensionnelles, mais, je suis mon meilleur modèle car il faut toute la splendeur du aware puisque the final conclusion of the spirit is perfection Il y a un an, je t'aurais parlé de mes muscles.</p>
        </div>
        <div className="demo-box4">
          <img src={src} alt="" />
          <p className="demo-text4">
            You see, tu vois au passage qu'il n'y a rien de concret car c'est juste une question d'awareness et cela même si les gens ne le savent pas ! Donc on n'est jamais seul spirituellement !</p>
        </div>
      </div>
    </div>
  </div>
);

export default Demonstration;
