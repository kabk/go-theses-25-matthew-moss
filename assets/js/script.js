// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".animation-image");
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  }

  images[currentIndex].classList.add("active");
  const interval = setInterval(showNextImage, 500);
  setTimeout(() => {
    clearInterval(interval);
    document.getElementById("image-animation").style.display = "none"; // Hide the animation container
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  // Rotate nav items on hover
  const navItems = document.querySelectorAll(".nav-item a");

  navItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const randomAngle = Math.floor(Math.random() * 21) - 10;
      item.style.transform = `rotate(${randomAngle}deg)`;
    });

    item.addEventListener("mouseout", function () {
      item.style.transform = "rotate(0deg)";
    });
  });

  // Rotate h3 tags at random angles on page load
  const h3Tags = document.querySelectorAll("h3");

  h3Tags.forEach((h3) => {
    const randomAngle = Math.floor(Math.random() * 21) - 10;
    h3.style.transform = `rotate(${randomAngle}deg)`;
  });

  // Rotate images at random angles on page load
  const allImages = document.querySelectorAll("img");

  allImages.forEach((img) => {
    const randomAngle = Math.floor(Math.random() * 11) - 5;
    img.style.transform = `rotate(${randomAngle}deg)`;
  });

  // Navigation bar progress
  const sections = document.querySelectorAll("section");
  const progressBar = document.getElementById("progress-bar");

  function updateProgressBar() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    const sectionId = sections[index].id;
    progressBar.setAttribute("data-section", sectionId);
  }

  updateProgressBar();
  window.addEventListener("scroll", updateProgressBar);
});
