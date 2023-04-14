import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const data = [
    {
      id: 1,
      image: './assets/manutd/gea.png',
      number: '1',
      firstname: 'David',
      lastname: 'De Gea',
    },
    {
      id: 2,
      image: './assets/manutd/bruno.png',
      number: '8',
      firstname: 'Bruno',
      lastname: 'Fernaldes',
    },
    {
      id: 3,
      image: './assets/manutd/rashford.png',
      number: '10',
      firstname: 'Marcus',
      lastname: 'Rashford',
    },
    {
      id: 4,
      image: './assets/manutd/casemiro.png',
      number: '18',
      firstname: 'Mr',
      lastname: 'Casemiro',
    },
  ];

  const [todo] = React.useState(data);

  return (
    <div>
      <Header />
      <Main items={todo} />
    </div>
  );
}

export default App;
