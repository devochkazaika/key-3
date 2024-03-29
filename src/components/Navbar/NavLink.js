import React from 'react';

const NavLink = (to, name) =>{

    return (
        <a class="nav-link active" aria-current="page" href={to}>{name}</a>
    );
};
export {NavLink};