const mongoose = require('mongoose');


const URI = 'mongodb+srv://d2st:Dilanbass@cluster0.fbr7t.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});