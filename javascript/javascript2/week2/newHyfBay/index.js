const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

const inputName = document.querySelector(".search #myInputName");
const inputPrice = document.querySelector(".table-view-control #myInputPrice");
const sortBy = document.querySelector(".sort select");
/*function appendLi(label) {
  const createLi = document.createElement("li");
  createLi.innerText = label;
  productUL.appendChild(createLi);
}*/
function searchProducts(productName, maxPrice, sort) {
    productsUl.innerHTML = "";
  let searchProduct = products.filter((product) =>
    productName
      ? product.name.toLowerCase().includes(productName.toLowerCase())
      : true
  );
  if (maxPrice) {

    searchProduct = products.filter((product) => product.price<=maxPrice);
    console.log(maxPrice);
  }
  if (sort) {
    switch (sort) {
      case "name":
        searchProduct.sort((a, z) => {
          let nameA = a.name.toLowerCase();
          let nameZ = z.name.toLowerCase();
          if (nameA < nameZ) {
            return -1;
          } 
          if(nameA>nameZ){
            return 1;
        
          }
        });
        break;
      case "expensive":
        searchProduct.sort((lower, higher) => higher.price - lower.price);

        break;
      case "cheap":
        searchProduct.sort((lower,higher) => lower.price - higher.price);
        break;
    }
  }

  renderProducts(searchProduct);
}


function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}


inputName.addEventListener("input", (event) => {
    searchProducts(event.target.value);
});
//
inputPrice.addEventListener("input", () => {
    
  searchProducts(inputName.value,inputPrice.value);
});
sortBy.addEventListener("change", () => {
    let selectSort=sortBy.options[sortBy.selectedIndex].value
    searchProducts(inputName.value, inputPrice.value, selectSort);
});

renderProducts(products);