document.getElementById('articles').addEventListener('click', loadREST);


function loadREST() {
fetch('https://gnews.io/api/v4/search?q=example&token=21be1451239088fddf79953b709ddac0')
    .then(function (response) {
        return response.json();
    })
    .then(function (article) {
        console.log(article);
        let html = '';
        article.forEach(function(article) {
            html += `<li> ${article.title} - ${article.description}</li>`;
        });
        document.getElementById("demo").innerHTML = html;
    })
    .catch(function (err) {
        console.log(err);
    });
}