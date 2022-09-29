const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MOGODB_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('connected to database')
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB