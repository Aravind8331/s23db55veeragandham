const mongoose = require("mongoose");

const electronicsSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Type is required"],
  },
  Manufacturer: {
    type: String,
    required: [true, "Manufacturer is required"],
    minlength: [2, "Manufacturer should have at least 2 characters"],
    maxlength: [50, "Manufacturer should have at most 50 characters"],
  },
  cost: {
    type: Number,
    required: [true, "Cost is required"],
    min: [0, "Price must be greater than or equal to 0"],
    max: [10000, "Price must be less than or equal to 10000"],
  },
});

module.exports = mongoose.model("electronics", electronicsSchema);
