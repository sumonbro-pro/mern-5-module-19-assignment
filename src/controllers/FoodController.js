import FoodModel from '../models/FoodModel.js';

const createFood =async (req, res) => {
    try {
        const {name, code, img, category, qty, price} = req.body;
        const newFood = {name, code, img, category, qty, price};
        const result = await FoodModel.create(newFood);
        return res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
}

const readFood =async (req, res) => {
    try {
        const {name, code, img, category, qty, price} = req.body;
        // const newFood = {name, code, img, category, qty, price};
        const result = await FoodModel.find();
        return res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
}

const updateFood =async (req, res) => {
    try {
        const {id} = req.params;
        const {name, code, img, category, qty, price} = req.body;
        const updateTerm = {name, code, img, category, qty, price};
        const result = await FoodModel.updateOne({_id:id}, updateTerm);
        return res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
}

const deleteFood =async (req, res) => {
    try {
        const id = req.params.id;
        const result = await FoodModel.deleteOne({_id:id});
        return res.json(result);
    } catch (err) {
        res.json({error: err.message});
    }
}

export {createFood, readFood, updateFood, deleteFood };