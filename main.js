const apikey = "21be1451239088fddf79953b709ddac0";

fetch('https://gnews.io/api/v4/search?q=example&token=21be1451239088fddf79953b709ddac0')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let html = '';
        data.foreach(function(article) {
            html += '<li> ${article.title} - ${article.description}</li>';
        });
        document.getElementById("demo").innerHTML = html;
    })
    .catch(function (err) {
        console.log(err);
    });

// function appendData(data) {
//             var html = '';
//             for (var i = 0; i < data.length; i++) {
//                 var div = document.createElement("div");
//                 div.innerHTML = 'Title: ' + data[i] + ' Description: ' + data[i] + ' Content: ' + data[i];
//                 mainContainer.appendChild(div);
//             }
//         }
