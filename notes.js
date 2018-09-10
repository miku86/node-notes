const fs = require('fs');
const notesFile = './data/notes.json';

const fetchNotes = () => {
  // check if file for notes already exists
  if (fs.existsSync(notesFile)) {
    const data = fs.readFileSync(notesFile);
    return JSON.parse(data);
  } else {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync(notesFile, JSON.stringify(notes));
};

const logNote = (note) => {
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

const addNote = (title, body) => {
  const notes = fetchNotes();

  // create note from the cli
  const note = { title, body };

  // check for duplicate
  const duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length === 0) {
    // save new note into file
    notes.push(note);
    saveNotes(notes);
    console.log(`Note added.`);
    logNote(note);
  } else {
    console.log('Title already used.');
  }
};

const readAllNotes = () => {
  const notes = fetchNotes();
  console.log('All notes:');

  if (notes.length) {
    for (let note of notes) {
      logNote(note);
    }
  } else {
    console.log(`No Notes found.`);
  }
};

const readOneNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title);

  if (filteredNotes.length) {
    for (let note of filteredNotes) {
      logNote(note);
    }
  } else {
    console.log(`No Note with Title: ${title} found.`);
  }
};

const removeNote = (title) => {
  // fetch notes
  const notes = fetchNotes();
  // filter notes, removing the one with title argument
  const filteredNotes = notes.filter((note) => note.title !== title);
  // save new notes
  saveNotes(filteredNotes);

  console.log(`Removed ${notes.length - filteredNotes.length} note(s).`);
};

const showError = () => {
  console.log('Command not found');
};

module.exports = { addNote, readAllNotes, readOneNote, removeNote, showError };
