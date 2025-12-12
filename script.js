document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const modal = new bootstrap.Modal(
    document.getElementById("successModal")
  );
  modal.show();

  this.reset();
});
