import React from 'react';
import '../estilos/Item.css';
import { Link } from 'react-router-dom';

function Item({ link, text, esUltimo}) {
  return (
    <li className={`item ${esUltimo ? 'ultimo-item' : ''}`}>
      <Link to={`/${link}`}>{text}</Link>
    </li>
  );
}

export default Item;