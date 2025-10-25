document.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to my website!');

  const textElement = document.getElementById('typewriter');
  const text = "Kendrick Manchester Jr.";
  let index = 0;
  let isDeleting = false;

  function typeEffect() {
    if (!textElement) return; // safety check

    if (!isDeleting) {
      textElement.textContent = text.slice(0, index++);
      if (index > text.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // pause before deleting
        return;
      }
    } else {
      textElement.textContent = text.slice(0, index--);
      if (index < 0) {
        isDeleting = false;
        setTimeout(typeEffect, 500); // pause before retyping
        return;
      }
    }
    setTimeout(typeEffect, 75);
  }

  typeEffect(); // start animation
});
