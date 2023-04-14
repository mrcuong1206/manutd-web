import React from 'react';

const Details = (props) => {
  return (
    <div className="bg-zinc-600 h-screen flex justify-around -mt-17">
      <div className=" flex flex-col justify-around ">
        <div>
          <span>1</span>
          <div>David De Gea</div>
        </div>
        <div className="w-40 text-3xl">
          I don’t know who is the best goalkeeper in the world at the moment,
          but I want to be the best.
        </div>
      </div>
      <div className="flex items-center">
        <img
          src="https://goalkeepersanonymous.com/wp-content/uploads/2021/02/IMG_7863.png"
          alt="gea"
          className="w-90"
        />
      </div>
      <div className="flex items-center">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
