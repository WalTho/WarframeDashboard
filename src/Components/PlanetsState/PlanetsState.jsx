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
            "envy": "😒",
            "sorrow": "😢",
            "fear": "😱",
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
            "envy": "Jalousie",
            "sorrow": "Tristesse",
            "fear": "Peur",
        };

        return translations[state] || state;
    };

    const planetStateItems = (data, title) => (
        <div key={uuidv4()} className="planetStates-content">
            <div className="planetStates-content-div">
                <h2>{title}</h2>
                <p>{renderState(data.state)} - {translateState(data.state)}</p>
                {data.timeLeft && <p>Temps restant: {data.timeLeft}</p>}
            </div>
        </div>
    );

    return (
        <div className="planetStates">
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
