const validator = require('validator');
const chalk = require('chalk')
const notes = require('./notes.js');
const yargs = require('yargs');
const { argv, demandOption } = require('yargs');



yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    decribe: 'Remove a note',
    builder: {
        title: {
            decribe: 'Title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            decribe: 'title of the note you wanna read',
            demandOption: true,
            type: 'string'
        }
    },
    handler() {
        notes.getNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    decribe: 'List all the notes',
    handler() {
        notes.readNotes()
    }
}).parse()


