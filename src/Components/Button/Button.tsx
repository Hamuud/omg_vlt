/* eslint-disable */
import React from 'react';
import './Button.scss';

type Props = {
  title: string;
  linkApp: string;
  image: string;
};

const Button: React.FC<Props> = ({ title, linkApp, image }) => {
  return (
    <div className="section__btn">
      <div className="container__btn">
        <a
          href={linkApp}
          className="link"
          target="_blank"
        >
          <div className="icon__container">
            <img
              src={image}
              alt="icon for web-sites"
              className="icon__web"
            />
          </div>
          {title}
        </a>
      </div>
    </div>
  );
};

export default Button;
