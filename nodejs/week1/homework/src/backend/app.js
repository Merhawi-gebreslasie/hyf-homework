const express = require("express");
const app = express();

// import data here

const meals = require("./data/meals");
const reviews = require("./data/reviews.json");
const reservations = require("./data/reservations.json");

// this is where you will be adding your routes

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const mealsWithReviews = meals.map((meal) => {
  const {id,maxNumberOfGuests,title,description,price,createdAt}=meal;
  return {
    id,maxNumberOfGuests,title,description,
    time: 12 + meal.id,
    address: "Vestagade " + meal.id,
    price,
    reviews: reviews.filter((review) => review.mealId === meal.id),
    createdAt,
  };
  });
  console.log(mealsWithReviews);

const largeMeals = mealsWithReviews.filter(
  (largeMeal) => largeMeal.maxNumberOfGuests > 7
  );

const cheapMeals = mealsWithReviews.filter(
   (meal) => (meal.price / meal.maxNumberOfGuests) < 15
);

app.get("/", async (request, response) => {
    response.send("Meal Sharing Web App");
  });

app.get("/meals", async (request, response) => {
  response.json( mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.json(cheapMeals);
});

app.get("/large-meals", async (request, response) => {
  response.json(largeMeals);
});

app.get("/meal", async (request, response) => {
  response.json(randomElement(mealsWithReviews));
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  response.json(randomElement(reservations));
});

module.exports = app;