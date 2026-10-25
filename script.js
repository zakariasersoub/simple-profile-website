// 1. Typing effect
const nameElement = document.getElementById("name");
const name = "Zaki";
let index = 0;

function typeName() {
  if (index < name.length) {
    nameElement.textContent += name[index];
    index++;
    setTimeout(typeName, 180);
  }
}

typeName();

// 2. Dark / Light mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
});

// 3. Update the copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// 4. Newsletter form validation and feedback
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");
const joinButton = newsletterForm.querySelector("button");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  message.textContent =
    "Thanks for your interest! Connect a newsletter service to subscribe.";

  joinButton.textContent = "✓ Thank you!";
  emailInput.value = "";
});

// 5. Friendly image interaction
const photo = document.querySelector(".profile-photo");

photo.addEventListener("mouseenter", () => {
  photo.style.transform = "scale(1.07) rotate(3deg)";
});

photo.addEventListener("mouseleave", () => {
  photo.style.transform = "scale(1) rotate(0deg)";
});
