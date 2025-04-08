function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add this JavaScript code
document.querySelector('.experience-details-container').addEventListener('wheel', function(e) {
  if (e.deltaY !== 0) {
      e.preventDefault(); // Prevent vertical scrolling
      this.scrollLeft += e.deltaY; // Scroll horizontally instead
  }
}, { passive: false }); // passive: false is required to use preventDefault()