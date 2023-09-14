import React, { useState, useEffect } from "react";
import { fetchData } from "./api";

function WarframeDataDisplay({ endpoint, language = "fr", render }) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(endpoint, language)
            .then((jsonData) => {
                console.log('Response Data:', jsonData);
                setData(jsonData);
                setIsLoading(false); // Set loading to false when data is received
            })
            .catch((error) => console.error("Error:", error));
    }, [endpoint, language]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div key={endpoint} className="WarframeDataDisplay">{render(data)}</div>;
}

export default WarframeDataDisplay;
