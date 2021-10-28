import { Router } from 'express';
import { getAll, getById, create } from '../controllers/profile';

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const profiles = await getAll();
    res.send(profiles); 
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const profile = await getById(req.params.id);
    res.send(profile);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const profile = await create(req.body);
    res.send(profile);
  } catch (error) {
    next(error);
  }
});

export default router;
