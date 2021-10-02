import React, {useState} from 'react';
import Stats from './Stats';

const Generate = ({playerRace, playerClass, playerLevel}) => {
    const [playerStats, setPlayerStats] = useState([]);
    const [profSkills, setProfSkills] = useState([]);
    const [maxProfSkills, setMaxProfSkills] = useState("");
    const [hitDice, setHitDice] = useState("d12");
    const GenerateStats = () => {
        let rolls = [
        Math.floor(Math.random() * (19-9) + 9),
        Math.floor(Math.random() * (19-9) + 9),
        Math.floor(Math.random() * (19-9) + 9),
        Math.floor(Math.random() * (19-9) + 9),
        Math.floor(Math.random() * (19-9) + 9),
        Math.floor(Math.random() * (19-9) + 9)
        ];
        var stats = [
            //str 0
            //dex 1
            //con 2
            //int 3
            //wis 4
            //cha 5
        ];
        rolls.sort((a, b) => b - a);

        //Allocate dice rolls to stats, determine skill modifiers, and assign skill proficiencies based on selected class
        switch (playerClass) {
            case "Barbarian":
                stats[0] = rolls[0];
                stats[1] = rolls[3];
                stats[2] = rolls[1];
                stats[3] = rolls[5];
                stats[4] = rolls[4];
                stats[5] = rolls[2];
                setProfSkills([
                    "Animal Handling",
                    "Athletics",
                    "Intimidation",
                    "Nature",
                    "Perception",
                    "Survival"
                ]);
                setMaxProfSkills("two");
                break;
            case "Bard":
                stats[0] = rolls[5];
                stats[1] = rolls[1];
                stats[2] = rolls[4];
                stats[3] = rolls[2];
                stats[4] = rolls[3];
                stats[5] = rolls[0];
                setProfSkills([
                    "Any Skill"
                ]);
                setMaxProfSkills("three");
                break;
            case "Cleric":
                stats[0] = rolls[5];
                stats[1] = rolls[3];
                stats[2] = rolls[4];
                stats[3] = rolls[2];
                stats[4] = rolls[0];
                stats[5] = rolls[1];
                setProfSkills([
                    "History",
                    "Insight",
                    "Medicine",
                    "Persuasion",
                    "Religion"
                ]);
                setMaxProfSkills("two");
                break;
            case "Druid":
                stats[0] = rolls[5];
                stats[1] = rolls[2];
                stats[2] = rolls[4];
                stats[3] = rolls[1];
                stats[4] = rolls[0];
                stats[5] = rolls[3];
                setProfSkills([
                    "Arcana",
                    "Animal Handling",
                    "Insight",
                    "Medicine",
                    "Nature",
                    "Perception",
                    "Religion",
                    "Survival"
                ]);
                setMaxProfSkills("two");
                break;
            case "Fighter":
                stats[0] = rolls[0];
                stats[1] = rolls[1];
                stats[2] = rolls[2];
                stats[3] = rolls[5];
                stats[4] = rolls[4];
                stats[5] = rolls[3];
                setProfSkills([
                    "Acrobatics",
                    "Animal Handling",
                    "Athletics",
                    "History",
                    "Insight",
                    "Intimidation",
                    "Perception",
                    "Survival"
                ]);
                setMaxProfSkills("two");
                break;
            case "Monk":
                stats[0] = rolls[2];
                stats[1] = rolls[0];
                stats[2] = rolls[3];
                stats[3] = rolls[4];
                stats[4] = rolls[1];
                stats[5] = rolls[5];
                setProfSkills([
                    "Acrobatics",
                    "Athletics",
                    "History",
                    "Insight",
                    "Religion",
                    "Stealth"
                ]);
                setMaxProfSkills("two");
                break;
            case "Paladin":
                stats[0] = rolls[0];
                stats[1] = rolls[5];
                stats[2] = rolls[2];
                stats[3] = rolls[4];
                stats[4] = rolls[3];
                stats[5] = rolls[1];
                setProfSkills([
                    "Athletics",
                    "Insight",
                    "Intimidation",
                    "Medicine",
                    "Persuasion",
                    "Religion"
                ]);
                setMaxProfSkills("two");
                break;
            case "Ranger":
                stats[0] = rolls[5];
                stats[1] = rolls[0];
                stats[2] = rolls[3];
                stats[3] = rolls[2];
                stats[4] = rolls[1];
                stats[5] = rolls[4];
                setProfSkills([
                    "Animal Handling",
                    "Athletics",
                    "Insight",
                    "Investigation",
                    "Nature",
                    "Perception",
                    "Stealth",
                    "Survival"
                ]);
                setMaxProfSkills("three");
                break;
            case "Rogue":
                stats[0] = rolls[5];
                stats[1] = rolls[0];
                stats[2] = rolls[4];
                stats[3] = rolls[2];
                stats[4] = rolls[3];
                stats[5] = rolls[1];
                setProfSkills([
                    "Acrobatics",
                    "Athletics",
                    "Deception",
                    "Insight",
                    "Intimidation",
                    "Investigation",
                    "Perception",
                    "Performance",
                    "Persuasion",
                    "Sleight of Hand",
                    "Stealth"
                ]);
                setMaxProfSkills("four");
                break;
            case "Sorcerer":
                stats[0] = rolls[5];
                stats[1] = rolls[3];
                stats[2] = rolls[4];
                stats[3] = rolls[1];
                stats[4] = rolls[2];
                stats[5] = rolls[0];
                setProfSkills([
                    "Arcana",
                    "Deception",
                    "Insight",
                    "Intimidation",
                    "Persuasion",
                    "Religion"
                ]);
                setMaxProfSkills("two");
                break;
            case "Warlock":
                stats[0] = rolls[5];
                stats[1] = rolls[3];
                stats[2] = rolls[4];
                stats[3] = rolls[1];
                stats[4] = rolls[2];
                stats[5] = rolls[0];
                setProfSkills([
                    "Arcana",
                    "Deception",
                    "History",
                    "Intimidation",
                    "Investigation",
                    "Nature",
                    "Religion"
                ]);
                setMaxProfSkills("two");
                break;
            case "Wizard":
                stats[0] = rolls[5];
                stats[1] = rolls[2];
                stats[2] = rolls[4];
                stats[3] = rolls[0];
                stats[4] = rolls[1];
                stats[5] = rolls[3];
                setProfSkills([
                    "Arcana",
                    "History",
                    "Insight",
                    "Investigation",
                    "Medicine",
                    "Religion"
                ]);
                setMaxProfSkills("two");
                break;
            default:
                break;
        }
        // Add racial bonuses to stats based on selected race
        switch (playerRace) {
            case "Dragonborn":
                stats[0] += 2;
                stats[5] += 1;
                break;
            case "Dwarf":
                stats[2] += 2;
                break;
            case "Elf":
                stats[1] += 2;
                break;
            case "Gnome":
                stats[3] += 2;
                break;
            case "Half-Elf":
                stats[3] += 1;
                stats[4] += 1;
                stats[5] += 2;
                break;
            case "Halfling":
                stats[1] += 2;
                break;
            case "Half-Orc":
                stats[0] += 2;
                stats[2] += 1;
                break;
            case "Human":
                stats[0] += 1;
                stats[1] += 1;
                stats[2] += 1;
                stats[3] += 1;
                stats[4] += 1;
                stats[5] += 1;
                break;
            case "Tiefling":
                stats[3] += 1;
                stats[5] += 2;
                break;
            default:
                break;
        }
        setPlayerStats(stats);
        
        // Determine Hit Dice based on selected class
                switch (playerClass) {
                case "Barbarian":
                    setHitDice("d12");
                    break;
                case "Fighter":
                case "Paladin":
                case "Ranger":
                    setHitDice("d10");
                    break;
                case "Bard":
                case "Cleric":
                case "Druid":
                case "Monk":
                case "Rogue":
                case "Warlock":
                    setHitDice("d8");
                    break;
                case "Sorcerer":
                case "Wizard":
                    setHitDice("d6");
                    break;
                default:
                    break;
            }
    }
    return (
        <div id="compGenerate">
            <button onClick={() => GenerateStats()}>Generate</button>
            <hr/>
            <Stats 
               playerStats = {playerStats} 
               playerClass = {playerClass}
               playerLevel = {playerLevel}
               profSkills = {profSkills}
               maxProfSkills = {maxProfSkills}
               hitDice = {hitDice}
            />
        </div>
    )
}

export default Generate;