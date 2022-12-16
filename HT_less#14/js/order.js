document.querySelector('.my_orders').addEventListener('click', showOrderInfo);

function showOrderInfo() {
    document.querySelector('.my_orders').hidden = true;
    document.querySelector('.back').hidden = false;
    const category = document.querySelector('.category');
    const products = document.querySelector('.products');
    const details = document.querySelector('.details');
    const orderInfo = document.querySelector('.order-information');
    const orderForm = document.querySelector('.form');
    details.hidden = true;
    products.hidden = true;
    category.hidden = true;
    orderInfo.hidden = true;
    orderForm.hidden = true;
    const itemInOrderCard = document.querySelector('.order_card');
    if (buyItems.length === 0) {
        const divWithItem = document.querySelector('.attention');
        divWithItem.innerHTML = 'You didn\'t pick anything';
    } else {
        itemInOrderCard.innerHTML = '';
        let item;
        for (let i = 0; i < buyItems.length; i++) {
            item = buyItems[i];
            const divWithItem = document.createElement('div');
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Delete order';
            divWithItem.innerHTML += `You bought ${item.name} at ${item.date}`;
            divWithItem.appendChild(closeBtn);
            itemInOrderCard.appendChild(divWithItem);
            itemInOrderCard.hidden = false;
            const divInfo = document.createElement('div');
            divInfo.innerHTML = `The price is ${item.price}$ <br> Decription: ${item.description}`;
            divWithItem.addEventListener('click', showOrderDetails);
            function showOrderDetails() {
                divWithItem.appendChild(divInfo);
            };
            closeBtn.addEventListener('click', removeItem);
            function removeItem() {
                divWithItem.remove();
                buyItems[i].delete = true; 
                buyItems.splice(i, 1);
                localStorage.setItem('buyProducts', JSON.stringify(buyItems));
            };
        };
    }
    document.querySelector('.back').addEventListener('click', backToItems);
    function backToItems() {
        const divWithItem = document.querySelector('.attention');
        divWithItem.innerHTML = '';
        details.hidden = false;
        products.hidden = false;
        category.hidden = false;
        itemInOrderCard.hidden = true;
        function hideBackButton() {
            document.querySelector('.back').hidden = true;
        };
        setTimeout(hideBackButton, 100);
        document.querySelector('.my_orders').hidden = false;
    };
};