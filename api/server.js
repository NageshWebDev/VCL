const mongoDB = require('./config/mongoose.js')
const express = require('express');
const app = express();
const PORT = 8000
const documentModel = require('./config/schemaAndModel')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1> NODEJS SERVER</h1>")
})

app.get('/getMeStudentRecord', async (req, res) => {
    const data = await documentModel.find({}, { _id: 0, createdAt: 0, __v: 0 })
    console.log(data)
    res.json({payload: data})
    res.end()
})

app.post('/studentRecord', async (req, res) => {
    let value = req.body;
    console.log(value)
    console.log("Message Received")
    const filter = { stuRoll: req.body.stuRoll }
    const update = {
        stuRoll: req.body.stuRoll,
        stuName: req.body.stuName,
        stuEmail: req.body.stuEmail,
        stuContact: req.body.stuContact
    }
    const found = await documentModel.findOneAndUpdate(filter, update)
    if (found) {
        console.log('Record Already exist')
        console.log('Existing Record Updated')
    } else if (!found) {
        console.log('New Record')
        await documentModel.create(value)
    }
    res.end()
})

app.listen(PORT, () => { console.log("Server is up at :: " + PORT) });