const fs = require('fs');
const notesFile = './data/notes.json';

const addNote = (title, body) => {
  console.log('add note');

  let notes = [];
  // create note from the cli
  const note = { title, body };

  // check if file for notes already exists
  if (fs.existsSync(notesFile)) {
    const data = fs.readFileSync(notesFile);
    notes = JSON.parse(data);
  }

  // check for duplicate
  const duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length === 0) {
    // save new note into file
    notes.push(note);
    fs.writeFileSync(notesFile, JSON.stringify(notes));
  } else {
    console.log('Title already in Notes');
  }
  console.log(notes);
};

const listNotes = () => {
  console.log('list all notes');
};

const showNote = () => {
  console.log('show note');
};

const removeNote = () => {
  console.log('remove note');
};

const showError = () => {
  console.log('Command not found');
};

module.exports = { addNote, listNotes, showNote, removeNote, showError };
