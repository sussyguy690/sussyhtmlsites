const fetchBtn = document.getElementById("fetcher");
const categorySelect = document.getElementById("category");
const imageContainer = document.querySelector(".panel");
const downloadBtn = document.getElementById("download");

fetchBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const apiUrl = `https://nekobot.xyz/api/image?type=${category}`;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data.message;
      const image = document.createElement("img");
      image.src = imageUrl;
      imageContainer.innerHTML = "";
      imageContainer.appendChild(image);
    })
    .catch((error) => console.error(error));
});

function downloadImage(url, name) {
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
downloadBtn.addEventListener("click", () => {
  const imageUrl = image.src;
  const imageName = "image.jpg";
  downloadImage(imageUrl, imageName);
});
