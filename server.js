import express from 'express'

const app = express()
const PORT = process.env.PORT || 3200

app.get('/', (req, res) => {
    return res.send("my first website running at render")
})

app.listen(PORT, ()=> console.log('app running at port: ' + PORT))

