const express = require('express');
const router = express.Router();

// const mealsRouter = require('../data/meals.json');
// const reviewRouter = require('../data/reviews.json');

router.get('/large-meals', (req, res) => {

    const mealsRouter = req.app.get('mealsRouter');
    const reviewRouter = req.app.get('reviewRouter')
    
    for (let i = 0; i < mealsRouter.length; i++) {
        const answer = mealsRouter[i];

        if (answer.maxNumberOfGuests > 6) {
           res.send(answer)
        }

    }
    
});
module.exports = router;