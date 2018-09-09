console.log('App started...');

const yargs = require('yargs');

const notes = require('./notes.js');

const args = yargs.argv;

if (args._ == 'add') {
  notes.addNote(args.title, args.body);
} else if (args._ == 'list') {
  notes.listNotes();
} else if (args._ == 'show') {
  notes.showNote();
} else if (args._ == 'remove') {
  notes.removeNote();
} else {
  notes.showError();
}
