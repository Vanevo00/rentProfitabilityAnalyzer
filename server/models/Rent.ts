import mongoose from 'mongoose'

const RentSchema = mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  squareMeters: {
    type: Number,
    required: true
  },
  rentCZK: {
    type: Number,
    required: true
  },
  rentPerMeter: {
    type: Number,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'city',
    required: true
  },
  neighbourhood: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'neighbourhood'
  },
  dispositions: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const Rent = mongoose.model('rent', RentSchema)
