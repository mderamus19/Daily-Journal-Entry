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