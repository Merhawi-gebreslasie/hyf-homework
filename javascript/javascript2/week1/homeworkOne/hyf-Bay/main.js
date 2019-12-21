
console.log('Script loaded');
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const ul = document.getElementById('list');
// function renderProducts(products) {
//     for (let i = 0; i < products.length; i++) {
//         const produtName = products[i];
//         const li = document.createElement('li');
//         li.innerHTML = produtName;
//         ul.appendChild(li);
//     }



// }
// renderProducts(testProductNames);


let products2 = [{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: ['denmark', 'germany'],
},
{
    id: 23555555,
    name: 'Mobile phone',
    price: 2000,
    rating: 3.8,
    shipsTo: ['norway', 'sweden'],
},
{
    id: 23988080,
    name: 'Wallet',
    price: 500,
    rating: 5.1,
    shipsTo: ['germen', 'iceland'],
}
];
// // showing more details to the user
// function getAvailableProducts() {

//     for (let i = 0; i < products2.length; i++) {
//         let product = products2[i];
//         const li = document.createElement('li');
//         li.innerHTML = product.name + '|' + product.price + '|' + 
//         product.rating + '|' +product.shipsTo;        }
//         ul.appendChild(li);

//     }
//     return products2;
// }
// console.log(getAvailableProducts());
function getAvailableProducts(){
    for(let i=0; i<products2.length;i++){
        let product = products2[i];
                const li = document.createElement('li');
                li.innerHTML = product.name + '|' + product.price + '|' + 
                product.rating ;
                const innerUl=document.createElement('ul');
                for(let j=0;j<product.shipsTo.length;j++){
                    const ship_to=product.shipsTo[j];
                   
                    const innerList=document.createElement('li');
                    
                    
                    console.log('here'+ship_to);
                    
                           innerList.innerHTML=ship_to;
                           li.appendChild(innerUl);
                        
                           innerUl.appendChild(innerList);
                           
                    
                }
                ul.appendChild(li);
                   
                   
                
                }
                return products2;
            }
            console.log(getAvailableProducts());

