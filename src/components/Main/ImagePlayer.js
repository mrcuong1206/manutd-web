import React from 'react';
import imgPlayer from '../../assets/manutd/bruno.png';

const ImagePlayer = (props) => {
  return (
    <div>
      <img
        src={imgPlayer}
        alt="img bruno"
        className="cursor-pointer w-60 h-60 "
      />
    </div>
  );
};

export default ImagePlayer;
