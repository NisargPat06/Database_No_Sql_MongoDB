const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes');

const app = express();
const PORT = 5000

app.use(express.json())


// connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Connection Failed", err));


app.use('/api', userRoutes);
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
