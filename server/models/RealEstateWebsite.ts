import mongoose from 'mongoose'

const RealEstateWebsiteSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  domain: {
    type: String,
    required: true,
    unique: true
  }
})

export const RealEstateWebsite = mongoose.model('realEstateWebsite', RealEstateWebsiteSchema)
