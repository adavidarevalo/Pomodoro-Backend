const express = require('express');
const cors = require('cors');
const conectDB = require('./config/db')

const app = express();

conectDB();

app.use(cors())

app.use( express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use('/api/user', require('./routes/user'))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/timerContainer", require("./routes/timerContainer"))

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});