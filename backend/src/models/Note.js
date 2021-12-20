const {Schema, model} = require('mongoose');

const noteSchema = new Schema({
    extUserName: String,
    totalCreditAmount:{
        type: 'number',
        required: true
    },
    leftCreditAmount: 'number',
    date: {
        type: Date,
        default: Date.now
    }
},{
    timestamps: true
});

module.exports = model('Note', noteSchema);