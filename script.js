const form = document.getElementById("registration-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  const inputs = form.querySelectorAll("input");
  const errors = form.querySelectorAll(".error-para");

  inputs.forEach((input) => {
    const error = form.querySelector(`.error-para[data-for="${input.id}"]`);

    if (!input.value.trim()) {
      isValid = false;

      input.classList.add("border-red-500", "placeholder-red-500");

      if (error) {
        error.classList.remove("hidden");
      }
    } else {
      input.classList.remove("border-red-500", "placeholder-red-500");

      if (error) {
        error.classList.add("hidden");
      }
    }
  });

  if (isValid) {
    form.submit();
  }
});

// Select the toggle checkbox
const toggleCheckbox = document.querySelector(".toggle-checkbox");
const toggleThumb = document.querySelector(".toggle-thumb");

// Add event listener for the toggle
toggleCheckbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    // Toggle is ON
    toggleThumb.style.transform = "translateX(100%)";
    toggleThumb.parentNode.classList.remove("bg-gray-300");
    toggleThumb.parentNode.classList.add("bg-green-500");
  } else {
    // Toggle is OFF
    toggleThumb.style.transform = "translateX(0)";
    toggleThumb.parentNode.classList.remove("bg-green-500");
    toggleThumb.parentNode.classList.add("bg-gray-300");
  }
});
