const fs = require('fs')
const path = require('path')

const readableStream = fs.createReadStream(path.resolve(__dirname, 'input.txt'), {
    highWaterMark: 15
})

const writeableStream = fs.createWriteStream('output.txt')

readableStream.on('readable', () => {
    try {
        // write to a new file
        writeableStream.write(`${readableStream.read()}\n`)
    } catch (err) {
        console.log(err)
    }
})

readableStream.on('end', () => {
    console.log('Done')
})