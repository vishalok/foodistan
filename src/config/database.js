const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connection requested");
    mongoose.set('strictQuery', true);
    return mongoose.connect('mongodb://127.0.0.1:27017/project');

}

module.exports = {
    connect
}