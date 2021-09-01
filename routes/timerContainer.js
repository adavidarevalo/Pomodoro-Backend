const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const timerController = require("../controllers/timerController")

router.post("/",
timerController.timerC
)
router.put("/:id",
auth,
timerController.timerUpgrade
)


module.exports = router