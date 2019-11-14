const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    var alas, tinggi , hasil

    var alas = parseInt (req.body.alas)
    var tinggi = parseInt (req.body.tinggi)
    var hasil = parseInt (req.body.hasil)

    console.log(typeof alas)
    console.log(typeof tinggi)
    console.log(typeof hasil)
    
    return res.send(hasil)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})