// document.getElementById('header').innerHTML = fetch('header.html')
//      .then(response => response.text()
//      .then(data => document.getElementById("header").innerHTML = data)
//      .catch(error => console.log(error))
// );

// header.js
function addHeader() {
     const headerHTML = `
         <!-- Top Bar -->
         <div class="top-bar">
             <span>Phone: +256771895380 &nbsp;|&nbsp; Email: <a href="mailto:cunglan21@gmail.com">cunglan21@gmail.com</a></span>
             <div class="social-icons">
                 <a href="#"><i class="fab fa-facebook-f"></i></a>
                 <a href="#"><i class="fab fa-twitter"></i></a>
                 <a href="#"><i class="fab fa-instagram"></i></a>
                 <a href="#"><i class="fab fa-linkedin"></i></a>
             </div>
         </div>
 
         <!-- Navigation -->
         <nav>
             <div class="logo">Ocung Allan.</div>
             <ul>
                 <li><a href="index.html" class="active">Home</a></li>
                 <li><a href="work.html">Work</a></li>
                 <li><a href="services.html">Services</a></li>
                 <li><a href="about.html">About</a></li>
                 <li><a href="blog.html">Blog</a></li>
                 <li><a href="contact.html">Contact</a></li>
             </ul>
         </nav>
     `;
     document.body.insertAdjacentHTML('afterbegin', headerHTML);
 }
 
 addHeader();
 
 document.addEventListener('DOMContentLoaded', function() {
     const navLinks = document.querySelectorAll('nav ul li a');
 
     navLinks.forEach(link => {
         link.addEventListener('click', function() {
             // Remove 'active' class from all links
             navLinks.forEach(link => link.classList.remove('active'));
 
             // Add 'active' class to the clicked link
             this.classList.add('active');
         });
     });
 });
 