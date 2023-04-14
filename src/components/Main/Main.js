import React from 'react';
import Card from './Card';

const Main = (props) => {
  const { items } = props;
  return (
    <div className="py-6 px-[15%] grid gap-7 grid-cols-4">
      {items.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Main;
