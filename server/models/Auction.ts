import mongoose from 'mongoose'

const AuctionSchema = mongoose.Schema({
  address: {
    type: String
  },
  squareMeters: {
    type: Number
  },
  startingPriceCZK: {
    type: Number,
    required: true
  },
  estimatedPriceCZK: {
    type: Number
  },
  startingPricePerMeter: {
    type: Number
  },
  estimatedPricePerMeter: {
    type: Number
  },
  minimalBidCZK: {
    type: Number
  },
  depositCZK: {
    type: Number
  },
  nearbyPurchases: {
    children: [{
      address: String,
      squareMeters: String,
      pricePerMeter: Number
    }]
  },
  dispositions: {
    type: String
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
  voluntary: {
    type: Boolean
  },
  starts: {
    type: Date
  },
  auctioneer: {
    type: String
  },
  mainImage: {
    type: String
  },
  links: [{
    type: String
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

export const Auction = mongoose.model('auction', AuctionSchema)
