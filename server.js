// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const assetsDir = path.join(__dirname, 'assets');

// Serve static files from the assets folder
app.use('/assets', express.static(assetsDir));

// API endpoint to get the list of image URLs
app.get('/api/images', (req, res) => {
  fs.readdir(assetsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan directory' });
    }
    // Filter files to include only image files (jpg, jpeg, png, gif)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    // Map file names to URLs (assuming your server serves from /assets)
    const imageUrls = imageFiles.map(file => `/assets/${file}`);
    res.json(imageUrls);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
