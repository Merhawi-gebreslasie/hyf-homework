const express = require("express");

const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    if (meals.length > 0) {
      response.json(meals);
      return;
    }

    const { maxPrice, title, createdAfter, limit } = unpackParams(request);

    const mealsBelowMaxPrice = meals.filter((meal) => meal.price < maxPrice);

    const mealsPartiallyMatchedTitles = mealsBelowMaxPrice.filter((meal) =>
      meal.title.toLocaleLowerCase().includes(title)
    );

    const mealsForSearch = mealsPartiallyMatchedTitles.filter(
      (meal) => Date.parse(meal.createdAt) > Date.parse(createdAfter)
    );
    const newMeals = mealsForSearch.slice(0, limit);
    response.json(newMeals);
  } catch (error) {
    console.log(error);
    response.status(400).send("Internal server error");
  }
});

function unpackParams(request) {
  const sentParams = {};

  if (request.query.maxPrice) {
    const maxPrice = parseInt(request.query.maxPrice);
    if (isNaN(maxPrice) || maxPrice < 1) {
      throw new Error("maxPrice param must be a positive number");
    }
    sentParams["maxPrice"] = maxPrice;
  }

  if (request.query.limit) {
    const limit = parseInt(request.query.limit);
    if (isNaN(limit) || limit < 1) {
      throw new Error("limit param must be a positive number");
    }
    sentParams["limit"] = limit;
  }

  if (request.query.createdAfter) {
    const createdAfter = Date.parse(request.query.createdAfter);
    if (isNaN(createdAfter)) {
      throw new Error(
        "createdAfter param must be a valid date in format YYYY-MM-DD"
      );
    }
    sentParams["createdAfter"] = createdAfter;
  }

  if (request.query.title) {
    sentParams["title"] = title;
  }
  return sentParams;
  
}

router.get("/:id", async (request, response) => {
  try {
    const id = Number(request.params.id);

    if (isNaN(id)) {
      response
        .status(400)
        .json({ error: `Id ${request.params.id}  is not a number` });
      return;
    }
    const singleMeal = meals.find((meal) => meal.id === id);

    response.json(singleMeal);
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
});
module.exports = router;
