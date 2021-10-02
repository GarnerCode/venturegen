import React from 'react';
import Generate from './Generate';

const Dropdown = ({playerRace, setPlayerRace, playerClass, setPlayerClass, playerLevel, setPlayerLevel}) => {
    const races = [
    "Dragonborn",
    "Dwarf",
    "Elf",
    "Gnome",
    "Half-Elf",
    "Halfling",
    "Half-Orc",
    "Human",
    "Tiefling"
  ];
  const classes = [
      "Barbarian",
      "Bard",
      "Cleric",
      "Druid",
      "Fighter",
      "Monk",
      "Paladin",
      "Ranger",
      "Rogue",
      "Sorcerer",
      "Warlock",
      "Wizard"
  ];

    const handleRaceChange = (event) => {
        for (var i = 0; i <= races.length; i++) {
            if (event.target.value === races[i]) {
                setPlayerRace(races[i]);
                break;
            }
        }
    }
    const handleClassChange = (event) => {
        for (var i = 0; i <= classes.length; i++) {
            if (event.target.value === classes[i]) {
                setPlayerClass(classes[i]);
                break;
            }
        }
    }
    const handleLevelChange = (event) => {
        setPlayerLevel(event.target.value);
        }
    return (
        <div id="compDropdown">
            <select name="race" id="dd-race" onChange={(e) => handleRaceChange(e)}>
                <option value={races[0]}>Dragonborn</option>
                <option value={races[1]}>Dwarf</option>
                <option value={races[2]}>Elf</option>
                <option value={races[3]}>Gnome</option>
                <option value={races[4]}>Half-Elf</option>
                <option value={races[5]}>Halfling</option>
                <option value={races[6]}>Half-Orc</option>
                <option value={races[7]}>Human</option>
                <option value={races[8]}>Tiefling</option>
            </select>
            <select name="class" id="dd-class" onChange={(e) => handleClassChange(e)}>
                <option value={classes[0]}>Barbarian</option>
                <option value={classes[1]}>Bard</option>
                <option value={classes[2]}>Cleric</option>
                <option value={classes[3]}>Druid</option>
                <option value={classes[4]}>Fighter</option>
                <option value={classes[5]}>Monk</option>
                <option value={classes[6]}>Paladin</option>
                <option value={classes[7]}>Ranger</option>
                <option value={classes[8]}>Rogue</option>
                <option value={classes[9]}>Sorcerer</option>
                <option value={classes[10]}>Warlock</option>
                <option value={classes[11]}>Wizard</option>
            </select>
            <select name="level" id="dd-level" onChange={(e) => handleLevelChange(e)}>
                <option value={1}>Level 1</option>
                <option value={2}>Level 2</option>
                <option value={3}>Level 3</option>
                <option value={4}>Level 4</option>
                <option value={5}>Level 5</option>
                <option value={6}>Level 6</option>
                <option value={7}>Level 7</option>
                <option value={8}>Level 8</option>
                <option value={9}>Level 9</option>
                <option value={10}>Level 10</option>
                <option value={11}>Level 11</option>
                <option value={12}>Level 12</option>
                <option value={13}>Level 13</option>
                <option value={14}>Level 14</option>
                <option value={15}>Level 15</option>
                <option value={16}>Level 16</option>
                <option value={17}>Level 17</option>
                <option value={18}>Level 18</option>
                <option value={19}>Level 19</option>
                <option value={20}>Level 20</option>
            </select>
            <Generate 
            playerRace = {playerRace}
            playerClass = {playerClass}
            playerLevel = {playerLevel}
            />
        </div>
    )
}

export default Dropdown;