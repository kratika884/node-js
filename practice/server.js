const express= require("express")

const app= express();

app.get("/", (req, res)=>{
return res.send(" Homepage");
})

app.get("/about", (req, res)=>{
    return res.send("Hiii!!!! I am Shivani")
})
app.listen(8000, ()=> console.log("Server is Started"));