document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.style.display = "block";
  });

  closeMobileMenuButton.addEventListener("click", function () {
    mobileMenu.style.display = "none";
  });
});
