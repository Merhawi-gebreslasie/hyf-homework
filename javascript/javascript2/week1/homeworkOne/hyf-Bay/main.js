// testingfuntion 
// console.log('Script loaded');
// const testProdctNames = ['Flat screen', 'Mobile phone', 'Wallet'];
// function testFunctionNames(products){
//     for(let i=0;testProdctNames.length;i++){
//         const testproduct=testProdctNames[i];
//         const productUL=document.querySelector('section.products ul');
//         const productLi=document.createElement('li');
//         productLi.innerText=testproduct;
//         productUL.appendChild(productLi);
//     }
// }
// testFunctionNames(testProdctNames);

const productUL = document.querySelector('.products ul');

function appendingLi(label, rowUL) {
    const nameLI = document.createElement('li');
    nameLI.innerText = label;
    rowUL.appendChild(nameLI);

}
function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const rowLI = document.createElement('li');
        const rowUL = document.createElement('ul')
        productUL.appendChild(rowLI);
        rowLI.appendChild(rowUL);

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
renderProducts(products);

