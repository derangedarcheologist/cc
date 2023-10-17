const express = require('express');
const app = express();
const PORT = 3001; // You can choose any port other than your React app's port
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
