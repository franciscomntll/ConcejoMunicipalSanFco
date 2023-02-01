import mongoose from 'mongoose'

const conectorDB = () => {

    mongoose.connection.on('connecting', _ => {
        console.log("Estoy conectando a la base de datos")
    })

    const db = mongoose.connection
    
     mongoose.connect(process.env.MONGO_URI, {
        // keepAlive: true,
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true, //make this true
        // autoIndex: true, //make this also true
        // keepAliveInitialDelay: 300000
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .catch( (err) => console.log(err))

   db.on('open', _ => {
       console.log("Conexion con exito a base de datos")
   })

   db.on('error', err => {
       console.log(err)
   })
}

export default conectorDB;




