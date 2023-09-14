import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "./../WarframeDataDisplay";
import SimpleModal from './../SimpleModal/SimpleModal';


function SearchForMods() {
    const [query, setQuery] = useState('');
    const [endpoint, setEndpoint] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        setIsModalVisible(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) {
            showModal('Veuillez saisir un terme de recherche valide.');
            return;
        }
        if (!/^[a-zA-Z0-9 ]+$/.test(query)) {
            showModal('Des caractères non valides ont été détectés. Veuillez utiliser uniquement des lettres et des chiffres.');
            return;
        }
        setEndpoint(`mods/${query}`);
    };

    const renderMods = (mod) => (
        <div key={uuidv4()}>
            <h3>{mod.name} ({mod.rarity})</h3>
            <img src={mod.wikiaThumbnail} alt={mod.name} />
            <p>Type : {mod.type}</p>
            <p>Catégorie : {mod.category}</p>
            <p>Consommation de base : {mod.baseDrain}</p>
            <p>Compatibilité : {mod.compatName}</p>
            <p>Limite de fusion : {mod.fusionLimit}</p>
            <p>Polarité : {mod.polarity}</p>
            <p>Échangeable : {mod.tradable ? "Oui" : "Non"}</p>
            <p>Transmutable : {mod.transmutable ? "Oui" : "Non"}</p>
            <p>Introduit : <a href={mod.introduced.url} target="_blank" rel="noopener noreferrer">{mod.introduced.name}</a></p>
            <h4>Statistiques par niveau :</h4>
            <ul>
                {mod.levelStats.map((level, index) => (
                    <li key={index}>
                        {level.stats.join(", ")}
                    </li>
                ))}
            </ul>
            <h4>Lieux d'obtention :</h4>
            <ul>
                {mod.drops.map(drop => (
                    <li key={drop.location}>
                        {drop.location} - {drop.rarity} - {drop.chance * 100}%
                    </li>
                ))}
            </ul>
            <a href={mod.wikiaUrl} target="_blank" rel="noopener noreferrer">Plus d'informations</a>
        </div>
    );

    return (
        <div>
            <SimpleModal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)} message={modalMessage} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Cherchez des Mods..."
                />
                <button type="submit">Rechercher</button>
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderMods} />}
        </div>
    );
}

export default SearchForMods;
