/*jshint esversion: 6 */

const base = "https://gnews.io/api/v4/";
const apikey = "21be1451239088fddf79953b709ddac0";

// array for later assigning articles to individual divs
var divs = [
  "div1",
  "div2",
  "div3",
  "div4",
  "div5",
  "div6",
  "div7",
  "div8",
  "div9",
  "div10",
];

// Default fetch for when page loads - Top 10 Headlines

fetch(
  "https://gnews.io/api/v4/top-headlines?&country=ie&token=21be1451239088fddf79953b709ddac0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // console.log(data);
    data = data.articles;
    let html = "";
    // For loop to seperate each article into individual divs - so rows/cols can be used to responsively layout
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      html = `<ul><li id="storyli"><h6>${data[i].source.name}</h6> <h1>${data[i].title}</h1> <h7>${data[i].publishedAt}</h7><br><br><img id="newsimage" src= ${data[i].image}><h4>${data[i].description}</h4><h3><br><a href="${data[i].url}" target="_self" aria-label="link to the original article in full"><i class="fas fa-external-link-alt" aria-hidden="true"></i></a></h3><br> </li></ul><br><hr class="list"><br>`;
      document.getElementById(divs[i]).innerHTML += html;
    }
  })
  .catch(function (err) {
    console.log(err);
  });

// object For Holding search categories and their endpoints
var url = new Object();
url.headlines = "top-headlines?&country=ie&token=";
url.sport = "search?q=sport&country=ie&token=";
url.entertainment = "search?q=entertainment&country=ie&token=";
url.business = "search?q=business&country=ie&token=";
url.fashion = "search?q=fashion&country=ie&token=";
url.arts = "search?q=arts&country=ie&token=";
url.world = "search?q=world&country=ie&token=";

// Generate arrays from url object for use in iterating through apiCALL universal function
var category = Object.keys(url);
var endpoint = Object.values(url);
console.log(endpoint);
console.log(category);

// For loop for itertating through category-based function calls

for (let x = 0; x < category.length; x++) {
  document.getElementById(category[x]).addEventListener("click", apiCALL);

  // function to make API call to GNews: use JSON method to transform DATA to JSON object, then handle that data for HTML display

  function apiCALL() {
    $(document).ready(function () {
      // Clear the articles Divs ahead of each new api call
      $(".allarticles .articles").empty();
    });
    fetch(base + endpoint[x] + "21be1451239088fddf79953b709ddac0") // api call
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(endpoint[x]);
        data = data.articles;
        let html = "";
        for (let i = 0; i < data.length; i++) {
          // For loop to seperate each article into individual divs - so rows/cols can be used to responsively layout
          console.log(data[i]);
          html = `<ul><li id="storyli"><h6>${data[i].source.name}</h6> <h1>${data[i].title}</h1> <h7>${data[i].publishedAt}</h7><br><br><img id="newsimage" src= ${data[i].image}><h4>${data[i].description}</h4><h3><br><a href="${data[i].url}" target="_blank"><i class="fas fa-external-link-alt"></i></a></h3><br> </li></ul><br><hr class="list"><br>`;
          document.getElementById(divs[i]).innerHTML += html;
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  // Typewriter effect for Title

  var z = 0;
  var speed = 50;
  var txt = "Irish News Live As It Happens...";

  function typeWriter() {
    // var headliners = new Object();
    // headliners.headlines = "Top 10 Irish Headlines Live as it Happens";
    // headliners.sport = "Irish Sports News Live as it Happens";
    // headliners.entertainment = "Irish Entertainment News Live as it Happens";
    // headliners.business = "Irish Business News Live as it Happens";
    // headliners.fashion = "Irish Fashion News Live as it Happens";
    // headliners.arts = "Irish Arts News Live as it Happens";
    // headliners.world = "Irish World News Live as it Happens";

    // topic = Object.keys(headliners);
    // banners = Object.values(headliners);
    // console.log(topic);
    // console.log(banners);

    if (z < txt.length) {
      document.getElementById("typewriter").innerHTML += txt.charAt(z);
      z++;
      setTimeout(typeWriter, speed);
    }
  }
}

// to make the navbar disappear upon scrolling - modified from w3schools.com

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-300px";
  }
  prevScrollpos = currentScrollPos;
};

document.onclick = function () {
	var newDiv = document.createElement('div');
	// populate div
	newDiv.onclick = function () {};
	document.body.appendChild(newDiv);
}
div.onclick = function () {}