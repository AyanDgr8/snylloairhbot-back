// src/models/formcontact.js

import mongoose from 'mongoose';

// const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, "Name is required"] 
    },
    phone: { 
        type: Number, 
        required: [true, "Phone number is required"], 
        unique: true,
        match: /^[0-9]{10}$/ 
    },
    email: { 
        type: String, 
        required: [true, "Email is required"], 
        unique: true,
        match:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
    },
    country: { 
        type: String, 
        // required:  [true, "Country is required"] 
    },
    profession: { 
        type: String, 
        // required:   [true, "Profession is required"] 
    },
    message: { type: String, required: true },
});


const UserDetailsBookform  = mongoose.model("UserDetailsBookform", formSchema);

export  { UserDetailsBookform };