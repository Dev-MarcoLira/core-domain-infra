import { config } from 'dotenv'
config()

import express from 'express'
import routes from './routes/index'
import cors from 'cors'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())
app.use(cors())
routes.forEach(route => app.use(route))

app.listen(PORT, () => {
    console.log(`The server is listening on port ${ PORT }`)
})