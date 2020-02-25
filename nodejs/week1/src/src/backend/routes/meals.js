// const express=require('express');
// // const router=express()
const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
// const reservations=require('./data/reservations.json')
module.exports=function(){
    const result=[]
    for (let i = 0; i < reviews.length; i++) {
       for(let j=0;j<reviews.length;j++){
        if (meals[i].id === reviews[j].mealId) {

             result.push(meals[i])
             result.push(reviews[i])
            console.log(result) ;
        }
        else {
            
             result;
             console.log(result)

        }

    }
}
return result
};

