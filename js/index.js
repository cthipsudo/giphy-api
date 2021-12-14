const form = document.querySelector('form');
let searchTerm = 'cats'

const pullImage = () => {
  const img = document.querySelector("img");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=9b1DIYcUHy5v1sIRqdKrVCzevE0anL6J&s=cats",
    { mode: "cors" }
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      //console.log(res.data.images.original.url);
      img.src = res.data.images.original.url;
    });
};

const addListeners = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log('Hello');
    const formData = new FormData(form);
    //console.log(formData.entries());
    let dataArr = [];
    for (let pair of formData.entries()) {
      //console.log(pair);
      dataArr.push(pair[1]);
    }
    searchTerm = dataArr[0];
    console.log(searchTerm);
  });
}

const main = () => {
  pullImage();
  addListeners();
};

main();
