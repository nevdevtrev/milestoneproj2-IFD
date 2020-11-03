document.getElementById("articles").addEventListener("click", loadREST);
document.getElementById("test").addEventListener("click", tester);

function loadREST() {
  fetch(
    "https://gnews.io/api/v4/search?q=example&token=21be1451239088fddf79953b709ddac0"
  )
    .then(function (response) {
      return response.json();
    })
    // .then(function (data) {
    //   console.dir(data);
    //   let html = "";
    //   data.forEach((data) => {
    //     html = `<li> ${data.articles}</li>`;

    //     document.getElementById("demo").innerHTML = html;
    //   });
    // })
    .then(function(data) {
      console.log(data);
      data = data.articles;
      let html = "";
      data.forEach(function(item) {
           html += `<li> ${item.title}</li>`;
           document.getElementById("demo").innerHTML = html;
      })
    //   showData(data.articles);
    })
    .catch(function (err) {
      console.log(err);
    });
}

// showData = (data) => {
//   const dataDiv = document.querySelector("#top-articles");
//   data.forEach(articles => {
//     const articlesElement = document.createElement("p");
//     articlesElement.innerText = `Article Title: ${articles.title}`;
//     dataDiv.append(articlesElement);
//   });
// };
