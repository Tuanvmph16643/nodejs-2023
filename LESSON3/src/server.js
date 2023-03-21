// const express = require('express')
// import express from 'express'
// const productRouter = require('./routers/product')
// import productRouter from './routers/product.js'

// const app = express()


// app.get('/', (req, res) => {
//     res.send("<h1>Hello world</h1>")
//     res.end()
// })
// // Router
// app.use('/api', productRouter)

// app.listen(8000, () => {
//     console.log("Server running on port 8000");
// })

import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import productRouter from './routers/product.js'
import fileRouter from './routers/image.js'

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use('/api', productRouter)

app.use('/upload', fileRouter)

app.get('/', (req,res)=>{
    const html = fs.readFileSync(path.join(__dirname, "views/home.html"), "utf-8")
    res.send(html)
    res.end()
})

app.listen(8000, ()=>{
    console.log('server running o port 8000');
})