import mongoose from 'mongoose'

const RealEstateLinkSchema = mongoose.Schema({
  link: {
    type: String,
    required: true,
    unique: true
  },
  scraped: {
    type: Boolean,
    required: true,
    default: false
  },
  website: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'realEstateWebsite',
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

export const RealEstateLink = mongoose.model('realEstateLink', RealEstateLinkSchema)
