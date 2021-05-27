const mongoose = require('mongoose');

const initializeConnection = () => {
    const connection = process.env.MONGODB_CONNECTION;
    mongoose.connect(connection, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        .then(() => console.log('Database Connected Successfully'))
        .catch((err) => console.log(err));
}

module.exports = initializeConnection;
