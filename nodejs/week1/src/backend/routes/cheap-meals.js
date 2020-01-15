const express=require('express');
const router=express.Router();

// const mealsRouter=require('../data/meals.json');
// const reviewRouter=require('../data/reviews.json');

router.get('/cheap-meals',(req,res)=>{
    const mealsRouter=req.app.get('mealsRouter');
    const reviewRouter=req.app.get('reviewRouter')
    var rev = [];
    for (let i = 0; i < mealsRouter.length; i++) {
        const meal = mealsRouter[i];
        for (let j = 0; j < reviewRouter.length; j++) {
            const review = reviewRouter[j]
            if (meal.id ===review.mealId && meal.price<100) {
                rev.push(meal)
                rev.push(review);

            }else{
                rev=[];
            }

        }

    }
    
    res.send(rev);
});

module.exports=router;