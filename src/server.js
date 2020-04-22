import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({ message: 'success' })
})

app.post('/', (req, res) => {
    res.json(req.body)
})

export const start = () => {
    return app.listen(5000, () => console.log('*** server listening ***'))
}
