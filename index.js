const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://dbarsov9:Pcojm3t6fc@cluster0.m0coltm.mongodb.net/data?retryWrites=true&w=majority`, {useNewUrlParser: true,  useUnifiedTopology: true})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()

