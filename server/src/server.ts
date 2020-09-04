import express, { Application } from 'express'
import cors from 'cors'
import routes from './routes'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('App listening on port 3333'))