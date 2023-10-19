const express = require("express");
const app = express();
const Port = 2000;
const CategoryRouting = require("./Routing/CategoryRouting");
const cors = require("cors");

app.use(cors());
app.use('/api', CategoryRouting);

app.use(cors({
    // origin: "http://localhost:3000/"
    origin: "*"
}))

app.get("/", (req,res) => {
    console.log("This Is Home Page");
    res.send("API is running fine");
})

app.listen(Port, () => {
    try{
        console.log(`your server is running by PORT No- ${Port}`);
    }catch(err){
        console.log(`Error in starting the server, ${err}`);

    }
})