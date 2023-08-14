const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //reference to the User model in our database
    },
    orderList: {
        type: Schema.Types.Mixed, // Allows storing complex data types
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("Orders", OrdersSchema)