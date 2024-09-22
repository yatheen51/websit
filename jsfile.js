// Function to show modal with vegetable details
function showDetails(vegetable) {
    const details = {
        'tomato': {
            
            description: 'Average Prices for the Next 30 Days Wholesale: 17.52 ,Retail: 21.35 Shopping Mall: 25.04 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['/TomatoGraph.png', 'tomato.jpg'],
            price: 'Rs 24.50 per kg'
            
        },
        'carrot': {
            description:  'Average Prices for the Next 30 Days Wholesale: 40.71 ,Retail: 49.24 Shopping Mall: 57.82 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['CarrotGraph.png', 'images/carrot2.jpg'],
            price: 'Rs 50.8 per kg'
        },
        'banana': {
            description:  'Average Prices for the Next 30 Days Wholesale: 9.14 ,Retail: 11.09 Shopping Mall: 12.73 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['BananaGraph.png', 'images/tomato2.jpg'],
            price: 'Rs 11.5 per kg'
        },
        'small onion': {
            description:  'Average Prices for the Next 30 Days Wholesale: 51.51 ,Retail: 62.37 Shopping Mall: 73.38 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['Small onion graph.png', 'images/tomato2.jpg'],
            price: 'Rs 70.5 per kg'
        },
        'beetroot': {
            description: 'Average Prices for the Next 30 Days Wholesale: 27.70 ,Retail: 33.57 Shopping Mall: 39.48   Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['BeetrootGraph.png', 'images/tomato2.jpg'],
            price: 'Rs 34.0 per kg'
        },
        'potato': {
            description:  'Average Prices for the Next 30 Days Wholesale: 30.95 ,Retail: 37.28 Shopping Mall: 44.20 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['Potato graph.png', 'images/tomato2.jpg'],
            price: 'Rs 40.5 per kg'
        },
        'big onion': {
            description:  'Average Prices for the Next 30 Days Wholesale: 38.24 ,Retail: 46.28 Shopping Mall: 54.41 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['Curry Leaves graph.png', 'images/tomato2.jpg'],
            price: 'Rs 47.5 per kg'
        },
        'green chilli': {
            description:  'Average Prices for the Next 30 Days Wholesale: 59.36 ,Retail: 71.84 Shopping Mall: 84.79 Recommendation: Based on forecasted prices over the next 30 days, it is recommended to sell on the Shopping Mall platform.',
            images: ['Green Chilli graph.png', 'images/tomato2.jpg'],
            price: 'Rs 75.5 per kg'
        }
    };


    const vegDetails = details[vegetable];
    if (vegDetails) {
        let detailHtml = `<h2>${vegetable.charAt(0).toUpperCase() + vegetable.slice(1)}</h2>`;
        detailHtml += `<p>${vegDetails.description}</p>`;
        detailHtml += `<h3>Price: ${vegDetails.price}</h3>`;
        detailHtml += '<img src="image/${value.image}"></img>'
        vegDetails.images.forEach(img => {
            detailHtml += `<img src="${img}" alt="${vegetable}" aria-label="${vegetable} image">`;
        });
        detailHtml += `</div>`;

        document.getElementById('details').innerHTML = detailHtml;
        document.getElementById('modal').style.display = 'flex';
    } else {
        document.getElementById('details').innerHTML = `<p>Details for ${vegetable} are not available.</p>`;
        document.getElementById('modal').style.display = 'flex';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
