// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Him = require('../models/himSchema');

// CRUD operations for him
// Create Controller 
const createHim = async (req, res) => { 
    const { he } = req.body;
    try {
        const him = await Him.create({ he }) 
        await him.save();
        res.status(201).json(him);
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
const updateHim = async (req, res) => { 
    const _id=req.params.id;
    const { he } = req.body;
    try {
        const him = await Him.findByIdAndUpdate( _id, { he },{new:true}) 
        if (!him) {
            return res.status(404).send('him not found');
        }
        await him.save();
        res.status(201).json(him);
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
const deleteHim = async (req, res) => { 
    const _id=req.params.id;
    try {
        const him = await Him.findById(_id)
        if (!him) {
            return res.status(404).send('him not found');
        }
        await Him.deleteOne({_id: _id})
        await him.save();
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
const getHim = async (req, res) => { 
    const _id=req.params.id;
    try {
        const him = await Him.findById(_id)
        if (!him) {
            return res.status(404).send('him not found');
        }
        res.status(201).json(him);
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
const getAllHim = async (req, res) => { 
    try {
        const him = await Him.find({})
        if (!him) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(him);
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
    createHim,
    updateHim,
    deleteHim,
    getHim,
    getAllHim
}