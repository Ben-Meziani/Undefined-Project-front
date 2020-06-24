import React from 'react';
import './style.scss';

const MessageField = () => (
  <div>
    <form>
      <input type="text" placeholder="Veuillez saisir un message..." />
      <button type="submit">&gt;</button>
    </form>
  </div>
);

export default MessageField;
