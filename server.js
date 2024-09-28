const app = require('./app');
const connectDB = require('./src/db/dbConnection');


connectDB()
const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`)
})