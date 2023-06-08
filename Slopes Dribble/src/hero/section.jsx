import { content } from './contentObject';
import Aside from './aside/aside.component';
import Hero from './hero/hero';

import './section.scss';

const Section = () => {
  // logo text and copyright text for Aside component
  const { logo, copyrightText } = content;
  return (
    <div className="section-container">
      <Aside logo={logo} copyright={copyrightText} />
      <Hero />
    </div>
  );
};

export default Section;
