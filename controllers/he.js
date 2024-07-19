// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const He = require('../models/heSchema');

// CRUD operations for he
// Create Controller 
const createHe = async (req, res) => { 
    const { him } = req.body;
    try {
        const he = await He.create({ him }) 
        await he.save();
        res.status(201).json(he);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateHe = async (req, res) => { 
    const _id=req.params.id;
    const { him } = req.body;
    try {
        const he = await He.findByIdAndUpdate( _id, { him },{new:true}) 
        if (!he) {
            return res.status(404).send('he not found');
        }
        await he.save();
        res.status(201).json(he);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteHe = async (req, res) => { 
    const _id=req.params.id;
    try {
        const he = await He.findById(_id)
        if (!he) {
            return res.status(404).send('he not found');
        }
        await He.deleteOne({_id: _id})
        await he.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getHe = async (req, res) => { 
    const _id=req.params.id;
    try {
        const he = await He.findById(_id)
        if (!he) {
            return res.status(404).send('he not found');
        }
        res.status(201).json(he);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllHe = async (req, res) => { 
    try {
        const he = await He.find({})
        if (!he) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(he);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createHe,
    updateHe,
    deleteHe,
    getHe,
    getAllHe
}