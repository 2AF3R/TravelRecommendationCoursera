document.getElementById('searchBtn').addEventListener('click', search);
document.getElementById('clearBtn').addEventListener('click', clearResults);

function search() {
    const keyword = document.getElementById('search').value.toLowerCase();
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const results = data.filter(item => item.type.includes(keyword));
            displayResults(results);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayResults(results) {
    const resultsContainer = document.createElement('div');
    resultsContainer.id = 'results';
    results.forEach(result => {
        const resultDiv = document.createElement('div');
        resultDiv.className = 'result';
        resultDiv.innerHTML = `
            <h3>${result.name}</h3>
            <img src="${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
        `;
        resultsContainer.appendChild(resultDiv);
    });
    document.body.appendChild(resultsContainer);
}

function clearResults() {
    const resultsContainer = document.getElementById('results');
    if (resultsContainer) {
        resultsContainer.remove();
    }
    document.getElementById('search').value = '';
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});