import mongoose from 'mongoose'

const DistrictSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

export const District = mongoose.model('district', DistrictSchema)
