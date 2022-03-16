const express = require('express')
const cors = require('cors')

const app = express ()
app.use(cors())
app.use(express.json())


//Middleware



const port = process.env.PORT || 4500

app.listen(port, () => {
    console.log(`chillin' out, maxin', and relaxin' on port ${port}`)
})