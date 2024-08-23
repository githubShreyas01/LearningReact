import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Lottery from './lottery';
import Ticket from './Ticket';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
