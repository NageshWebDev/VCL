const mongoDB = require('./config/mongoose.js')
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload')
const PORT = 8000
const documentModel = require('./config/schemaAndModel')
const path = require('path')

app.use(fileUpload())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("<h1> NODEJS SERVER</h1>")
})

app.get('/getMeStudentRecord', async (req, res) => {
    const data = await documentModel.find({}, { _id: 0, createdAt: 0, __v: 0 })
    // console.log(data)
    res.json({ payload: data })
    res.end()
})

app.post("/uploadFile", (req, res) => {
    console.log(' upload request : resume ')
    if (req.files === null) {
        return res.status(400)
    }
    const file = req.files.myFile;
    console.log(file);
    if (file.size <= 5000000 && file.mimetype === 'application/pdf') //less then 5MB
    {
        const uploadPath = path.join(__dirname, '../myApp/src/client/uploads')
        file.mv(`${uploadPath}/${file.name}`, error => {
            if (error) {
                console.log(error)
                return res.status(500).send(error)
            }
            res.json({ fileName: file.name, filePath: `src/client/uploads/` })
        })
    } else if(file.size > 5000000){
        res.status(400).json({error : 'Max File Size 5mb'})
    } else if(file.mimetype !== 'application/pdf'){
        res.status(400).json({error : 'Use PDF Format Only'})
    }
});

app.post('/studentRecord', async (req, res) => {
    let value = req.body;
    console.log(value)
    console.log("Message Received")
    const filter = { stuRoll: req.body.stuRoll }
    const update = {
        filePath: req.body.filePath,
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