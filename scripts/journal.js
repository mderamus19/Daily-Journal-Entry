/*
    define your journal entry objects inside the journal entries array.
*/
const journalEntries = [
  {
    dateOfEntry: "June 5, 2019",
    titleOfEntry: "JavaScript Objects",
    journalNote: "Objects have keys and values",
    mood: "Happy"
  },

  {
    dateOfEntry: "June 5, 2019",
    titleOfEntry: "Arrays",
    journalNote: "Arrays hold a list of common items",
    mood: "Overwhelmed"
  },

  {
    dateOfEntry: "June 5, 2019",
    titleOfEntry: "Manipulating the DOM",
    journalNote:
      "Use querySelector or querySelectorAll to retrieve a single or list of components",
    mood: "frustrated"
  }
];

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
