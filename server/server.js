const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express ()
app.use(cors())
app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '96d971dbbb004c858772612e6b9be77d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


//Middleware
app.use(express.static(path.join(__dirname, "../public")))


const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`chillin' out, maxin', and relaxin' on port ${port}`)
})