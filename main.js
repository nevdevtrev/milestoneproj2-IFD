document.getElementById("articles").addEventListener("click", apiCALL);

function apiCALL() {
  fetch(
    "https://gnews.io/api/v4/top-headlines?topic=chess&country=ie&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title} + <img id="newsimage" src= ${item.image}> </li>`;
           document.getElementById("demo").innerHTML = html;
      })
    //   showData(data.articles);
    })
    .catch(function (err) {
      console.log(err);
    });
}

