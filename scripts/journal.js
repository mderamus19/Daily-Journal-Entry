/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// API.methodToGetData().then(renderJournalEntries)
    

API.getJournalEntries()
    .then(parsedentries => {
      renderJournalEntries(parsedentries)      // parsedentries holds the data received from api
    })

