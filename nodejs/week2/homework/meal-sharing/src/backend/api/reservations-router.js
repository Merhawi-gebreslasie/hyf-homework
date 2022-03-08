const express = require("express");
const router = express.Router();

const allReservations = require("./../data/reservations.json");

const reservations = async (request, response) => {
  try {
    return response.json(allReservations);
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};

const reservation = async (request, response) => {
  try {
    const id = Number(request.params.id);
    const singleReservation = allReservations.find(
      (reservation) => reservation.id === id
    );

    if (isNaN(id)) {
      return response
        .status(400)
        .json({ error: `Id ${request.params.id}  is not a number` });
    }
    if (!singleReservation) {
      return response.status(400).json({ error: `Id  ${id} ,not found` });
    }
    response.json(singleReservation);
    return;
  } catch (error) {
    console.log(error);
    response.status(404).json({ msq: "something went wrong" });
  }
};

router.get("/", reservations);
router.get("/:id", reservation);

module.exports = router;
