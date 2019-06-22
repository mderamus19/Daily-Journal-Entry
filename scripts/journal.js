

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. 
// When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. 
// Guidance on syntax is provided below.

API.getJournalEntries()
    .then(parsedentries => {
      renderJournalEntries(parsedentries)      // parsedentries holds the data received from api
    })

document.querySelector("#save-btn").addEventListener("click", () => {

    
})
// Invoke the factory function, passing along the form field values
// const newJournalEntry = ??
// This is a factory function, because it returns an object
// function buildLegoObj(creatorName, color) {
//     return ({
//       creator: creatorName,
//       color: color
//     })
//   }
