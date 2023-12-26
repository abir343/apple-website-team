document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the mock API
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            const productContainer = document.getElementById('product-container');

            // Display product information dynamically
            productContainer.innerHTML = `
                <h1>${response.data.title}</h1>
                <p>${response.data.body}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
