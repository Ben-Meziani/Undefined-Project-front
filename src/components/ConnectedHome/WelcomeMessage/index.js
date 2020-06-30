import React from 'react';

import './style.scss';

const WelcomeMessage = () => (
  <div className="connected-home-message">
    <div className="connected-home-message-border">
      <div className="dashboard-content">
        <h2 className="connected-home-message-title">Bienvenu(e) sur votre tableau de bord</h2>
        <p className="connected-home-message-content">Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres. Des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée... Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste, parfois on ne trouve pas l’interlocuteur en face je dirais, le miroir qui vous aide à avancer.</p>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;
