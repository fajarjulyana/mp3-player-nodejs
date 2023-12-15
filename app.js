const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/music', (req, res) => {
 const directoryPath = path.join(__dirname, 'public/music');

 fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send({ message: 'Unable to scan files' });
    } else {
      const musicFiles = files.filter(file => file.endsWith('.mp3') || file.endsWith('.wav'));
      res.send(musicFiles);
    }
 });
});

app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});