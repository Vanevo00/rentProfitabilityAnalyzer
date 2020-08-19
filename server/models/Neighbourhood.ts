import mongoose from 'mongoose'

const NeighbourhoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'city'
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const Neighbourhood = mongoose.model('neighbourhood', NeighbourhoodSchema)
