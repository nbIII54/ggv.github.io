export default function handler(req, res) {
  // Danh sách ảnh
  const images = [
    "https://static.zerochan.net/Sparxie.full.4659240.jpg",
    "https://static.zerochan.net/UTAU.full.4624358.jpg",
    "https://static.zerochan.net/Furina.de.Fontaine.full.4659034.png"
  ];
  
  // Chọn ảnh ngẫu nhiên
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Redirect đến ảnh
  res.redirect(302, randomImage);
}
