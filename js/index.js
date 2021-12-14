const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=9b1DIYcUHy5v1sIRqdKrVCzevE0anL6J&s=cats', {mode: 'cors'})
  .then((res) => {
    return res.json();
  })
  .then((res)=>{
    //console.log(res.data.images.original.url);
    img.src = res.data.images.original.url;
  });