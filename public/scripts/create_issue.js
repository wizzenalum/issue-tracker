// here i will add tags on the form to be visible

let labelBtn = document.querySelector("#label-submit");
let label = document.querySelector("#label");
let selectedLabelDiv = document.querySelector("#selected-labels");
let labelList = document.querySelector("#label-list");
let submitIssueBtn = document.getElementById("submit-issue-btn");

let isFirstLabel = true;
labelBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (label.value !== "") {
    if (isFirstLabel) {
      isFirstLabel = false;
      selectedLabelDiv.innerHTML += `<lable>Selected lables </label>`;
    }
    labelList.value += label.value + " ";
    selectedLabelDiv.innerHTML += `<div class="label-tag" >${label.value}</div>`;
    label.value = "";
  }
});
