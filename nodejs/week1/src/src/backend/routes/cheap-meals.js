
const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');


module.exports = function () {
        const result = [];
        for (let i = 0; i < meals.length; i++) {
            for (let j = 0; j < reviews.length; i++) {
                if (meals.price <= 50 && meals[i].id === reviews[j].mealId) {
                    result.push(meals[i])
                    result.push(reviews[j]);
                    console.log(result);

                }
                else {
                    console.log(result);

                }
            }
        }
        return result;
    }

   
