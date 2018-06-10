var express = require("express");
var app = express();

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use("/font-awesome", express.static(__dirname + "/node_modules/font-awesome"));

const html = __dirname + "/index.html";

app.get("/", (req, res) => {
    res.sendFile(html);
})

app.get("/api/listPost/:categoria", (req,res) => {
    res.status(200).json([])
})


app.listen(3000, () => {
    console.log("listen 3000");
});
