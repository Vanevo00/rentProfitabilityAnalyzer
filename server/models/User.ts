import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  activated: {
    type: Date
  },
  favoriteFlats: [{
    type: mongoose.Schema.Types.ObjectID,
    ref: 'flat'
  }],
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

export const User = mongoose.model('user', UserSchema)
