import mongoose from 'mongoose'
import { Paginator } from '../types/Paginator'

const FlatSchema = mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  squareMeters: {
    type: Number,
    required: true
  },
  priceCZK: {
    type: Number,
    required: true
  },
  pricePerMeter: {
    type: Number,
    required: true
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
  links: [{
    type: String
  }],
  mainImage: {
    type: String
  },
  floor: {
    type: Number
  },
  lift: {
    type: Boolean
  },
  agency: {
    type: String
  },
  contact: {
    type: String
  },
  ownershipType: {
    type: String,
    enum: ['private', 'cooperative']
  },
  monthlyExpensesAssociation: {
    type: Number
  },
  monthlyExpensesOther: {
    type: Number
  },
  parking: {
    type: Boolean
  },
  balcony: {
    type: Boolean
  },
  garden: {
    type: Boolean
  },
  heating: {
    type: String
  },
  publicTransport: {
    type: String
  },
  mortgaged: {
    type: Boolean
  },
  notes: {
    type: String
  },
  neighbourhood: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'neighbourhood'
  },
  city: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'city',
    required: true
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'user'
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
})

export const Flat = mongoose.model('flat', FlatSchema)
