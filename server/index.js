const express = require('express');
const server = express();
const path = require('path');

server.use('/public', express.static('public'));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})