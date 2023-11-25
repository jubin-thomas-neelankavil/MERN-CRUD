const express = require('express');
const connectToDatabase = require('./database/db.js');
const dotenv = require('dotenv');
const app = express();
const Routes = require('./routes/route.js')
const cors = require('cors')
const bodyParser = require('body-parser')

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const port = 8000;

const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const dbName   = process.env.DB_NAME

// Connect to the database
connectToDatabase(username,password,dbName);

app.listen(port, () => {
    console.log(`server running successfully on port ${port}`);
});
