// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Dockerschema2 = require('../models/dockerschema2Schema');

// CRUD operations for dockerschema2
// Create Controller 
const createDockerschema2 = async (req, res) => { 
    const { userfieldName, password, documents } = req.body;
    try {
        const dockerschema2 = await Dockerschema2.create({ userfieldName, password, documents }) 
        await dockerschema2.save();
        res.status(201).json(dockerschema2);
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
const updateDockerschema2 = async (req, res) => { 
    const _id=req.params.id;
    const { userfieldName, password, documents } = req.body;
    try {
        const dockerschema2 = await Dockerschema2.findByIdAndUpdate( _id, { userfieldName, password, documents },{new:true}) 
        if (!dockerschema2) {
            return res.status(404).send('dockerschema2 not found');
        }
        await dockerschema2.save();
        res.status(201).json(dockerschema2);
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
const deleteDockerschema2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const dockerschema2 = await Dockerschema2.findById(_id)
        if (!dockerschema2) {
            return res.status(404).send('dockerschema2 not found');
        }
        await Dockerschema2.deleteOne({_id: _id})
        await dockerschema2.save();
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
const getDockerschema2 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const dockerschema2 = await Dockerschema2.findById(_id)
        if (!dockerschema2) {
            return res.status(404).send('dockerschema2 not found');
        }
        res.status(201).json(dockerschema2);
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
const getAllDockerschema2 = async (req, res) => { 
    try {
        const dockerschema2 = await Dockerschema2.find({})
        if (!dockerschema2) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(dockerschema2);
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
    createDockerschema2,
    updateDockerschema2,
    deleteDockerschema2,
    getDockerschema2,
    getAllDockerschema2
}