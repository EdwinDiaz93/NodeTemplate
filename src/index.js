require('dotenv').config();
const express = require('express');
const cors = require('cors');

const Db = require('./models');

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', require('./routes'));

app.listen(process.env.PORT, async () => {
    await Db.sync({ force: true });
    // console.log(`Application running on port: ${process.env.PORT}`);
});