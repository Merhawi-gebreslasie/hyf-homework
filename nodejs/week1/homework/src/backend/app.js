const express = require("express");
const app = express();

// import data here

const meals = require("./data/meals");
const reviews = require("./data/reviews.json");
const reservations = require("./data/reservations.json");

// this is where you will be adding your routes


const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

const mealsWithReviews = meals.map((meal) => {
  return {
    id: meal.id,
    maxNumberOfGuests: meal.maxNumberOfGuests,
    title: meal.title,
    description: meal.description,
    time: 12 + meal.id,
    address: "asd " + meal.id,
    price: meal.price,
    reviews: reviews.filter((review) => review.mealId === meal.id),
    createdAt: meal.createdAt,
  };
});
console.log(mealsWithReviews);

app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  const result = mealsWithReviews;
  response.send(result);
});

app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReviews.filter(
    (meal) => meal.price / meal.maxNumberOfGuests < 15
  );
  response.send(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  const largeMeals = mealsWithReviews.filter(
    (largeMeal) => largeMeal.maxNumberOfGuests > 7
  );
  response.send(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.send(random(mealsWithReviews));
});

app.get("/reservations", async (request, response) => {
  response.send(reservations);
});

app.get("/reservation", async (request, response) => {
  response.send(random(reservations));
});

module.exports = app;
