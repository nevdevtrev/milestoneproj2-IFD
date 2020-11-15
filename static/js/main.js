const base = "https://gnews.io/api/v4/";
const apikey = "21be1451239088fddf79953b709ddac0";

var url = new Object();
url.headlines = "top-headlines?&country=ie&token=";
url.sport = "search?q=sport&country=ie&token=";
url.entertainment = "search?q=entertainment&country=ie&token";
url.business = "search?q=business&country=ie&token=";
url.arts = "search?q=arts&country=ie&token=";
url.fashion = "search?q=fashion&country=ie&token=";
url.world = "search?q=world&country=ie&token=";

category = Object.keys(url);
syntax = Object.values(url);
console.log(syntax);
console.log(category);

// For loop for itertating through category-based function calls

for (let i = 0; i < category.length; i++) {
  document.getElementById(category[i]).addEventListener("click", apiCALL);

  // function to make API call to GNews: use JSON method to transform DATA to JSON object, then handle data for HTML
  function apiCALL() {
    fetch(base + syntax[i] + apikey)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data);
        data = data.articles;
        let html = "";
        data.forEach(function (item, index) {
          html += `<li> <br> <h1>${item.title}</h1> <h7>${item.publishedAt} | </h7><h7>News Source: ${item.source.name}</h7><br><br><h4>${item.description}</h4><h3 data-toggle="collapse" data-target="#${index}"><i class="fas fa-plus"></i></h3><div id="${index}" class="collapse">For the full details please check out the source article at <a href="${item.url}" target="_self">${item.source.name}</a></div><br><img id="newsimage" src= ${item.image}> </li> <br><hr class="list">`;
          $("#articleList").css("list-style-type", "none");
          document.getElementById("articleList").innerHTML = html;
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}
