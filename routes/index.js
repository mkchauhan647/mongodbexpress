const express = require('express')
const router = express.Router();

const test1 = require('./test1')
const test2 = require('./test2')

const {MongoClient} = require('mongodb')
router.use('/',test1)
router.use('/',test2)
// let client = new MongoClient();
let client;
router.get('/addToDB',async (req,res,next)=>{
    // console.log("req",req.params)
    // console.log("req",req.body)
    // console.log("req",req.baseUrl)
    // console.log("req",req.url)
    // console.log("req",req.query)


    try{

        // if(client){
        //     console.log("Already connected to database.")
        // }
        // else{
            
            client = await MongoClient.connect('mongodb+srv://mroot:Bw8dtpsgmWcVpEEk@cluster0.rwfgrbn.mongodb.net');
            // await client.connect();
           const  db = client.db('sample_mflix')
            const collection =  db.collection('users');
        //    const inserted = await collection.insertOne({
        //         hello:"my name is manoj",
        //         nohello:"again my name is manoj"
        //     })
            // const result = await collection.find({},{email:1,_id:0}).toArray();
            const result = await collection.aggregate([{$limit:10}]).toArray();
            console.log("Connected to db successfully !!!")
            // console.log("db",db)
            // console.log("Data is inserted",inserted)
            console.log(result)

            res.send(result)


        // console.log("db",client)
    // console.log("db:",db)
    }
    catch(error){
        console.log("This is error",error)
    }



})

module.exports = router;