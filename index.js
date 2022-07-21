// const app = require("express")();
// const PORT = 8080;

const express = require('express');
const app = express();
const PORT = 8080;
app.listen(PORT, () => console.log(`it's alive at http://localhost:${PORT}`))


app.use( express.json() )


app.get("/pants", (req, res) => {
    res.status(200).send({
        size: "big",
        color: "white"
    })
}); 

app.post("/pants/:id", (req,res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: "We need a logo!"})
    }
    res.send({
        pants: `pants with your ${logo} and id of ${id}`,
    })
})


