import React from "react";
import { getTimeRemaining } from "../utils";
import WarframeDataDisplay from "../WarframeDataDisplay";  // Ensure the path is correct

const VoidTraderComponent = ({ data }) => {
    let timeString = '';
    let inventoryDisplay = null;

    if (data.active) {
        const remainingTime = getTimeRemaining(data.expiry);
        if (remainingTime) {
            timeString = `Termine dans: ${remainingTime.days} jours ${remainingTime.hours} heures ${remainingTime.minutes} minutes`;
        }

        inventoryDisplay = (
            <div>
                <h4>Inventaire:</h4>
                <ul>
                    {data.inventory.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        const durationToStart = getTimeRemaining(data.activation);
        if (durationToStart) {
            timeString = `Démarre dans: ${durationToStart.days} jours ${durationToStart.hours} heures ${durationToStart.minutes} minutes`;
        }
    }

    return (
        <div>
            <h2>{data.character}</h2>
            <p>Localisation: {data.location}</p>
            <p>{timeString}</p>
            {inventoryDisplay}
        </div>
    );
};

const VoidTraderDisplay = () => (
    <WarframeDataDisplay
        endpoint="pc/voidTrader"
        render={(data) => <VoidTraderComponent data={data} />}
    />
);

export default VoidTraderDisplay;
