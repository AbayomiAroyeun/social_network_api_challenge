const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(express.json());


mongoose.connect('mongodb://27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
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


