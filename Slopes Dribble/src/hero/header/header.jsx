import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from '../icons/hamburger-icon';

import './header.scss';

const Header = ({ headerNavigation }) => {
  const navList = useRef();
  const hamIcon = useRef();

  const toggleMenu = () => {
    const menu = document.querySelector('.menu-container');
    const hero = document.querySelector('.hero-container');
    const content = document.querySelector('.content-container');
    const socials = document.querySelector('.socials-container');

    menu.classList.toggle('open');
    hero.classList.toggle('menu-open');
    content.classList.toggle('hidden');
    socials.classList.toggle('blue');
    navList.current.classList.toggle('open-menu');
    hamIcon.current.classList.toggle('open-menu');
  };

  return (
    <header className="header-container">
      <div
        className="hamburger-icon-container"
        onClick={toggleMenu}
        ref={hamIcon}
      >
        <HamburgerIcon />
      </div>
      <nav className="header-nav">
        <ul className="header-nav__list" ref={navList}>
          {headerNavigation.map((navItem) => {
            return (
              <li className="header-nav__list-item" key={navItem.name}>
                <NavLink to={navItem.url}>{navItem.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
