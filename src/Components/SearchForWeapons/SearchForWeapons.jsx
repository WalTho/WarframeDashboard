import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "./../WarframeDataDisplay";
import SimpleModal from './../SimpleModal/SimpleModal';

const SearchForWeapons = () => {
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
        setEndpoint(`weapons/${query}?language=fr`);
    };

    const renderWeapons = (weapon) => (
        <div key={uuidv4()}>
            <h2>{weapon.name}</h2>
            <img src={weapon.imageName} alt={weapon.name} />
            <p>Description : {weapon.description}</p>
            <p>Catégorie : {weapon.category}</p>
            <p>Chance Critique : {weapon.criticalChance * 100}%</p>
            <p>Multiplicateur Critique : x{weapon.criticalMultiplier}</p>
            <p>Chance de Statut : {weapon.procChance * 100}%</p>
            <p>Portée : {weapon.range}</p>

            <h3>Attaques</h3>
            {weapon.attacks.map((attack, index) => (
                <div key={index}>
                    <h4>{attack.name}</h4>
                    <p>Vitesse : {attack.speed}</p>
                    <p>Chance Critique : {attack.crit_chance}%</p>
                    <p>Multiplicateur Critique : x{attack.crit_mult}</p>
                    <p>Chance de Statut : {attack.status_chance}%</p>
                    <h5>Types de Dommages</h5>
                    <ul>
                        {Object.entries(attack.damage).map(([key, value]) => (
                            value > 0 ? <li key={key}>{key}: {value}</li> : null
                        ))}
                    </ul>
                    <p>Attaque Glissée : {attack.slide}</p>
                    <h5>Attaque de Choc</h5>
                    <p>Dommages : {attack.slam.damage}</p>
                    <p>Dommages Radiaux : {attack.slam.radial.damage}</p>
                    <p>Elément Radial : {attack.slam.radial.element}</p>
                    <p>Rayon Radial : {attack.slam.radial.radius}</p>
                </div>
            ))}

            <h3>Composants</h3>
            <ul>
                {weapon.components.map(component => (
                    <li key={component.uniqueName}>
                        <img src={component.imageName} alt={component.name} width={50} />
                        {component.name} x {component.itemCount}
                    </li>
                ))}
            </ul>

            <a href={weapon.introduced.url} target="_blank" rel="noopener noreferrer">Plus d'informations</a>
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
                    placeholder="Recherchez des Armes..."
                />
                <button type="submit">Rechercher</button>
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderWeapons} />}
        </div>
    );
}

export default SearchForWeapons;
