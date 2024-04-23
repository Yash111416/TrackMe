import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { extractCurrency } from "../utils";

const productSchema = new mongoose.Schema({
    url: {type: String, required: true, unique: true},
    currency: {type: String, required: true},
    image: {type: String, required: true},
    title: {type: String, required: true},
    currentPrice: {type: Number, required: true},
    originalPrice: {type: Number, required: true},
    priceHistory: [
      {
        price: {type: Number, required: true},
        date: {type: Date, default: Date.now}
    },
    ],
    lowestPrice: {type: Number, required: true},
    highestPrice: {type:Number},
    averagePrice: {type:Number},
    discountRate: {type:Number},
    description: {type:String},
    category: {type:String},
    reviews: {type:Number},
    isOutOfStock: {type: Boolean, default:false},
    users: [
       {email: {type: String, required: true}} 
    ], default: [],
}, {timestamps: true});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;