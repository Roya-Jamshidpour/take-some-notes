const router = require('express').Router();

 // Handle when a user submits feedback

  // Post a new tip to the page
   const getNotes = () =>
  fetch('api/notes', {
    method: 'GET', // or 'PUT'
    newNote: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    console.log("i worked")
     if ((error) => {
      console.error('Error:', error);
    });

 const addNote = (data) =>
fetch('api/notes', {
  method: 'POST',
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    alert(data);
    console.log('i worked again')
  })
   if ((error) => {
    console.error('Error:', error);
  });

// // When the page loads, get all the tips
// getNotes().then((data) => data.forEach((data) => console.log('worked')));


  module.exports = router
  module.exports = getNotes
  module.exports = addNote