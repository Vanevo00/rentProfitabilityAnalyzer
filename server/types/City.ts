export interface City extends Document {
  _id: string
  name: string
  country: string
  mainImageLink?: string
}
