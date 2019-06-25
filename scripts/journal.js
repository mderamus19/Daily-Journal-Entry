// add a click event listener to the Record Journal Entry button
// create a new entry in the API 

API.getJournalEntries().then(parsedentries => {
  renderJournalEntries(parsedentries); // parsedentries holds the data received from api
});

document.querySelector("#save-btn").addEventListener("click", () => {
  let conceptsCovered = document.querySelector("#conceptsCovered").value;
  let journalEntry = document.querySelector("#journalEntry").value;
  let journalDate = document.querySelector("#journalDate").value;

  let newEntry = buildJournalEntryObj(
    conceptsCovered,
    journalEntry,
    journalDate
  );
  console.log(newEntry);
  addNewJournalEntry(newEntry)
    .then(data => data.json())
    .then(dataJS => {
      console.log(dataJS.conceptsCovered);
      container.innerHTML = "";
      API.getJournalEntries().then(parsedentries => {
        renderJournalEntries(parsedentries); // parsedentries holds the data received from api
      });
    });
});
// add new journal entry with POST resource
function addNewJournalEntry(entry) {
  console.log("Hello");
  return fetch("http://localhost:3000/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  });
}
// build journal entry object
function buildJournalEntryObj(conceptsCovered, journalEntry, journalDate) {
  return {
    dateOfEntry: journalDate,
    titleOfEntry: conceptsCovered,
    journalNote: journalEntry
  };
}
// form validation
function checkInput() {
  let characters = /^[0-9a-zA-Z(){}:;.]+$/;

  if (
  (conceptsCovered.value.match(characters)) &&
    (journalEntry.value.match(characters))
  ) {
    return true;
  } else {
    alert("Please use valid characters");
    return false;
  }
}
