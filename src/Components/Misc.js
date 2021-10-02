import React from 'react';

const Misc = ({playerClass, playerLevel, skillMods, hitDice}) => {
    return (
        <div id="compMisc">
            <h1>Unarmored AC: {10 + " " + skillMods[1]}</h1> 
            <h1>Initiative: {skillMods[1]}</h1>
            <h1>Hit Dice: {playerLevel}{hitDice}</h1>
        </div>
    )
}

export default Misc;