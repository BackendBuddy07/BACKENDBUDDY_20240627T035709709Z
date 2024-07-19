// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Ex = require('../models/exSchema');

// CRUD operations for ex
// Create Controller 
const createEx = async (req, res) => { 
    const { ample } = req.body;
    try {
        const ex = await Ex.create({ ample }) 
        await ex.save();
        res.status(201).json(ex);
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
const updateEx = async (req, res) => { 
    const _id=req.params.id;
    const { ample } = req.body;
    try {
        const ex = await Ex.findByIdAndUpdate( _id, { ample },{new:true}) 
        if (!ex) {
            return res.status(404).send('ex not found');
        }
        await ex.save();
        res.status(201).json(ex);
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
const deleteEx = async (req, res) => { 
    const _id=req.params.id;
    try {
        const ex = await Ex.findById(_id)
        if (!ex) {
            return res.status(404).send('ex not found');
        }
        await Ex.deleteOne({_id: _id})
        await ex.save();
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
const getEx = async (req, res) => { 
    const _id=req.params.id;
    try {
        const ex = await Ex.findById(_id)
        if (!ex) {
            return res.status(404).send('ex not found');
        }
        res.status(201).json(ex);
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
const getAllEx = async (req, res) => { 
    try {
        const ex = await Ex.find({})
        if (!ex) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(ex);
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
    createEx,
    updateEx,
    deleteEx,
    getEx,
    getAllEx
}