const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err)=>{
    if(!err)
    console.log('MongoDB is connected successfully');

    else
    console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

