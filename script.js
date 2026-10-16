const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".primary-nav a[href^='#']");
const galleryDialog = document.querySelector(".gallery-dialog");
const galleryDialogImage = galleryDialog.querySelector("img");
const galleryClose = galleryDialog.querySelector(".dialog-close");

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-gallery-image]").forEach((button) => {
  button.addEventListener("click", () => {
    galleryDialogImage.src = button.dataset.galleryImage;
    if (galleryDialog.showModal) {
      galleryDialog.showModal();
    }
  });
});

galleryClose.addEventListener("click", () => {
  galleryDialog.close();
  galleryDialogImage.src = "";
});

galleryDialog.addEventListener("click", (event) => {
  if (event.target === galleryDialog) {
    galleryDialog.close();
    galleryDialogImage.src = "";
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && galleryDialog.open) {
    galleryDialogImage.src = "";
  }
});
