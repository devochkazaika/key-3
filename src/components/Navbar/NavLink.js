import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLink = ({ to, name }) => {
    const Style = styled.a`
        color: white; /* Пример цвета текста для ссылок */
        display: flex;
    `
    return (
        <li className="nav-item">
            <a className="nav-link text-white Style" href={to}>{name}</a>
        </li>
    );
  };

export {NavLink};