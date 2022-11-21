function showCategories() {
    const container = document.querySelector('.categories');

    for (let i = 0; i < data.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = data[i].name;
        elem.setAttribute('data-category', i);
        elem.addEventListener('click', showProducts);
        container.appendChild(elem);
    }
}

// handler of click on categories
function showProducts(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const products = data[categoryIndex].products;
    const container = document.querySelector('.products');
    container.innerHTML = '';
  
  for(let i = 0; i < products.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = products[i].name;
        elem.setAttribute('data-product', i);
        elem.setAttribute('data-category', categoryIndex);
        elem.addEventListener('click', showDetails);
        container.appendChild(elem);
    }
}

function showDetails(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const productIndex = event.target.getAttribute('data-product');
    const detailsInfo = data[categoryIndex].products[productIndex];
    const details = document.querySelector('.details');
    const products = document.querySelector('.products');

    details.innerHTML = `<p>name: ${detailsInfo.name}</p>
    <p>price: ${detailsInfo.price}</p>
    <p>description: ${detailsInfo.description}</p>`;

    const button = document.createElement('button');
    button.textContent = 'buy';
    details.appendChild(button);

    const win = document.getElementById('win');
    
    button.addEventListener('click', () => {
        win.style.display = 'block';
        setTimeout(() => {
            win.style.display = 'none';
        }, 3000);
        win.textContent = 'Congratulations! You bought ' + `${detailsInfo.name}`;
        products.innerHTML = '';
        details.innerHTML = '';
    });
}

showCategories();