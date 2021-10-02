import React from 'react';
import Misc from './Misc';

const Proficiency = ({playerClass, playerLevel, playerStats, skillMods, profSkills, maxProfSkills, hitDice}) => {
    let profBonus;

    if (playerLevel <= 4) {
        profBonus = 2;
    } else if (playerLevel <= 8) {
        profBonus = 3;
    } else if (playerLevel <= 12) {
        profBonus = 4;
    } else if (playerLevel <= 16) {
        profBonus = 5;
    } else {
        profBonus = 6;
    }

    // Calculate modifiers for skills of each stat type (Athletics = STR mod, Arcana = INT mod)
    for (var i = 0; i <= profSkills.length; i++) {
        // STR Skills Mod
        if (profSkills[i] === "Athletics") {
            profSkills[i] += " " + skillMods[0];
        // DEX Skills Mod
        } else if (profSkills[i] === "Acrobatics" ||
                    profSkills[i] === "Sleight of Hand" ||
                    profSkills[i] === "Stealth") {
                        profSkills[i] += " " + skillMods[1];
        // INT Skills Mod (Skipping CON since no related skills exist)
        } else if (profSkills[i] === "Arcana" ||
                    profSkills[i] === "History" ||
                    profSkills[i] === "Nature" ||
                    profSkills[i] === "Religion") {
                        profSkills[i] += " " + skillMods[3];
        // WIS Skills Mod
        } else if (profSkills[i] === "Animal Handling" ||
                    profSkills[i] === "Insight" ||
                    profSkills[i] === "Medicine" ||
                    profSkills[i] === "Perception" ||
                    profSkills[i] === "Survival") {
                        profSkills[i] += " " + skillMods[4];
        // CHA Skills Mod
        } else if (profSkills[i] === "Deception" ||
                    profSkills[i] === "Intimidation" ||
                    profSkills[i] === "Performance" ||
                    profSkills[i] === "Persuasion") {
                        profSkills[i] += " " + skillMods[5];
        }
    }
    return (
        <div id="compProficiency">
            <h1>Proficiency Bonus: +{profBonus}</h1>
            <h2>Choose {maxProfSkills} skills to add proficiency bonus to skill modifier</h2>
            <ul className="profSkills">
                <li>{profSkills[0]}</li>
                <li>{profSkills[1]}</li>
                <li>{profSkills[2]}</li>
                <li>{profSkills[3]}</li>
                <li>{profSkills[4]}</li>
                <li>{profSkills[5]}</li>
                <li>{profSkills[6]}</li>
                <li>{profSkills[7]}</li>
                <li>{profSkills[8]}</li>
                <li>{profSkills[9]}</li>
                <li>{profSkills[10]}</li>
            </ul>
            <hr/>
            <Misc 
                playerClass = {playerClass}
                playerLevel = {playerLevel}
                skillMods = {skillMods}
                hitDice = {hitDice}
            />
        </div>
    )
}

export default Proficiency;