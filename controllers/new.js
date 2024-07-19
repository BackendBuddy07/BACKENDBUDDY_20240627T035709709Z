// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const New = require('../models/newSchema');

// CRUD operations for new
// Create Controller 
const createNew = async (req, res) => { 
    const { userfieldName } = req.body;
    try {
        const new = await New.create({ userfieldName }) 
        await new.save();
        res.status(201).json(new);
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
const updateNew = async (req, res) => { 
    const _id=req.params.id;
    const { userfieldName } = req.body;
    try {
        const new = await New.findByIdAndUpdate( _id, { userfieldName },{new:true}) 
        if (!new) {
            return res.status(404).send('new not found');
        }
        await new.save();
        res.status(201).json(new);
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
const deleteNew = async (req, res) => { 
    const _id=req.params.id;
    try {
        const new = await New.findById(_id)
        if (!new) {
            return res.status(404).send('new not found');
        }
        await New.deleteOne({_id: _id})
        await new.save();
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
const getNew = async (req, res) => { 
    const _id=req.params.id;
    try {
        const new = await New.findById(_id)
        if (!new) {
            return res.status(404).send('new not found');
        }
        res.status(201).json(new);
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
const getAllNew = async (req, res) => { 
    try {
        const new = await New.find({})
        if (!new) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(new);
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
    createNew,
    updateNew,
    deleteNew,
    getNew,
    getAllNew
}