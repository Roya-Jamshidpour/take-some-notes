
// Handle when a user submits feedback

  // Post a new tip to the page
   const getNotes = () =>
  fetch('api/notes', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

 const addNote = (notes) =>
fetch('api/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(notes),
})
  .then((response) => response.json())
  .then((data) => {
    alert(data);
    createCard(notes);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

// When the page loads, get all the tips
getNotes().then((data) => data.forEach((notes) => console.log('worked')));



  module.exports = getNotes
  module.exports = addNote