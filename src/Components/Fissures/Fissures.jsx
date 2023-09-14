import React from "react";
import { v4 as uuidv4 } from 'uuid';
import WarframeDataDisplay from "../WarframeDataDisplay";

const Fissures = () => {
    const fissuresItems = (data) => (
        <div key="fissureDiv">
            {data.map((fissures) => (
                <div className="fissures" key={uuidv4()}>
                    <hr />
                    <h2 key={uuidv4()}>
                        {fissures.node}
                    </h2>
                    <p key={uuidv4()}>
                        Type : <span>{fissures.missionType}</span>
                    </p>
                    <p key={uuidv4()}>
                        Ennemis : <span>{fissures.enemy}</span>
                    </p>
                    <p key={uuidv4()}>
                        Relique : <span>{fissures.tier}</span>
                    </p>
                    <p key={uuidv4()}>
                        Temps restant : <span>{fissures.eta}</span>
                    </p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <h1>Fissures</h1>
            <WarframeDataDisplay endpoint="pc/fissures" render={fissuresItems} key={uuidv4()}/>
        </div>
    );
}

export default Fissures;
