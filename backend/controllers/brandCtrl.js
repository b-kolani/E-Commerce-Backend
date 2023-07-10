import Brand from '../models/brandModel.js';
import asyncHandler from 'express-async-handler';
import { validateMongoDbId } from '../utils/validateMongodbid.js';

export const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error);
    }
});

export const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(id,
            req.body,
            { new: true });
        res.json(updatedBrand);
    } catch (error) {
        throw new Error(error);
    }
});

export const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedBrand = await Brand.findByIdAndDelete(id);
        res.json(deletedBrand);
    } catch (error) {
        throw new Error(error);
    }
});

export const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaBrand = await Brand.findById(id);
        res.json(getaBrand);
    } catch (error) {
        throw new Error(error);
    }
});

export const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const getBrands = await Brand.find();
        res.json(getBrands);
    } catch (error) {
        throw new Error(error);
    }
});