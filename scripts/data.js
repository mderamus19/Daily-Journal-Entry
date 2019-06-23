    const API = {
        getJournalEntries () {
            return fetch("http://localhost:3000/journalEntries")
                .then(response => response.json())
        }
    }

    //     fetch("url", { // Replace "url" with your API's URL
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(legoToSave)
// })

// Use `fetch` with the POST method to add your entry to your API
// fetch("url", { // Replace "url" with your API's URL
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(newJournalEntry)
// })