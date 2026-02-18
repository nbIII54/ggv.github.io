export default function handler(req, res) {
  // Danh sách ảnh
  const images = [
    "https://static.zerochan.net/Sparxie.full.4659240.jpg",
    "https://static.zerochan.net/UTAU.full.4624358.jpg",
    "https://static.zerochan.net/Furina.de.Fontaine.full.4659034.png"
  ];
  
  // Chọn ảnh ngẫu nhiên
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Trả về HTML với meta tags cho Discord preview
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:title" content="Random Image">
    <meta property="og:description" content="A random image from the list.">
    <meta property="og:image" content="${randomImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="800">
    <meta name="twitter:card" content="summary_large_image">
    <title>Random Image</title>
  </head>
  <body>
    <h1>Random Image</h1>
    <img src="${randomImage}" alt="Random Image" style="max-width: 100%;">
    <p>Refresh the page for a new random image.</p>
  </body>
  </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
