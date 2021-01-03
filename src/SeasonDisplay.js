import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text: "Let's hit AC button!!",
        iconName: 'sun'
    },
    winter : {
        text: "Bruh, it's chilly!!",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        if (lat > 0) return 'summer';
        else return 'siwnter';
    }
    else {
        if (lat < 0) return 'summer';
        else return 'winter';
    }

}
const SeasonDisplay = (props) => {
    //console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    //console.log(season);
    const { text , iconName } = seasonConfig[ season ];
    /*
    const text = season === 'Winter' ? 'Bruh, it is chilly!!' : 'Lets hit AC button!!';
    const icon = season=== 'winter' ? 'snowfalke' : 'sun';
    */

    return (
        <div className = {`season-display ${season}`} >
            <i className = { `icon-left massive ${iconName} icon` } />
            <h1>
                {text}
            </h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;