const apikey = "21be1451239088fddf79953b709ddac0";

fetch('https://gnews.io/api/v4/search?q=example&token=21be1451239088fddf79953b709ddac0')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    });

document.getElementById("demo").innerHTML = data;

