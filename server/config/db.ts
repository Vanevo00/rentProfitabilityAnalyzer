const mongoose = require('mongoose')
const db = 'mongodb://rents_analyzer_mongo:27017/server'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('mongoDB connected')
  } catch (error) {
    console.log('error:', error)
    process.exit(1) // exit with failure
  }
}

export default connectDB
