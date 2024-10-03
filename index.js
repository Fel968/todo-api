//require or import keyword is used to grab packages installed
// to use import, put "type: module" in json package

import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo_routes.js';
import userRouter from './routes/user_routes.js';

// connect to database using mongoose package
await mongoose.connect(process.env.MONGO_URI); 

//create an express app
const app = express();

// use middlewares. read on middleware. middleware should always come before route
app.use(express.json());

// use router
    // this method can cause a bug
         // app.use([todoRouter, userRouter]);
app.use(todoRouter);
app.use(userRouter);

// Define routes
     // get,post,delete: read on when to use
        // app.get('/hello'); specify what should happen with a function
app.get('/hello', (req, res, next) => {
    console.log(req.headers);
    res.json('You visited the hello endpoint!'); //res.json should be done only once
});

app.get('/goodbye', (req, res, next) => { //"next" can be ignored, however, it's crucial for error handling
    console.log(req.query); //why req.query here tho
    res.json('Same to you')
});


//listen for incoming requests
// give the function a port to listen to but when using a hosting provider, the port is provided
app.listen(3000,  ()=> {
    console.log('App is listening on port 3000!')
});