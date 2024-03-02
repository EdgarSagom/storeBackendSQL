const express = require('express')
const productRoutes = require('./routes/productRoutes')

const app = express()

/* Middlewares */
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

/* Routes */
app.use('/api/v1', productRoutes)

/* Server up */
app.listen(3000, () => {
  console.log('Server up in port 3000')
})
