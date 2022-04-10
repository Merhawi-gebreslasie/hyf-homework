const express = require("express");
const router = express.Router();

const allReviews = require("./../data/reviews.json");

const reviews = async (request, response) => {
  try {
    return response.json(allReviews);
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};

const reviewById = async (request, response) => {
  try {
    const id = Number(request.params.id);

    
    if (isNaN(id)) {
      return response
      .status(400)
      .json({ error: `Id  ${request.params.id}  is not a number` });
    }
    
    const singleReview = allReviews.find((review) => review.id === id);
    if (!singleReview) {
      return response.status(400).json({ error: `Id  ${id}  does not exist` });
    }
    response.json(singleReview);
    return;
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};

router.get("/", reviews);
router.get("/:id", reviewById);

module.exports = router;
