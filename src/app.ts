import 'reflect-metadata'
import 'express-async-errors'
import cors from 'cors'
import express  from 'express'
import userRoutes from './routes/users.routes'
import { errorHandlingMiddleware } from './middlewares/errorHandling.middleware'
import contactRoutes from './routes/contacts.routes'

const app= express()
app.use(cors())
app.use(express.json())

app.use('/users', userRoutes)
app.use('/contacts', contactRoutes)
app.use(errorHandlingMiddleware)

app.listen(3000, () => {
    console.log("Servidor rodando")
})

export default app