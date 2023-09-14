import React from "react";
import WarframeDataDisplay from "../WarframeDataDisplay";
import { v4 as uuidv4 } from 'uuid';

const PlanetsState = () => {
    const planetEndpoints = [
        { endpoint: "pc/cetusCycle", title: "Cetus" },
        { endpoint: "pc/earthCycle", title: "Terre" },
        { endpoint: "pc/cambionCycle", title: "Puit de Cambion" },
        { endpoint: "pc/zarimanCycle", title: "Zariman" },
        { endpoint: "pc/vallisCycle", title: "Valée d'Orbis" },
        { endpoint: "pc/duviriCycle", title: "Paradoxe du Duviri" }
    ];

    const renderState = (state) => {
        let emotes = {
            "day": "🌞",
            "night": "🌜",
            "fass": "🔴",
            "vome": "🔵",
            "grineer": "⚔️",
            "corpus": "💼",
            "cold": "❄️",
            "warm": "🔥",
            "joy": "😀",
            "anger": "😡",
        };

        return emotes[state] || "🔍";
    };

    const translateState = (state) => {
        const translations = {
            "day": "Jour",
            "night": "Nuit",
            "fass": "Fass",
            "vome": "Vome",
            "grineer": "Grineer",
            "corpus": "Corpus",
            "cold": "Froid",
            "warm": "Chaud",
            "joy": "Joie",
            "anger": "Colère",
        };

        return translations[state] || state;
    };

    const planetStateItems = (data, title) => (
        <div key={uuidv4()}>
            <h2>{title}</h2>
            <p>{renderState(data.state)} - {translateState(data.state)}</p>
            {data.timeLeft && <p>Temps restant: {data.timeLeft}</p>}
            <hr />
        </div>
    );

    return (
        <div>
            {planetEndpoints.map(planet => (
                <WarframeDataDisplay
                    key={planet.endpoint}
                    endpoint={planet.endpoint}
                    render={(data) => planetStateItems(data, planet.title)}
                />
            ))}
        </div>
    );
}

export default PlanetsState;
