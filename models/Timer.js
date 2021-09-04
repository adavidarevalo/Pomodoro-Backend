const mongoose = require("mongoose")

const TimerSchema = mongoose.Schema({
  pomodoro:{
    type: Number,
    required: true,
  },
  longBreak:{
    type: Number,
    required: true,
  },
  shortBreak:{
    type: Number,
    required: true,
  },
  backgroundAll:{
    type: String,
    required: true,
  },
  Text:{
    type: String,
    required: true,
  },
  userCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Timer", TimerSchema)