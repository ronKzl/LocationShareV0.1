import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


//general setup
app.use(express.json());
app.use(express.urlencoded({limit: "30mb",extended: true}));

 // To parse the incoming requests with JSON payloads

//app.use(bodyParser.json({ limit: "30mb", extended: true }));
//app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//every route inside of postRoutes will start with posts
//route will be reached by going to localHost:5000/posts instead of just a /
app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://testUser:testUser123@cluster0.uki2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message()));

mongoose.set('useFindAndModify', false);


