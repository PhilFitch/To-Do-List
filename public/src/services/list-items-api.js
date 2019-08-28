const URL = '/api';

function fetchWithError(url, options) {
    return fetch(url, options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                return response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function getItems() {
    const url = `${URL}/list_items`;

    return fetch(url)
        .then(response => response.json());
}

export function addType(type) {
    const url = `${URL}/types`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(type)
    });
}