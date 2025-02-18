document.getElementById('header').innerHTML = fetch('header.html')
     .then(response => response.text()
     .then(data => document.getElementById("header").innerHTML = data)
     .catch(error => console.log(error))
);