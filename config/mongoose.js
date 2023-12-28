const mongoose = require('mongoose');

// method to connect to db
async function main(){
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI);
        module.exports = db;
        console.log('**** MongoDB Connected ****')
    }
    catch(err){
        console.log("****Error in connecting to db ----> ", err);
    }
}

main();
