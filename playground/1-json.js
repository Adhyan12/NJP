/* this file demonstrates how the data is stringified and parsed in JSON*/



const fs = require('fs')
const { json } = require('stream/consumers')



const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())
data.name='Adhyan Gupta'
data.age=22
const dataJSON=JSON.stringify(data)
fs.writeFileSync('1-json.json',dataJSON)
console.log(dataJSON)