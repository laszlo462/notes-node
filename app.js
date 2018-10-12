console.log('Starting app.js')

const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes.js')

// console.log(_.isString(true))
// console.log(_.isString('Steve'))
var filteredArray = _.uniq(['Steve', 1, 'Steve', 1, 2, 3, 4])
console.log(filteredArray)

// var sum = notes.add(27, 10)
// console.log('Result:', notes.add(12, 8))

// var res = notes.addNote()
// console.log(res)

// var user = os.userInfo()

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`)