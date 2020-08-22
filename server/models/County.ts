import mongoose from 'mongoose'

const CountySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

export const County = mongoose.model('county', CountySchema)
