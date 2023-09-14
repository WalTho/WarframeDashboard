import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "./../WarframeDataDisplay";
import SimpleModal from './../SimpleModal/SimpleModal';


function SearchForWarframes() {
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
        setEndpoint(`warframes/${query}`);
    };

    const renderWarframes = (warframe) => (
        <div key={uuidv4()}>
            <img src={warframe.wikiaThumbnail} alt={warframe.name} rel="noopener noreferrer"/>
            <h3>{warframe.name}</h3>
            <p>{warframe.description}</p>
            <p>Armure : {warframe.armor}</p>
            <p>Santé : {warframe.health}</p>
            <p>Bouclier : {warframe.shield}</p>
            <p>Puissance : {warframe.power}</p>
            <p>Date de sortie : {warframe.releaseDate}</p>
            <a href={warframe.wikiaUrl} target="_blank" rel="noopener noreferrer">Plus d'informations</a>
            <h4>Capacités :</h4>
            <ul>
                {warframe.abilities.map(ability => (
                    <li key={ability.uniqueName}>
                        <strong>{ability.name}:</strong> {ability.description}
                    </li>
                ))}
            </ul>
            <h4>Composants :</h4>
            <ul>
                {warframe.components.map(component => (
                    <li key={component.uniqueName}>
                        <strong>{component.name}:</strong> {component.description}
                        <ul>
                            {component.drops.map(drop => (
                                <li key={drop.location}>
                                    {drop.location} - {drop.type} - {drop.chance * 100}%
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
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
                    placeholder="Cherchez des Warframes..."
                />
                <button type="submit">Rechercher</button>
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderWarframes} />}
        </div>
    );
}

export default SearchForWarframes;
