const addProduct = document.getElementById("addProduct");
const  productCurrency=document.getElementById('currency')
const addPrice = document.getElementById("addPrice");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const productHolder = document.getElementById("productHolder");
const cartHolder = document.getElementById("cart");

const url =
"https://freecurrencyapi.net/api/v2/latest?apikey=0bf92c50-7f8f-11ec-b19c-074f6dbc854a&&base_currency=DKK";

const appendLi = (label) => {
};
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
   convertToCurrency(currency) {
    let result = 0;
    const changeCurrency = currency.toUpperCase();
    const response = fetch(url)
    .then((response) => response.json())
    .then((resultResponse) => {
      const currencyNames = Object.keys(resultResponse.data);
      const currencyValue = Object.values(resultResponse.data);
      
      for (let i = 0; i < currencyNames.length; i++) {
        const currencyName = currencyNames[i];
        if (currencyName == changeCurrency) {
          result = this.price * currencyValue[i];
          const holdCurrency=document.createElement('li')
          holdCurrency.innerHTML=currencyName+' '+ result.toFixed(3)
          productCurrency.appendChild(holdCurrency)
        }
      }
    }).catch(err=>console.log('fetching went wrong');
    return response;
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  
  addProduct(product) {
    // Implement functionality here
    

    this.products.push(product);
    
    
  }
  
  removeProduct(product) {
    // Implement functionality here

    for(let i=0;i<this.products.length;i++){
      let p=this.products[i];
      
      if (p.name==product.name) {
        
        this.products.splice(i, 1);
        
        
        
        
        
        
      }
      
    } 
    
  }
  
  searchProduct(productName) {
    // Implement functionality here
    
cartHolder.innerHTML=
    const result=this.products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()))
    
    console.log(result);
    
    
  }
  
  getTotal() {
    // Implement functionality here
    const total = this.products.reduce(
      (acc, eachPrice) => (acc = acc + eachPrice.price),
      0
      );
      return total
    }
    
    renderProducts() {
      // Implement functionality here
      
      cartHolder.innerHTML=''
      this.products.forEach((product) => {
        const productLi=document.createElement('li')
        const priceLi=document.createElement('li')
        
        priceLi.innerHTML = product.price
        productLi.innerHTML = product.name
        
        cartHolder.appendChild(productLi);
        cartHolder.appendChild(priceLi);
      });
      const totalLi=document.createElement('li')
      totalLi.innerHTML='total: '+this.getTotal()
      cartHolder.appendChild(totalLi)
    }
    
  async getUser(user) {
    // Implement functionality here

    const promise = new Promise((resolve, reject) => {
      const fetchUser = fetch(user).then((res) => res.json());
      if (fetchUser) {
        resolve(fetchUser.then((res) => console.log(res)));
      } else {
        reject("fecthing went wrong");
      }
    });
    const result = await promise;
    console.log(result);
  }
}
 function displayFunction(){

   const shoppingCart = new ShoppingCart();
   const flatscreen = new Product("flat-screen", 4000);
   const salon = new Product("salon", 10000);
   const laptop = new Product("laptop", 14000);
   const book = new Product("book", 400);
   const bike = new Product("bike", 4000);
   
   const addProductAndPrice = () => {
     shoppingCart.addProduct(book);
     shoppingCart.addProduct(flatscreen);
     shoppingCart.addProduct(salon);
     shoppingCart.addProduct(laptop);
     shoppingCart.addProduct(bike);
   };
   addProductAndPrice();
   
   const removeProductAndPrice = () => {
     shoppingCart.removeProduct(laptop);
     shoppingCart.removeProduct(bike)

     
     
     
   };
   //click the ul to remove  laptop and bike 
   removeProductAndPrice()
   
   
   shoppingCart.searchProduct('salon');
   shoppingCart.searchProduct('book');
   
   
   
   shoppingCart.getTotal();
   shoppingCart.renderProducts();
   shoppingCart.getUser("https://jsonplaceholder.typicode.com/users/2");
   
   
   // Assuming dkr as default currency
   const plant = new Product("plant", 50);
   console.log(plant.convertToCurrency("usd"));
   console.log(plant.convertToCurrency("eur"));
   console.log(plant.convertToCurrency("ern"));
 }

displayFunction()
