
const productUL = document.querySelector('.products ul');
const input = document.querySelector('.search input');
const select = document.querySelector('.country select');
const sortselect = document.querySelector('.sort select');
const cartUL = document.querySelector('.cart ul');
const totalSpan=document.querySelector('.total span');
function appendingLi(label, rowUL) {
    const nameLI = document.createElement('li');
    nameLI.innerText = label;
    rowUL.appendChild(nameLI);

}
const productsInCart = [];

function addProductToCart(product) {
    productsInCart.push(product);

    renderCart(productsInCart);
}

function renderCart(cart) {
    cartUL.innerHTML = '';
    let sum=0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const rowLI = document.createElement('li');
        cartUL.appendChild(rowLI);

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.innerHTML = product.name;
        rowLI.appendChild(nameDiv);

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerHTML = product.price;
        rowLI.appendChild(priceDiv);
        sum+=product.price;
        // for removing cart
        rowLI.addEventListener('click',()=>{
            productsInCart.splice(i,1);
            renderCart(productsInCart);
        });
    }
    // total price
    totalSpan.innerHTML=sum;
}
function renderProducts(products) {
    productUL.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const rowLI = document.createElement('li');
        const rowUL = document.createElement('ul')
        productUL.appendChild(rowLI);
        rowLI.appendChild(rowUL);
        // for adding cart
        rowLI.addEventListener('click', () => {
            addProductToCart(product);
        });
        
        appendingLi(product.name, rowUL);
        appendingLi(product.price, rowUL);
        appendingLi(product.rating, rowUL);
        appendingLi(product.id, rowUL);
        appendingLi(product.shipsTo, rowUL);

        const shipsToRowLi = document.createElement('li');
        rowUL.appendChild(shipsToRowLi);

        const shipsToRowUL = document.createElement('ul')
        shipsToRowLi.appendChild(shipsToRowUL);
        product.shipsTo.forEach(country => {
            appendingLi(country, shipsToRowUL);
        });

    }

}
const products = getAvailableProducts();
productSearching('', '', 'name');

function productSearching(productName, country, sort) {
    const searchProduct = products
        .filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))
         .filter(y => {
            if (country) {
                return y.shipsTo.map(d => d.toLowerCase()).includes(country.toLowerCase());
            } else {
                return true;
            }
        });

    if (sort) {
        switch (sort) {
            case 'cheap':
                searchProduct.sort((a, b) => a.price - b.price);
                break;
            case 'expensive':
                searchProduct.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                searchProduct.sort((a, b) => {
                    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });

        }
    }
    renderProducts(searchProduct);
}
input.addEventListener('input', () => {
    productSearching(input.value, select.value);
});
select.addEventListener('change', () => {
    productSearching(input.value, select.value);
});
sortselect.addEventListener('change', () => {
    productSearching(input.value, select.value, sortselect.value);
})