import React, {useState} from 'react';


const NavMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const listItems = children.map((number) =>  <li>{number}</li>);
    return (
        
      <nav className="navbar navbar-expand-lg bg-black">
        <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleNavbar} // Вызываем функцию toggleNavbar при нажатии на кнопку
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
            <ul class="navbar-nav">
            {listItems}
            </ul>
        </div>
      </nav>
    );
  };

export {NavMenu};