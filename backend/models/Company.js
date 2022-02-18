const mongoose = require("mongoose");
const { Schema } = mongoose;

const CompanySchema = new Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  // },
  nature: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  additional: {
    type: String,
    required: true,
  },
  ceo: {
    type: String,
    required: true,
  },
  aboutUs: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  gstNumber: {
    type: String,
    required: true,
  },
  crn: {
    type: String,
    required: true,
  },
  noEmployes: {
    type: String,
    required: true,
  },
  yearEstablishment: {
    type: String,
    required: true,
  },
  legalStatus: {
    type: String,
    required: true,
  },
  // tag:{
  //     type: String,
  //     default: "General"
  // },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("company", CompanySchema);
