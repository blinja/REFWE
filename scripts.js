document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".nav-button");
    
    navButtons.forEach(button => {
      button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
      });
      button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
      });
    });
  });

  // JavaScript function to toggle information on click
function toggleInfo(element) {
    const infoDiv = element.nextElementSibling;
    infoDiv.classList.toggle("hidden");
  }
  