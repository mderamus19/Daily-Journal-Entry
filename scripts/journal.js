fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedentries => {
      renderJournalEntries(parsedentries)      // parsedentries holds the data received from api
    })
    
// write a function that builds a journal entry HTML string template. To create, and return, a string template that
// represents a single journal entry object as HTML 

const makeJournalEntryComponent = journalEntryObject => {
  return `
                    <div class="journalEntry">
                        <h1>${journalEntryObject.titleOfEntry}</h1>
                          <section><h3>${journalEntryObject.journalNote}</h3></section>
                          <aside><h3>${journalEntryObject.dateOfEntry}</h3></aside>
                      </div>
                  `;
};

// stores a reference to the HTML element
const container = document.querySelector(".entryLog");

// iterate the array of journal entries and apply the style to the  HTML by calling the  makeJournalEntryComponent() function.
function renderJournalEntries (journalArray) {
for (let i = 0; i < journalArray.length; i++) {
  let journalEntry = journalArray[i];
  container.innerHTML += makeJournalEntryComponent(journalEntry);
}
}
