document.getElementById("articles").addEventListener("click", loadREST);

function loadREST() {
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
      let img = "";
      data.forEach(function(item) {
           html += `<li> ${item.title}</li>`;
           img += `<img src= ${item.image}>`;
           document.getElementById("demo").innerHTML = html + "<br>" + img;
      })
    //   showData(data.articles);
    })
    .catch(function (err) {
      console.log(err);
    });
}

