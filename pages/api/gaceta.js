import conectorDB from "../../server/database/conectorBD"
import { GacetaModel } from "../../server/database/models"

export default function handler(req, res) {
    conectorDB()

    const nuevoObjeto = new GacetaModel({
        gacetaNumber: 1,
        publishDate : Date.now(),
        sumary: [{type: "acta", title: "hola mundo"}]
    })
    console.log(nuevoObjeto)
    nuevoObjeto.save()
    res.status(200).json({ name: 'John Doe' })
  }