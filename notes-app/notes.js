const fs = require('fs')
const chalk = require('chalk')


const getNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if (note) console.log(chalk.italic.inverse(note.title)+'  '+note.body)
    else console.log(chalk.red('No such note present!'))
}

const readNotes = () => {
    const notes = loadNotes()
    notes.forEach(note => {
    console.log(chalk.italic.inverse(note.title)+'  '+note.body)
})
}
    

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=>note.title===title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green('New note added succesfully'))
    }
    else {
        console.log(chalk.red('Title taken already !'))
    }


}

const removeNote = (title) => {
    const notes = loadNotes()
    notesToKeep = notes.filter((note) => note.title != title)
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.magenta('Note deleted Succesfully!'))
    }
    else {
        console.log(chalk.red('No such note present'))
    }

}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNotes: readNotes
}