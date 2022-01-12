console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


let listOfProducts=document.querySelector('#productList')

function appendLi(label){

    let list=document.createElement('li')
    list.innerHTML=label;
    listOfProducts.appendChild(list);

    }

function renderProducts(products) {

    for(let i=0;i<products.length;i++){
        let product=products[i];
    appendLi(product.name);
    appendLi(product.price);
    appendLi(product.rating);
    }
    }
  
  renderProducts(products)
