const app = require('./app');
const connectDB = require('./src/db/dbConnection');
const env=require('dotenv')
env.config({path:'./.env'})

connectDB()
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})