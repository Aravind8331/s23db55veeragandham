const mongoose = require("mongoose")
const electronicsSchema = mongoose.Schema({
type: String,
Manufacturer: String,
cost: Number
})
module.exports = mongoose.model("electronics",electronicsSchema)