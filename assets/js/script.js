const API_KEY = 'XFKFBSDEZjhKyfCBQl3oD59bkDo';
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));

document.getElementById('status').addEventListener('click', e => getStatus(e));

// 1. Make a GET request to the API URL with the API key
// 2. Pass the data to a display function 

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data)
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {
    document.getElementById('resultsModalTitle').innerHTML = `API Key Status`;
    document.getElementById('results-content').innerHTML =
        `Your key is valid until <br> ${data.expiry}`;
    resultsModal.show();
}