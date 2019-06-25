

// In your main JavaScript module (journal.js) add a click event listener to the Record Journal Entry button at the bottom of your form. 
// When the user clicks the button, you need to create a new entry in your API. The HTTP method that you use to create resources is POST. 
// Guidance on syntax is provided below.


API.getJournalEntries()
    .then(parsedentries => {
      renderJournalEntries(parsedentries)      // parsedentries holds the data received from api
    })


document.querySelector("#save-btn").addEventListener("click", () => {
let conceptsCovered = document.querySelector("#conceptsCovered").value
let journalEntry = document.querySelector("#journalEntry").value
let journalDate = document.querySelector("#journalDate").value

let newEntry = buildJournalEntryObj(conceptsCovered, journalEntry, journalDate)
console.log(newEntry)
addNewJournalEntry(newEntry)
.then(data => data.json())
.then (dataJS => {
  console.log(dataJS.conceptsCovered)
  container.innerHTML = ""
  API.getJournalEntries()
  .then(parsedentries => {
    renderJournalEntries(parsedentries)      // parsedentries holds the data received from api
  }) 
})

function addNewJournalEntry(entry) {
  console.log("Hello")
  return fetch("http://localhost:3000/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  body: JSON.stringify(entry)
  })
}

function buildJournalEntryObj(conceptsCovered, journalEntry, journalDate) {
  return {
  dateOfEntry: journalDate,
  titleOfEntry: conceptsCovered,
  journalNote:journalEntry
}
}

// function formValidationChar () {

//   let letterNumberCharacter = /^[0-9a-zA-Z(){}:;.]+$/;

//   if ((conceptsCoveredInput.value.match(letterNumberCharacter))) {
//     return true;
//   } 
//   else {
//     alert("Improper characters used");
//     return false;
//   }
// let newLego = buildLegoObj(creatorName, color)
//   addNewLegoCreation(newLego)
//   .then( data => data.json())
//   .then( dataJS => {
//     console.log(dataJS.color)
//     legoList.innerHTML = ""
//     getLegos()
//   })
// })
    
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
