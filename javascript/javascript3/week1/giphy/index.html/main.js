const giphyButton = document.querySelector("#giphyButton");
const giphyInput = document.querySelector("#giphyInput");
const limitInput = document.querySelector("#limitInput");
let holdgif = document.querySelector("#holdgif");
const APIKEY = "uPKfXFD8Iwe8SO7LoJqh04AohLzh3Mxm";

const getGiphyByName = () => {
  let url = "";
  const gifName = giphyInput.value;
  const gifLimit = limitInput.value;
  if (gifName) {
    url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${gifName}`;
  }

  if (gifLimit) {
    holdgif.innerHTML = "";
    url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&&limit=${gifLimit}&q=${gifName}`;
  }
  renderGiphy(url);
};

function renderGiphy(url) {
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res.data);

      res.data.forEach((d) => {
        const image = document.createElement("img");
        image.src = d.images.downsized.url;
        image.style.width = "200px";
        image.style.height = "200px";
        image.alt = d.title;
        const div = document.createElement("div");
        div.appendChild(image);
        holdgif.appendChild(div);
      });
    })
    .catch((err) => console.log("Not found " + err));
}
giphyButton.addEventListener("click", getGiphyByName);
limitInput.addEventListener("input", getGiphyByName);
