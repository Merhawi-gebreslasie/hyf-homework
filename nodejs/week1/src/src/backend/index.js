const express = require('express');
const app = express();
// const meals = require('./data/meals.json');
// const reviews = require('./data/reviews.json');
// const reservations=require('./data/reservations.json')
//  writing the functionality for the routes inside index.js
// app.get('/meals/', (req, res) => {
//     for (let i = 0; i < reviews.length; i++) {
//         if (meals.id === reviews.mealId) {

//             const result = meals.push(reviews[i])
//             return result;
//         }
//         else {
//             const result = [];
//             return result;
//         }

//     }
//     res.send(result);
// })
// app.get('/cheap-meals', (req, res) => {
//     const result = [];
//     for (let i = 0; i < meals.length; i++) {
//         for (let j = 0; j < reviews.length; i++) {
//             if (meals[i].price <= 50 && meals[i].id === reviews[j].mealId) {
//                 result.push(meals[i])
//                 result.push(reviews[j]);
//                 console.log(result);

//             }
//             else {
//                 console.log(result);

//             }
//         }
//     }
//     res.send(result)
// })

// app.get('/large-meals', (req, res) => {
//     const result = [];
//     for (let i = 0; i < meals.length; i++) {
//         for (let j = 0; j < reviews.length; j++) {

//             if (meals[i].maxNumberOfGuests > 5 && meals[i].id === reviews[j].mealId) {

//                 result.push(meals[i])
//                 result.push(reviews[j])

//                 // result.push('and its reviewis',reviews[j])
//                 console.log(result);

//             } else {

//                 console.log(result);
//             }
//         }
//     }
//     res.send(result);
// })
// app.get('/meal', (req, res) => {
//     const result = [];
//     const randomindex = Math.floor(Math.random() * meals.length)
//     for (let i = 0; i < meals.length; i++) {
//         for (let j = 0; j < reviews.length; j++) {

//             if (meals[i].id === reviews[j].mealId) {
                
//                 result.push(meals[i])
//                 result.push(reviews[j])
                
//                 // result.push('and its reviewis',reviews[j])
//                 console.log(result);

//             } else {

//                 console.log(result);
//             }
//         }
//     }
//     res.send(result[randomindex]);
// });
// app.get('/reservations',(req,res)=>{
// res.send(reservations);
// })
// app.get('/reservation',(req,res)=>{
// const randomIndex=Math.floor(Math.random()*reservations.length);
// res.send(reservations[randomIndex]);
// })
const mealsRouter=require('./routes/meals.js')
app.get('/meals',(req,res)=>{
    res.send(mealsRouter())
});
const cheapMealRouter=require('./routes/cheap-meals.js')
app.get('/cheap-meals',(req,res)=>{
    res.send(cheapMealRouter());
});
const largeMealsRouter=require('./routes/large-meals.js')
app.get('/large-meals',(req,res)=>{
    res.send(largeMealsRouter());
});
const mealRouter=require('./routes/meal.js')
app.get('/meal',(req,res)=>{
    res.send(mealRouter());
});

const reservationsRouter=require('./routes/reservations.js')
app.get('/reservations',(req,res)=>{
    res.send(reservationsRouter());
});
const reservationRouter=require('./routes/reservation.js')
app.get('/reservation',(req,res)=>{
    res.send(reservationRouter());
});

app.listen(3000);
