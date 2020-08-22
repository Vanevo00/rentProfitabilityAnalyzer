import mongoose from 'mongoose'

const CitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  county: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'county',
    required: true
  },
  district: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'district',
    required: true
  },
  mainImageLink: {
    type: String
  },
  population: {
    type: Number,
    required: true
  },
  popularity: {
    type: Number,
    required: true,
    default: 0
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const City = mongoose.model('city', CitySchema)
