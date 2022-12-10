const mongoose = require("mongoose")
const Schema = mongoose.Schema
const model = mongoose.model

const documentSchema = new Schema({
    stuRoll:{
        type: Number,
        required: true,
    },
    stuName:{
        type: String,
        required: true,
    },
    stuEmail:{
        type: String,
        required: true,
    },
    stuContact:{
        type: Number,
        required: true,
    }
},{timestamps: true})

const DocumentModel = model('studentRecordCollection',documentSchema)
module.exports = DocumentModel