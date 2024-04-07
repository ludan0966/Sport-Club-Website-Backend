

const express = require('express')
const app = express()
const cors = require('cors')
const userRoute = require('./routers/userRouter')

app.use(express.urlencoded({ extended: false }))


app.use(express.json())
app.use(cors())
app.use(userRoute)

app.listen(80, () => {
  console.log('server is running........')
})