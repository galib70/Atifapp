 // Select navigation links and content sections
 const navLinks = document.querySelectorAll('.bottom-nav .nav-link');
 const contentSections = document.querySelectorAll('.content');

 // Navigation logic
 navLinks.forEach(link => {
   link.addEventListener('click', () => {
     // Remove active class from all links and sections
     navLinks.forEach(nav => nav.classList.remove('active'));
     contentSections.forEach(section => section.classList.remove('active'));

     // Add active class to the clicked link and corresponding section
     link.classList.add('active');
     const targetId = link.getAttribute('data-target');
     document.getElementById(targetId).classList.add('active');
   });
 });