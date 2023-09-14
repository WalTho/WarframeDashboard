import React from "react";
import WarframeDataDisplay from "../WarframeDataDisplay";

function NightwaveDisplay() {

    const challengeItem = (challenge) => (
        <div key={challenge.id}>
            <h4>{challenge.title}</h4>
            <p>{challenge.desc}</p>
            <p>Reputation: {challenge.reputation}</p>
            {challenge.startString && <p>Started: {challenge.startString}</p>}
            {challenge.expiry && <p>Expires: {challenge.expiry}</p>}
            <hr />
        </div>
    );

    const nightwaveDataDisplay = (data) => (
        <div>
            <h2>Nightwave Season {data.season}</h2>

            <h3>Daily Challenges</h3>
            {data.activeChallenges.filter(challenge => challenge.isDaily).map(challengeItem)}

            <h3>Weekly Challenges</h3>
            {data.activeChallenges.filter(challenge => !challenge.isDaily && !challenge.isElite).map(challengeItem)}

            <h3>Elite Weekly Challenges</h3>
            {data.activeChallenges.filter(challenge => challenge.isElite).map(challengeItem)}
        </div>
    );

    return (
        <WarframeDataDisplay
            endpoint="pc/nightwave"
            render={nightwaveDataDisplay}
        />
    );
}

export default NightwaveDisplay;
