var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/", (req, res) => {
    console.log('as');
    res.sendFile(path.join(__dirname, "../public", "index.html"));
})
app.listen(3000, () => {
    console.log("lsidasdsad");
})