const fs = require('fs');
const notesFile = './data/notes.json';

const fetchNotes = () => {
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
  const note = { title, body };
  const duplicates = notes.filter((note) => note.title === title);

  if (duplicates.length === 0) {
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

  notes.length
    ? notes.forEach((note) => logNote(note))
    : console.log(`No Notes found.`);
};

const readOneNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title);

  filteredNotes.length
    ? filteredNotes.forEach((note) => logNote(note))
    : console.log(`No Note with Title: ${title} found.`);
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  console.log(`Removed ${notes.length - filteredNotes.length} note(s).`);
};

const showError = () => {
  console.log('Command not found');
};

module.exports = { addNote, readAllNotes, readOneNote, removeNote, showError };
