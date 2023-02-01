import { Schema, models, model } from 'mongoose'

const TypeGacetaSchema = new Schema({
    type: String,
    title: String,
    date : Date
})

const GacetaSchema = new Schema({
    uploadDate: {type: Date, default: Date.now()},
    sumary: {type: [TypeGacetaSchema], required: true},
    gacetaNumber : {type: Number, unique: true, required: true},
    publishDate : Date,
    textWithoutFormat: String,
    whoUploaded: String,
    status: {type: String, default: "Publish"}
})

export const GacetaModel = models.Gaceta || model('Gaceta', GacetaSchema);