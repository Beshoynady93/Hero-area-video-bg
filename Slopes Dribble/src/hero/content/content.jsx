import './content.scss';

const Content = ({ heading, description, button }) => {
  const { text } = button;

  return (
    <div className="content-container">
      <div className="content-body">
        <h1 className="content-title">{heading}</h1>
        <p className="content-description">{description}</p>
      </div>
      <div className="button-container">
        <button className="hero-button">{text}</button>
      </div>
    </div>
  );
};

export default Content;
