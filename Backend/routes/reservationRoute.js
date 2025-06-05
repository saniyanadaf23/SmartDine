import express from "express";
import {
  send_reservation,
  get_reservations,
  update_reservation,
  delete_reservation,
} from "../controller/reservation.js";

const router = express.Router();

router.post("/send", send_reservation);
router.get("/", get_reservations);
router.put("/:id", update_reservation);
router.delete("/:id", delete_reservation);

export default router;