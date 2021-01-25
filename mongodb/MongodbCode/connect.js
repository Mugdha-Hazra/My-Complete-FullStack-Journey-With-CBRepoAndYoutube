const {MongoClient}=require('mongodb');

const MONGO_URL='mongodb://localhost:27017';
const DB_NAME='tododb';


//ASYNC IIFE
(async()=>{

    const client=await MongoClient.connect(MONGO_URL);
    const tododb=await client.db(DB_NAME);  //create if not already there

    console.log(tododb);
    console.log("Connected to the db");
})();

