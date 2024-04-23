import express from 'express';
const router = express.Router();
import {createFood, readFood, updateFood, deleteFood} from '../controllers/FoodController.js';

router.post('/create-food', createFood);
router.get('/foods', readFood);
router.put('/update-food/:id', updateFood);
router.delete('/delete-food/:id', deleteFood);


export default router;