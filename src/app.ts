import 'reflect-metadata'
import 'express-async-errors'
import express  from 'express'
import userRoutes from './routes/users.routes'

const app= express()

app.use(express.json())

app.use('/users', userRoutes)

app.listen(3000, () => {
    console.log("Servidor rodando")
})

export default app