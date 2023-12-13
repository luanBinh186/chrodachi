import { useEffect, useState } from 'react';
import './App.css';
import Monster from './monster/Monster';
import Progress from './progress/Progress';
import MonsterModel from '../models/MonsterModel';
import { GetMonster } from '../utils/Storage';

function App() {
  const [monster, setMonster] = useState(new MonsterModel())

  const getMonster = async () => {
    setMonster(await GetMonster());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getMonster();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <Progress monster={monster}></Progress>
      <Monster monster={monster}></Monster>
    </div>
  );
}

export default App;