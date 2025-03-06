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
  const navItems = document.querySelectorAll(".nav-item a");

  navItems.forEach((item) => {
    item.addEventListener("mouseover", function () {
      const randomAngle = Math.floor(Math.random() * 21) - 10; // Random angle between -10 and 10 degrees
      item.style.transform = `rotate(${randomAngle}deg)`;
    });

    item.addEventListener("mouseout", function () {
      item.style.transform = "rotate(0deg)";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");

  // Hide the overlay after 3 seconds
  setTimeout(() => {
    overlay.style.display = "none";
  }, 3000); // 3000 milliseconds = 3 seconds
});

// Rotate h3 tags at random angles on page load
document.addEventListener("DOMContentLoaded", function () {
  const h3Tags = document.querySelectorAll("h3");

  h3Tags.forEach((h3) => {
    const randomAngle = Math.floor(Math.random() * 21) - 10; // Random angle between -10 and 10 degrees
    h3.style.transform = `rotate(${randomAngle}deg)`;
  });
});

// Rotate images at random angles on page load
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    const randomAngle = Math.floor(Math.random() * 11) - 5; // Random angle between -5 and 5 degrees
    img.style.transform = `rotate(${randomAngle}deg)`;
  });
});
