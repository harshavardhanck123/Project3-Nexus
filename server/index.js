const express = require('express');
const connectDatabase=require('./db/database')
const app = express();

app.use(express.json());
const customerRoute=require('./routes/customerRoute')

app.use('/customers',customerRoute)

PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

connectDatabase();