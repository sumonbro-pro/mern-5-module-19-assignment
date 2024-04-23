import mongoose from "mongoose";
const FoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: Number, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
}, {timestamps: true, versionKey: false });

const FoodModel = mongoose.model('foods', FoodSchema);

export default FoodModel;