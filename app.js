const fetchBtn = document.getElementById("fetcher");
const categorySelect = document.getElementById("category");
const imageContainer = document.querySelector(".card");

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
