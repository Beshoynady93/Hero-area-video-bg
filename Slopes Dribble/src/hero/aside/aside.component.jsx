import PropTypes from 'prop-types';
import Logo from '../icons/logo';

import './aside.styles.scss';

const Aside = ({ logo, copyright }) => {
  const { text } = logo;

  return (
    <aside>
      <div className="logo-container">
        <Logo />
        <span className="copyright">{text}</span>
      </div>
      <div className="copyright">{copyright}</div>
    </aside>
  );
};

Aside.prototype = {
  logo: PropTypes.object.isRequired,
  copyright: PropTypes.string.isRequired,
};

export default Aside;
