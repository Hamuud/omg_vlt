import React from 'react';
import './MainButton.scss';

type Props = {
  image: string;
  title: string;
  link: string
};

const MainButton: React.FC<Props> = ({ image, title, link }) => {
  return (
    <div>
      <a
        href={link}
        className="button"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image}
          alt="Alt description"
        />
        {title}
      </a>
    </div>
  );
};

export default MainButton;
