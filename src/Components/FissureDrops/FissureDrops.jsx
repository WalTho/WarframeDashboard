import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "./../WarframeDataDisplay";

function FissureDrops() {
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
        setEndpoint(`drops/search/${query}/`);
    };

    const renderDrops = (data) => (
        <div>
            {data.map(drop => (
                <div key={uuidv4()}>
                    <h3>{drop.item}</h3>
                    <p>Lieu: {drop.place}</p>
                    <p>Rareté: {drop.rarity}</p>
                    <p>Chance: {drop.chance}%</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Cherchez des reliques ou des pièces Prime..."
                />
                <button type="submit">Rechercher</button>
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderDrops} />}
        </div>
    );
}

export default FissureDrops;
