
  // stores a reference to the HTML element
const container = document.querySelector(".entryLog");

// iterate the array of journal entries and apply the style to the  HTML by calling the  makeJournalEntryComponent() function.
function renderJournalEntries (journalArray) {
for (let i = 0; i < journalArray.length; i++) {
  let journalEntry = journalArray[i];
  container.innerHTML += makeJournalEntryComponent(journalEntry);
}
}