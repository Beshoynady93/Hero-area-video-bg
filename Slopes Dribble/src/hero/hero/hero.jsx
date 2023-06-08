import Header from '../header/header';
import Content from '../content/content';
// import SkiBg from '../../images/alex-lange-KXZPJRkBZPQ-unsplash.jpg';
import SkiBg from '../../images/ski-bg.mp4';
import Menu from '../menu/menu';
import Socials from '../socials/socials';

import { content } from '../contentObject';

import './hero.scss';

const Hero = () => {
  const { headerNavigation } = content;
  const { mainHeading, description, button } = content;
  const { menu } = content;

  return (
    <div className="hero-container">
      <video muted loop autoPlay className="bg-image" src={SkiBg}></video>
      {/* <img className="bg-image" src={SkiBg} alt="" /> */}
      <Header headerNavigation={headerNavigation} />
      <Content
        heading={mainHeading}
        description={description}
        button={button}
      />
      <Menu menu={menu} />
      <Socials />
    </div>
  );
};

export default Hero;
