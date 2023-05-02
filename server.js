const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');

//create model
const connectURL = 'mongodb://localhost:27017';
const client = new MongoClient(connectURL);
let db;
const PORT = 3000;
const app = express();
app.use(express.json());
app.get('/cars', async (req, res) => {
  const cars = await db.collection('carsCollection')
    .find({})
    .toArray();
  res.send(cars);
});
app.post('/cars', async (req, res) => {
  const turtleResult = await db.collection('CarsCollection')
    .insertOne(req.body);
  res.send(turtleResult);
});
client.connect()
  .then(() => {
    db = client.db('myExampleDB');
    app.listen(PORT, () => console.log('Started on port %s', PORT));
  });







// const express = require ("express");
// const mongoose = require('mongoose');
// const PORT = 3000;
         // //create a model
// mongoose.connect('mongodb://127.0.0.1:27017/myDataBase');

// const Database = mongoose.model('database', {
//     type: String,
//     color: string
    
// });


// Database.create({
// type: '',
// color: '' 
// });
// .then (new_database =>{
// console.log(new_database);

// });










// const database = new Database({

//     type: '',
//     color: '' 
// })

// database.save().then((new_database)=>{
// console.log(new_database);

// });


// appendFile.get("", (req, res)=>{
// res.sendFile()
// })


// appendFile.listen(PORT,()=>{
//     console.log("port is running on http:localhost:"+PORT)


