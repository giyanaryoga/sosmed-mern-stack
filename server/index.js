import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//connect to mongoDB
const CONNECT_URL = 'mongodb+srv://giyanaryoga:yoga1508@cluster0.yl8ud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
