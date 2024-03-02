const express = require('express')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */

/* Server up */
app.listen(3000, () => {
  console.log('Server up in port 3000')
})
