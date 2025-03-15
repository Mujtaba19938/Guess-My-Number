// Select the glass container
const glassContainer = document.getElementById('glass-container');

// Function to handle mouse movement and apply tilt
glassContainer.addEventListener('mousemove', (e) => {
    // Get the position of the mouse relative to the element
    const { offsetWidth: width, offsetHeight: height } = glassContainer;
    const { offsetX: x, offsetY: y } = e;
    
    // Calculate the tilt values based on cursor position
    const rotateX = ((y / height) - 0.5) * 10; // Tilt up/down
    const rotateY = ((x / width) - 0.5) * -10; // Tilt left/right

    // Apply the tilt transformation
    glassContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset the tilt when the mouse leaves the container
glassContainer.addEventListener('mouseleave', () => {
    glassContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Show the button when scrolling down 200px from the top
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    });
  
    // Add click event listener to the button
    scrollToTopBtn.addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  let preloaderVisible = true;

  document.addEventListener("DOMContentLoaded", function() {
      const preloader = document.getElementById("preloader");
      const mainContent = document.getElementById("main-content");
  
      function showPreloader() {
          preloader.style.display = "block";
          mainContent.style.display = "none";
          preloaderVisible = true;
      }
  
      function hidePreloader() {
          preloader.style.display = "none";
          mainContent.style.display = "block";
          preloaderVisible = false;
      }
  
      // Initially show the preloader
      showPreloader();
  
      // Hide preloader after a 3-second delay
      setTimeout(function() {
          if (preloaderVisible) {
              hidePreloader();
          }
      }, 3000); // 3 seconds delay
  
      // Ensure preloader is hidden once all resources are loaded
      window.onload = function() {
          if (preloaderVisible) {
              hidePreloader();
          }
      };
  });
  
  // Error handling in case any script or resource fails to load
  window.onerror = function(message, source, lineno, colno, error) {
      console.error("An error occurred:", message, source, lineno, colno, error);
      // Hide preloader and show content even if there's an error
      const preloader = document.getElementById("preloader");
      const mainContent = document.getElementById("main-content");
      preloader.style.display = "none";
      mainContent.style.display = "block";
  };
  
  
  