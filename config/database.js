const mongoose = require('mongoose')

// db configuration
const configureDB =  () => {
    mongoose.Promise = global.Promise
    const MONGODB_URI = process.emv.MONGODB_URI || 'mongodb://localhost:27017/aug-notes-app'
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to database')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
