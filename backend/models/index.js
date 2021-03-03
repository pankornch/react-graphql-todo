const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/demo-api", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("💾 Database connected!"))
    .catch(err => console.error(err))

module.exports.Todo = mongoose.model("Todos", new mongoose.Schema({
    title: String,
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}))