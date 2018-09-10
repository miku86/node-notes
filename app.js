const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};

const args = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'List one specific note', {
    title: titleOptions,
  })
  .help().argv;

if (args._ == 'add') {
  notes.addNote(args.title, args.body);
} else if (args._ == 'list') {
  notes.readAllNotes();
} else if (args._ == 'show') {
  notes.readOneNote(args.title);
} else if (args._ == 'remove') {
  notes.removeNote(args.title);
} else {
  notes.showError();
}
