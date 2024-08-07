require('dotenv').config()

const URI=process.env.MONGODB_URI || 'your_mongodb_connection_string_here'
const JWT=process.env.JWT_SECRET

module.exports={
    URI,
    JWT,

}