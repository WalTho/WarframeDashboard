import React from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "../WarframeDataDisplay";
import Accordion from "../Accordion/Accordion";

const SyndicateMissions = () => {

    const SyndicateMissionsItems = (data) => (
        <div key={uuidv4()}>
            {data
                .filter(syndicateMissions => syndicateMissions.jobs && syndicateMissions.jobs.length > 0) 
                .map((syndicateMissions) => (
                    <Accordion key={uuidv4()} title={syndicateMissions.syndicate}>
                        <p>À démarré il y a: {syndicateMissions.startString}</p>
                        <p>Expire le: {new Date(syndicateMissions.expiry).toLocaleString()}</p>
                        <p>Temps restant : {syndicateMissions.eta}</p>
                        <ul>
                            {syndicateMissions.jobs.map((job) => (
                                <li key={uuidv4()}>
                                    <h3>{job.type}</h3>
                                    <p>Niveau des ennemis: {job.enemyLevels.join(' - ')}</p>
                                    <p>Paliers de Réputation: {job.standingStages.join(', ')}</p>
                                    <p>Rang de Maîtrise Minimum (MR): {job.minMR}</p>
                                </li>
                            ))}
                        </ul>
                    </Accordion>
            ))}
        </div>
    );

    return (
        <div className="syndicatMissions">
            <h1>Missions de Syndicats</h1>
            <WarframeDataDisplay endpoint="pc/syndicateMissions" render={SyndicateMissionsItems} key={uuidv4()}/>
        </div>
    );
}

export default SyndicateMissions;
