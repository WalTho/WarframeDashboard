import React from "react";
import WarframeDataDisplay from "../WarframeDataDisplay";
import { ChallengeList } from "./NightwaveComponent.jsx";

const NightwaveDisplay = () => {
    const nightwaveDataDisplay = (data) => (
        <div>
            <h1>Saison des Ondes Nocturnes {data.season}</h1>
            <ChallengeList title="Challenges Journaliers" challenges={data.activeChallenges.filter(challenge => challenge.isDaily)} />
            <ChallengeList title="Challenges Hebdomadaires" challenges={data.activeChallenges.filter(challenge => !challenge.isDaily && !challenge.isElite)} />
            <ChallengeList title="Challenges Hebdomadaires - Elite" challenges={data.activeChallenges.filter(challenge => challenge.isElite)} />
        </div>
    );

    return (
        <div className="nightwaves">
            <WarframeDataDisplay
                endpoint="pc/nightwave"
                render={nightwaveDataDisplay}
            />
        </div>
    );
}

export default NightwaveDisplay;
