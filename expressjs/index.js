const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));