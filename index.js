const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/routes/router')



require('dotenv').config()
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(routes)
app.set('view engine', 'ejs')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to databse'))

app.listen(8989, () =>{
    console.log('servidor iniciado')
})



