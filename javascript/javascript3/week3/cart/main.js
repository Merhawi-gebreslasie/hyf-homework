class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here

        for (let i = 0; i < this.products.length; i++) {
            if (this.prodcuts[i].name === product.name) {
                this.products.sprlice(i, 1);
                return;
            }
        }



    }

    searchProduct(productName) {
        // Implement functionality here
        const search = [];
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].name === productName) {
                search.push(poducts[i]);

            }
         
        }
        return search;
    }


    getTotal() {
        // Implement functionality here
        const sum=0;
        for (let i = 0; i < this.prodcuts.length; i++) {
            sum+=this.price;
    
        }
        return sum;
    }

    renderProducts() {
        // Implement functionality here
        const ul = document.getElementById('ul');
        for (let i = 0; i < this.prodcuts.length; i++) {
            const product = this.products[i];
            const li = document.createElement('li');
            li.innerText = product;
            ul.appendChild(li);
        }
        return;
    }

    getUser() {
        // Implement functionality here
        return new Promise(resolve => {

            fetch('https://jsonplaceholder.typicode.com/users/1')
                .then(res => res.json())
                .then(res => {
                    resolve(res);
                })
        }).then(() => console.log(res));
    }
}

// Not yet finished 