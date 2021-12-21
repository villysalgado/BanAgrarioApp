const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: String,
    identificacion: {
        type: 'number',
        required: true,
        unique: true
    },
    valIngresos: 'number', 
    valEgresos: 'number'
},{
    timestamps: true
});

module.exports = model('User', userSchema);