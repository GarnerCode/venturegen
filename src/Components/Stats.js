import React from 'react';
import Proficiency from './Proficiency';

const Stats = ({playerStats, playerClass, playerLevel, profSkills, maxProfSkills, hitDice}) => {
    //Calculate stat modifiers
    var skillMods = [
        "+0",
        "+0",
        "+0",
        "+0",
        "+0",
        "+0"
    ];
    for (var i = 0; i <= playerStats.length; i++) {
        if (playerStats[i] < 10) {
            skillMods[i] = "-" + 1;
        } else if (playerStats[i] === 10 || playerStats[i] === 11) {
            skillMods[i] = 0;
        } else if (playerStats[i] === 12 || playerStats[i] === 13) {
            skillMods[i] = "+" + 1;
        } else if (playerStats[i] === 14 || playerStats[i] === 15) {
            skillMods[i] = "+" + 2;
        } else if (playerStats[i] === 16 || playerStats[i] === 17) {
            skillMods[i] = "+" + 3;
        } else if (playerStats[i] === 18 || playerStats[i] === 19) {
            skillMods[i] = "+" + 4;
        } else if (playerStats[i] === 20) {
            skillMods[i] = "+" + 5;
        } else {
            skillMods[i] = "";
        }
    }
    return (
        <div id="compStats">
            <h1>Stats</h1>
                <ul>
                    <li>STR: {playerStats[0]} ({skillMods[0]})</li>
                    <li>DEX: {playerStats[1]} ({skillMods[1]})</li>
                    <li>CON: {playerStats[2]} ({skillMods[2]})</li>
                    <li>INT: {playerStats[3]} ({skillMods[3]})</li>
                    <li>WIS: {playerStats[4]} ({skillMods[4]})</li>
                    <li>CHA: {playerStats[5]} ({skillMods[5]})</li>
                </ul>
                <hr/>
                <Proficiency 
                    playerClass = {playerClass}
                    playerLevel = {playerLevel}
                    playerStats = {playerStats}
                    skillMods = {skillMods}
                    profSkills = {profSkills}
                    maxProfSkills = {maxProfSkills}
                    hitDice = {hitDice}
                />
        </div>
    )
}

export default Stats;