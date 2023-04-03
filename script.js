// Get the height of the navbar
    const navbarHeight = document.querySelector('nav').offsetHeight;

    // Add an event listener to each navbar link
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the ID of the section to scroll to
        const sectionId = this.getAttribute('href');

        // Get the top position of the section
        const sectionTop = document.querySelector(sectionId).offsetTop;

        // Scroll to the section, accounting for the navbar height
        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: 'smooth'
        });
      });
    });