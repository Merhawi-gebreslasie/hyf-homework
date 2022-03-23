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

const reservationById = async (request, response) => {
  try {
    const id = Number(request.params.id);
    
    if (isNaN(id)) {
      return response
      .status(400)
      .json({ error: `Id ${request.params.id}  is not a number` });
    }
    const singleReservation = allReservations.find(
      (reservation) => reservation.id === id
    );
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
router.get("/:id", reservationById);

module.exports = router;
