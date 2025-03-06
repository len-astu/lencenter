<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery</title>
  <style>
    .gallery img {
      width: 200px;
      height: auto;
      margin: 10px;
    }
  </style>
</head>
<body>
  <div class="gallery" id="gallery"></div>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const gallery = document.getElementById('gallery');
      const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const assetsDir = '/assets/'; // Change this to your assets directory

      fetch(assetsDir)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const htmlDoc = parser.parseFromString(data, 'text/html');
          const links = htmlDoc.querySelectorAll('a');

          links.forEach(link => {
            const href = link.getAttribute('href');
            const extension = href.split('.').pop().toLowerCase();

            if (imageExtensions.includes(extension)) {
              const img = document.createElement('img');
              img.src = `${assetsDir}${href}`;
              gallery.appendChild(img);
            }
          });
        })
        .catch(error => console.error('Error fetching images:', error));
    });
  </script>
</body>
</html>
