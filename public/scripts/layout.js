// here fetching a button
const formToggleBtn = document.getElementById("toggle-form-visibility");
const hidableForm = document.getElementById("hidable-form");

hidableForm.style.visibility = "hidden";
const initialTagValue = formToggleBtn.innerHTML;

// toggling the visibility of the form on click
formToggleBtn.addEventListener("click", () => {
  let current = hidableForm.style.visibility;
  if (current === "hidden") {
    hidableForm.style.visibility = "initial";
    formToggleBtn.innerHTML = "Close";
    formToggleBtn.style.color = "red";
  } else {
    formToggleBtn.style.color = "initial";
    formToggleBtn.innerHTML = initialTagValue;
    hidableForm.style.visibility = "hidden";
  }
});
