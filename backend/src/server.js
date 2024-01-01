const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { router } = require('./routes/currencyRoutes');

dotenv.config();
const app = express();
const port = process.env.PORT;

//middelwares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use("/", router);


// app.get("/", (req,res)=>{
//     res.send({data:{"name": "Rishik", "age": 23}});
// })



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})


