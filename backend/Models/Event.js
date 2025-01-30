const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    eventName : String,
    eventDate : Date,
    location : String,
    description : String,
    private : Boolean,
    createdBy : String,
});


const EventModul = mongoose.model('Event', eventSchema);


module.exports = EventModul;