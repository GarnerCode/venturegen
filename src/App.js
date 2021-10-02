import React, {useState} from 'react'; 
import './App.css';
import Dropdown from './Components/Dropdown';

function App() {
  const [playerRace, setPlayerRace] = useState("Dragonborn");
  const [playerClass, setPlayerClass] = useState("Barbarian");
  const [playerLevel, setPlayerLevel] = useState(1);

  return (
    <div className="App">
      <Dropdown
        playerRace = {playerRace}
        setPlayerRace = {setPlayerRace}
        playerClass = {playerClass}
        setPlayerClass = {setPlayerClass}
        playerLevel = {playerLevel}
        setPlayerLevel = {setPlayerLevel}
      />
    </div>
  );
}

export default App;
