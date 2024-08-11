const express = require('express');
const connectDatabase=require('./db/database')
const customerRoutes = require('./routes/customerRoute');
const feedbackRoutes = require('./routes/feedbackRoute');
const app = express();

app.use(express.json());


app.use('/api', customerRoutes);
app.use('/api', feedbackRoutes);

PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

connectDatabase();