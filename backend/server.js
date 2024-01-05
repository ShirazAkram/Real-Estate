const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/api/properties', (req, res) => {
    const newProperty = req.body;
    res.status(201).json({ message: 'Property created successfully', property: newProperty });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
