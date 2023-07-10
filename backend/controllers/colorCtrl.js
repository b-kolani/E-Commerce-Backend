import Color from '../models/colorModel.js';
import asyncHandler from 'express-async-handler';
import { validateMongoDbId } from '../utils/validateMongodbid.js';

export const createColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error);
    }
});

export const updateColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updatedColor = await Color.findByIdAndUpdate(id,
            req.body,
            { new: true });
        res.json(updatedColor);
    } catch (error) {
        throw new Error(error);
    }
});

export const deleteColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedColor = await Color.findByIdAndDelete(id);
        res.json(deletedColor);
    } catch (error) {
        throw new Error(error);
    }
});

export const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaColor = await Color.findById(id);
        res.json(getaColor);
    } catch (error) {
        throw new Error(error);
    }
});

export const getAllColors = asyncHandler(async (req, res) => {
    try {
        const getColors = await Color.find();
        res.json(getColors);
    } catch (error) {
        throw new Error(error);
    }
});