fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then(entries => entries.json())  // Parse as JSON
    .then(parsedentries => {
      console.log(parsedentries)                          // What should happen when we finally have the array?
    })
    
// write a function that builds a journal entry HTML string template. To create, and return, a string template that
// represents a single journal entry object as HTML 

const makeJournalEntryComponent = journalEntryObject => {
  return `
                    <div class="journalEntry">
                        <h1>${journalEntryObject.titleOfEntry}</h1>
                          <section>${journalEntryObject.journalNote}</section>
                          <aside>${journalEntryObject.dateOfEntry}</aside>
                      </div>
                  `;
};

// stores a reference to the HTML element
const renderJournalEntries = document.querySelector(".entryLog");

// iterate the array of journal entries and apply the style to the  HTML by calling the  makeJournalEntryComponent() function.
for (let i = 0; i < journalEntries.length; i++) {
  let journalEntry = journalEntries[i];
  renderJournalEntries.innerHTML += makeJournalEntryComponent(journalEntry);
}
