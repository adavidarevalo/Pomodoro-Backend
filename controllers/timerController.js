
const Timer = require("../models/Timer")
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")

exports.timerC = async(req, res) => {
  const Data = {
    "pomodoro": 25,
    "longBreak": 15,
    "shortBreak": 5
  }
  try {
     const timer = new Timer(Data)
     timer.save(),
     res.json(timer)
    
  } catch (error) {
    console.log(error)
    res.status(500).send("There was a Error")
  }
}
exports.timerUpgrade = async(req, res) => {
  try {
    const { pomodoro, longBreak, shortBreak} = req.body
    const existTimer = await Timer.findById(req.params.id)

    console.log("existTimer ", existTimer)

    if(!existTimer){
      return res.status(404).json({msg: "There was a Error"})
    }

  console.log("Pm ", existTimer.longBreak )

    const newTime = {}
    newTime.pomodoro = pomodoro || existTimer.pomodoro || 25
    newTime.longBreak = longBreak || existTimer.longBreak || 15
    newTime.shortBreak = shortBreak || existTimer.shortBreak || 5

    console.log("new Data ",newTime )
    console.log("id ", req.params.id)
    let timer;

    timer = await Timer.findOneAndUpdate({_id: req.params.id}, newTime, {new: true})
    res.json({timer})

  } catch (error) {
    console.log(error)
    res.status(500).send("There was a Error")
  }
}
//Actiualizar

