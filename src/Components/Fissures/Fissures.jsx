import React from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "../WarframeDataDisplay";

const Fissures = () => {
    const tierOrder = ["Lith", "Meso", "Neo", "Axi", "Requiem"];

    const fissuresItems = (data) => {
        // Group the data by the tier
        const groupedData = data.reduce((groups, fissure) => {
            if (!groups[fissure.tier]) {
                groups[fissure.tier] = [];
            }
            groups[fissure.tier].push(fissure);
            return groups;
        }, {});

        // Render the grouped data
        return (
            <div key="fissureDiv">
                {tierOrder.map(tier => {
                    if (groupedData[tier]) {
                        return (
                            <div key={uuidv4()} className="fissure-group">
                                <h2>{tier} Fissures</h2>
                                {groupedData[tier].map(fissure => (
                                    <div key={uuidv4()} className="fissures-content">
                                        <h3>{fissure.node}</h3>
                                        <p>Type : <span>{fissure.missionType}</span></p>
                                        <p>Ennemis : <span>{fissure.enemy}</span></p>
                                        <p>Relique : <span>{fissure.tier}</span></p>
                                        <p>Temps restant : <span>{fissure.eta}</span></p>
                                    </div>
                                ))}
                            </div>
                        );
                    }
                    return null; // If there are no fissures for a particular tier, return null (no render).
                })}
            </div>
        );
    };

    return (
        <div className="fissures">
            <h1>Fissures</h1>
            <WarframeDataDisplay endpoint="pc/fissures" render={fissuresItems} key={uuidv4()}/>
        </div>
    );
}

export default Fissures;
