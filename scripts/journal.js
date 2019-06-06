/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned 
*/
const objectsJournalEntry = {
  dateOfEntry: "June 5, 2019",
  titleOfEntry: "JavaScript Objects",
  journalNote: "Objects have keys and values",
  mood: "Happy"
};

// const arraysJournalEntry = {
//   dateOfEntry: "June 5, 2019",
//   titleOfEntry: "Arrays",
//   journalNote: "Arrays hold a list of common items",
//   mood: "Overwhelmed"
// };

// const domJournalEntry = {
//   dateOfEntry: "June 5, 2019",
//   titleOfEntry: "Manipulating the DOM",
//   journalNote:
//     "Use querySelector or querySelectorAll to retrieve a single or list of components",
//   mood: "frustrated"
// };

const journalEntries = [];
journalEntries.push({
  dateOfEntry: "June 5, 2019",
  titleOfEntry: "Manipulating the DOM",
  journalNote:
    "Use querySelector or querySelectorAll to retrieve a single or list of components",
  mood: "frustrated"
});
journalEntries.push({
  dateOfEntry: "June 6, 2019",
  titleOfEntry: "New",
  journalNote: "this is it",
  mood: "excited"
});

// console.log(objectsJournalEntry);
// console.log(arraysJournalEntry);
// console.log(domJournalEntry);
console.log(journalEntries);
