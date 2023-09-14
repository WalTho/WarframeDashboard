import React from "react";
import WarframeDataDisplay from "../WarframeDataDisplay";

const SortieWrapper = () => {
    const sortieData = (data) => {
        return (
            <div className="sortie" key={data.id}>
                {data.variants.map((variant, index) => (
                    <div className="variant" key={index}>
                        <hr />
                        <p>Type de mission : <span>{variant.missionType}</span></p>
                        <p>Modificateur : <span>{variant.modifier}</span></p>
                        <p>Description du modificateur : <span>{variant.modifierDescription}</span></p>
                        <p>Noeud : <span>{variant.node}</span></p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div>
            <h1>Sorties</h1>
            <WarframeDataDisplay endpoint="pc/sortie" render={sortieData} />
        </div>
    );
};

export default SortieWrapper;
