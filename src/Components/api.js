export function fetchData(endpoint, language = "fr") {
    const baseUrl = "https://api.warframestat.us/";
    const url = `${baseUrl}${endpoint}?language=${language}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
            if(jsonData.error) {
                throw new Error(jsonData.error); // Throw an error if the API returned an error
            }
            console.log('Response Data:', jsonData);
            return jsonData;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}