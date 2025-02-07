// nav-icon active
function toggleHamburgerIcon(element) {
  element.classList.toggle("change");
}

// toggle menubar @mendia(max-width: 768px)
const navMenu = document.getElementById("navMenu");
const hamIcon = document.getElementById("hamIcon");

hamIcon.addEventListener("click", function() {
  if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
  } else {
      navMenu.style.display = "block";
  }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth' // ทำให้การเลื่อนเป็นไปอย่างนุ่มนวล
          });
      }
  });
});