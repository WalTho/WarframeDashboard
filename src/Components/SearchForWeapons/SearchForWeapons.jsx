import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "./../WarframeDataDisplay";
import SimpleModal from './../SimpleModal/SimpleModal';

const SearchForWeapons = () => {
    const [query, setQuery] = useState('');
    const [endpoint, setEndpoint] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [hasResults, setHasResults] = useState(false);
    const [lastSubmittedQuery, setLastSubmittedQuery] = useState('');

    const inputRef = React.useRef(null);

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
        setLastSubmittedQuery(query.trim());
        setEndpoint(`weapons/${query}?language=fr`);
    };

    const clearResults = () => {
        setEndpoint(null);
        setQuery('');
    };

    const renderWeapons = (weapon) => {
        if (!weapon || (Array.isArray(weapon) && weapon.length === 0)) {
            setHasResults(false);
            return <p className="noResultsText">Aucun résultat trouvé pour "{lastSubmittedQuery}".</p>;
        }
        setHasResults(true);
    
        return (
            <div key={uuidv4()} className="weapons">
                <h2>{weapon.name || "Nom inconnu"}</h2>
                <img src={weapon.imageName || ""} alt={weapon.name || "Nom inconnu"} />
                <p>Description : {weapon.description || "Description non disponible"}</p>
                <p>Catégorie : {weapon.category || "Non spécifié"}</p>
                <p>Chance Critique : {weapon.criticalChance ? weapon.criticalChance * 100 : "Non spécifié"}%</p>
                <p>Multiplicateur Critique : x{weapon.criticalMultiplier || "Non spécifié"}</p>
                <p>Chance de Statut : {weapon.procChance ? weapon.procChance * 100 : "Non spécifié"}%</p>
                <p>Portée : {weapon.range || "Non spécifié"}</p>
    
                <h3>Attaques</h3>
                {weapon.attacks && weapon.attacks.length > 0 ? weapon.attacks.map((attack, index) => (
                    <div key={index}>
                        <h4>{attack.name || "Nom inconnu"}</h4>
                        <p>Vitesse : {attack.speed || "Non spécifié"}</p>
                        <p>Chance Critique : {attack.crit_chance || "Non spécifié"}%</p>
                        <p>Multiplicateur Critique : x{attack.crit_mult || "Non spécifié"}</p>
                        <p>Chance de Statut : {attack.status_chance || "Non spécifié"}%</p>
                        <h5>Types de Dommages</h5>
                        <ul>
                            {attack.damage ? Object.entries(attack.damage).map(([key, value]) => (
                                value > 0 ? <li key={key}>{key}: {value}</li> : null
                            )) : <p>Données de dommage non disponibles.</p>}
                        </ul>
                        <p>Attaque Glissée : {attack.slide || "Non spécifié"}</p>
                        {attack.slam ? (
                            <>
                                <h5>Attaque de Choc</h5>
                                <p>Dommages : {attack.slam.damage || "Non spécifié"}</p>
                                {attack.slam.radial ? (
                                    <>
                                        <p>Dommages Radiaux : {attack.slam.radial.damage || "Non spécifié"}</p>
                                        <p>Elément Radial : {attack.slam.radial.element || "Non spécifié"}</p>
                                        <p>Rayon Radial : {attack.slam.radial.radius || "Non spécifié"}</p>
                                    </>
                                ) : null}
                            </>
                        ) : null}
                    </div>
                )) : <p>Aucune attaque disponible.</p>}
    
                <h3>Composants</h3>
                {weapon.components && weapon.components.length > 0 ? weapon.components.map(component => (
                    <li key={component.uniqueName || uuidv4()}>
                        <img src={component.imageName || ""} alt={component.name || "Composant inconnu"} width={50} />
                        {component.name || "Nom inconnu"} x {component.itemCount || "Non spécifié"}
                    </li>
                )) : <p>Aucun composant disponible.</p>}
                {weapon.introduced && weapon.introduced.url ? (
                    <a href={weapon.introduced.url} target="_blank" rel="noopener noreferrer">Plus d'informations</a>
                ) : null}
            </div>
        );
    };
    

    return (
        <div className="Search">
            <SimpleModal isOpen={isModalVisible} onClose={() => setIsModalVisible(false)} message={modalMessage} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    ref={inputRef}
                    onClick={() => inputRef.current.select()}
                    placeholder="Recherchez des Armes..."
                />
                <button type="submit">Rechercher</button>
                {endpoint && hasResults && <button onClick={clearResults} className='deleteResults'>Effacer les résultats</button>}
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderWeapons} />}
        </div>
    );
}

export default SearchForWeapons;
