import SearchButton from '../search-button/search-button';
import './menu.scss';

const Menu = ({ menu }) => {
  return (
    <div className="menu-container">
      <div className="menu-items-container">
        {menu.map((menuItem) => (
          <div className="menu-item" key={menuItem.title}>
            <h3 className="menu-item__heading">{menuItem.title}</h3>
            <ul className="menu-item__list">
              {menuItem.links.map((link) => (
                <li className="menu-item__list-item" key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SearchButton />
    </div>
  );
};

export default Menu;
