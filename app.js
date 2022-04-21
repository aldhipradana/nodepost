const express = require('express');
const cors = require('cors');
const PORT = 8000;
const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const db = require('./app/models');

db.mongoose
    .connect(db.url, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useFindAndModify: true
    })
    .then((result) => {
        console.log(`Db Connected`)
    }).catch((err) => {
        console.log(`Cannot Connected, msg: ${err}`, err)
        process.exit()
    });


app.get('/', (req, res) => {
    // res.send('Hello World!')

    res.json({
        message: "Hello Node Je Es"
    })
})

require('./app/routes/post.routes')(app)

app.listen(PORT, () => {
    console.log(`Server berjalan pada http://localhost:${PORT}`)
})