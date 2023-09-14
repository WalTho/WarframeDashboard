import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "../WarframeDataDisplay";
import SimpleModal from './../SimpleModal/SimpleModal';

function SearchForFissureDrops() {
    const [query, setQuery] = useState('');
    const [endpoint, setEndpoint] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [hasResults, setHasResults] = useState(true);
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
        setEndpoint(`drops/search/${query}/`);
    };

    const clearResults = () => {
        setEndpoint(null);
        setQuery('');
    };

    const renderDrops = (data) => {
        if (!data || (Array.isArray(data) && data.length === 0)) {
            setHasResults(false);
            return <p className="noResultsText">Aucun résultat trouvé pour "{lastSubmittedQuery}".</p>;
        }
        setHasResults(true);
        return(
            <div className="fissureDrops">
                {data.map(drop => (
                    <div key={uuidv4()} className="fissureDrops-fissure">
                        <h3>{drop.item}</h3>
                        <p>Lieu: {drop.place}</p>
                        <p>Rareté: {drop.rarity}</p>
                        <p>Chance: {drop.chance}%</p>
                    </div>
                ))}
            </div>
        )
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
                    placeholder="Cherchez des reliques ou des pièces Prime..."
                />
                <button type="submit">Rechercher</button>
                {endpoint && hasResults && <button onClick={clearResults} className='deleteResults'>Effacer les résultats</button>}
            </form>
            {endpoint && <WarframeDataDisplay endpoint={endpoint} render={renderDrops} />}
        </div>
    );
}

export default SearchForFissureDrops;
