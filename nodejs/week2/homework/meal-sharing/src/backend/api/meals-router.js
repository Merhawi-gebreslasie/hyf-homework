const express = require("express");
const router = express.Router();

const allMeals = require("./../data/meals.json");

const meals = async (request, response) => {
 try{

   response.(allMeals)
   return
 }
catch(error){
  console.log(error);
  response.status(404).json({err:'Something went wrong'})
}
 };

const meal = async (request, response) => {
  try {
    const id = Number(request.params.id);

    const singleMeal = allMeals.find((meal) => meal.id === id);
    if (isNaN(id)) {
      response
        .status(400)
        .json({ error: `Id ${request.params.id}  is not a number` });
      return;
    }
    
    response.json(singleMeal);
    return;
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};


const mealsQuery = async (request, response) => {
  try {
    if ("maxPrice" in request.query) {
      const maxPrice = parseFloat(request.query.maxPrice);

      const cheaperMeals = allMeals.filter((meal) => meal.price < maxPrice);
      if (isNaN(maxPrice)) {
        response.status(400).json({ msg: "Not parsable" });
        return;
      }

      response.json(cheaperMeals);
      return;
    }

    if ("title" in request.query) {
      const title = request.query.title.toLowerCase();
      const partiallyMatch = allMeals.filter((meal) =>
        meal.title.toLocaleLowerCase().includes(title)
      );
      response.json(partiallyMatch);
      return;
    }
    if ("createdAfter" in request.query) {
      const createdAfter = request.query.createdAfter;
      if (!Date.parse(createdAfter)) {
        response.status(400).json({ err: "Date not parsable" });
        return;
      }

      const mealsCreatedAfter = allMeals.filter(
        (meal) => Date.parse(meal.createdAt) >  Date.parse(createdAfter)
      );
      response.json(mealsCreatedAfter);
      return;
    }
    if ("limit" in request.query) {
      const limit = parseInt(request.query.limit);
      if (isNaN(limit)) {
        response.status(400).end();
        return;
      }
      const limitedMeals = allMeals.slice(0, limit);
      response.json(limitedMeals);
      return;
    }
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};

router.get("/:id", meal);
router.get("/", mealsQuery);
router.get("/", meals);

module.exports = router;
