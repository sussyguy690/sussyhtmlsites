const fetchBtn = document.getElementById("fetcher");
const categorySelect = document.getElementById("category");
const imageContainer = document.querySelector(".card");

console.log(
  "Favicon: https://i.pinimg.com/736x/67/48/79/6748792dfa3dda363b1d3bc440711fca.jpg"
);

fetchBtn.addEventListener("click", () => {
  const category = categorySelect.value;

  // Define API endpoint arrays
  const nekoEndP = ["4k", "boobs", "pussy", "ass", "hthigh", "hass"];
  const waifuPicsEndP = ["neko", "blowjob"];
  const waifuImEndP = ["waifu", "waifuass", "milf", "ecchi", "oppai"];

  let apiUrl = ""; // Declare apiUrl to use outside the blocks

  // Check which endpoint to use
  if (nekoEndP.includes(category)) {
    apiUrl = `https://nekobot.xyz/api/image?type=${category}`;
  } else if (waifuPicsEndP.includes(category)) {
    apiUrl = `https://api.waifu.pics/nsfw/${category}`;
  } else if (waifuImEndP.includes(category)) {
    apiUrl = `https://api.waifu.im/search/?excluded_files=3867126be8e260b5&excluded_files=3133&gif=false&excluded_tags=maid&included_tags=${category}&is_nsfw=true`;
  } else {
    console.error("Invalid category selected.");
    return;
  }

  console.log("Fetching URL:", apiUrl);

  if (
    apiUrl ===
    "https://api.waifu.im/search/?excluded_files=3867126be8e260b5&excluded_files=3133&gif=false&excluded_tags=maid&included_tags=waifuass&is_nsfw=true"
  ) {
    const newUrl =
      "https://api.waifu.im/search/?excluded_files=3867126be8e260b5&excluded_files=3133&gif=false&excluded_tags=maid&included_tags=ass&is_nsfw=true";

    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        let imageUrl;

        // Handle different API responses
        if (data.message) {
          imageUrl = data.message; // Nekobot API
        } else if (data.url) {
          imageUrl = data.url; // Waifu.pics API
        } else if (data.images && data.images.length > 0) {
          imageUrl = data.images[0].url; // Waifu.im API
        } else {
          throw new Error("Image URL not found in response");
        }

        // Display the image
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Fetched Image";
        image.style.maxWidth = "100%"; // Ensure image fits container

        imageContainer.innerHTML = ""; // Clear previous image
        imageContainer.appendChild(image);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        imageContainer.innerHTML = `<p style="color:red;">Failed to load image. Please try again.</p>`;
      });
  } else {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let imageUrl;

        // Handle different API responses
        if (data.message) {
          imageUrl = data.message; // Nekobot API
        } else if (data.url) {
          imageUrl = data.url; // Waifu.pics API
        } else if (data.images && data.images.length > 0) {
          imageUrl = data.images[0].url; // Waifu.im API
        } else {
          throw new Error("Image URL not found in response");
        }

        // Display the image
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Fetched Image";
        image.style.maxWidth = "100%"; // Ensure image fits container

        imageContainer.innerHTML = ""; // Clear previous image
        imageContainer.appendChild(image);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        imageContainer.innerHTML = `<p style="color:red;">Failed to load image. Please try again.</p>`;
      });
  }
});
