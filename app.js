console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const notes = require('./notes.js')

var sum = notes.add(27, 10)
console.log(sum)

// var res = notes.addNote()
// console.log(res)

// var user = os.userInfo()

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`)