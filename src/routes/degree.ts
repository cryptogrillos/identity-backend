import { Router } from "express";
import { getById, create, remove, update } from "../controllers/degree";

const router = Router();

router.get("/:id", async (req, res, next) => {
  try {
    const degree = await getById(req.params.id);
    res.send(degree);
  } catch (error) {
    next(error);
  }
});

router.post("/:profileId", async (req, res, next) => {
  try {
    const degree = await create(req.params.profileId, req.body);
    res.send(degree);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const degree = await update(req.params.id, req.body);
    res.send(degree);
  } catch (error) {
    next(error);
  }
});