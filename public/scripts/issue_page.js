{
  let labelSelectedList = [],
    authorSelectedList = [];

  // get all the accordions and add a click event listern to it
  const labelAccordion = document.querySelector("#label-list-accordion");
  const authorAccordion = document.querySelector("#author-list-accordion");
  const filter = document.querySelector("#filter-btn");
  labelAccordion.addEventListener("click", labelFilterListHandler);
  authorAccordion.addEventListener("click", authorFilterListHandler);
  filter.addEventListener("click", filterClickAction);
  function labelFilterListHandler(event) {
    // to prevent the  below code running twice when clicked on label of radio
    if (event.target.className != "form-check-label") {
      labelSelectedList = document.querySelectorAll(
        "#label-list-accordion input[type=checkbox]:checked"
      );
      const arr = Array.from(labelSelectedList);
      // console.log("label accordion clicked", labelSelectedList);
    }
  }
  function authorFilterListHandler(event) {
    // to prevent the  below code running twice when clicked on label of radio
    if (event.target.className != "form-check-label") {
      authorSelectedList = document.querySelectorAll(
        "#author-list-accordion input[type=checkbox]:checked"
      );
      // console.log("author accordion clicked ", authorSelectedList);
    }
  }
  function filterClickAction(event) {
    event.preventDefault();
    // console.log("filter btn clicked");
    const authorObjects = [];
    const labelObjects = [];
    // if(authorSelectedList.length >0)
    for (let item of authorSelectedList) {
      authorObjects.push(item.value);
    }
    for (let item of labelSelectedList) {
      labelObjects.push(item.value);
    }
    // console.log("filter btn clicked !!! ", authorObjects, "\n", labelObjects);
    let xhrReq = new XMLHttpRequest();
    xhrReq.open("POST", "/projects/filter-issues");
    // json data does not work without content type header
    xhrReq.setRequestHeader("Content-type", "application/json");
    xhrReq.send(
      JSON.stringify({
        labels: labelObjects,
        authors: authorObjects,
      })
    );
    xhrReq.onload = function () {
      // console.log(xhrReq.response);
      updateIssueList(xhrReq.response);
    };
  }

  // search functionality below
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", getSearchResults);
  function getSearchResults(event) {
    // preventDefault also prevents validation check of form fields
    event.preventDefault();
    const form = document.querySelector("#search-form");
    // to valiate the values
    form.reportValidity();

    if (searchInput.value != "") {
      let xhrReq = new XMLHttpRequest();

      xhrReq.open("POST", "/projects/search-query");
      xhrReq.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      const body = "searchKey=" + encodeURIComponent(searchInput.value);
      xhrReq.send(body);
      xhrReq.onload = function () {
        updateIssueList(xhrReq.response);
      };
    }
  }
  // updates issue list based on filter/search query
  function updateIssueList(Stringdata) {
    let issueContainer = document.getElementById("issue-list");
    let data = JSON.parse(Stringdata);
    // console.log("issues ", data);
    let generatedIssueList = [];
    if (data.length == 0) {
      issueContainer.innerHTML = `<h4 class="red">No result found that matches your query</h4>`;
      return;
    }
    for (item of data) {
      let generatedLabelList = [];
      for (entry of item.label) {
        let tempLabel = `<div class="label-tag">${entry}</div>`;
        generatedLabelList.push(tempLabel);
      }
      let tempIssue = `
      <div class="issue-card">
        <div class="project-header place-apart">
          <h4>${item.issueName} </h4>
          <div class="auther-container">
            <small>Author</small>
            <h4>${item.issueAuthor} </h4>
          </div>
        </div>
        <details class="issue-description">
          <summary>Description</summary>
          <div class="accordion-body">${item.issueDescription}</div>
        </details>
        <div class="issue-labels">
          <div class="label-tag">Tags :</div>
            ${generatedLabelList.join(" ")}
        </div>
      </div>`;
      generatedIssueList.push(tempIssue);
    }
    issueContainer.innerHTML = generatedIssueList.join(" ");
  }
}
