const mongoose = require('mongoose');
// This file creates an object/model to interact with database in easy way
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

// 'Subscriber' is name of model and schema corr. to that is subscriberSchema
module.exports = mongoose.model('Subscriber', subscriberSchema);