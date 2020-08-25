import mongoose from 'mongoose'

const UserActivationSchema = mongoose.Schema({
  activationCode: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'user'
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const UserActivation = mongoose.model('userActivation', UserActivationSchema)
