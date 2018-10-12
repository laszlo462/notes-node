console.log('Starting notes.js')

module.exports.addNote = () => {
    console.log('addNote')
    return 'New note'
}

// Challenge to add new fuction in Section 3.10
module.exports.add = (a, b) => {
    console.log ('Attempting additon')
    // var sum = a + b
    return a + b
}