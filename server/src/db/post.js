import mongoose from 'mongoose'
import PROGRESSSTATUS from '../constants/constants.js'


const postSchema = new mongoose.Schema({
  post: String,
  progress: {
    type: String,
    enum: Object.values(PROGRESSSTATUS),
    default: PROGRESSSTATUS.NEW
  },
  date: { type: Date, default: Date.now },
})

export default mongoose.model('post', postSchema);