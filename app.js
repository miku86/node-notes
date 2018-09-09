console.log('App started...');

const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const args = yargs.argv;
console.log(args._);

if (args._ == 'add') {
  notes.addNote();
} else if (args._ == 'list') {
  notes.listNotes();
} else if (args._ == 'show') {
  notes.showNote();
} else if (args._ == 'remove') {
  notes.removeNote();
} else {
  notes.showError();
}
