/* This file will handle an connection logic to the MongoDB Database */

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://admin:A113355@ds235169.mlab.com:35169/todolist2020', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => {
    console.log('Connection to database sucessfully');
}).catch((e) => {
    console.log("Error while attempting to conect to Database");
    console.log(e);
})

// To prevent Depreciation warnings (From Database)
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};