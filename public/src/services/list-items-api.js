const URL = '/api';

export function getItems() {
    const url = `${URL}/list_items`;

    return fetch(url)
        .then(response => response.json());
}
