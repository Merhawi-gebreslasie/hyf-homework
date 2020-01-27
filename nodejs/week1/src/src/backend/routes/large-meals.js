const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
module.exports=function(){
     const result = [];
    for (let i = 0; i < meals.length; i++) {
        for (let j = 0; j < reviews.length; j++) {

            if (meals[i].maxNumberOfGuests > 5 && meals[i].id === reviews[j].mealId) {

                result.push(meals[i])
                result.push(reviews[j])

                // result.push('and its reviewis',reviews[j])
                console.log(result);

            } else {

                console.log(result);
            }
        }
    }
   return result;
}