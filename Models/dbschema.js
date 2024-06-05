const mongoose = require("mongoose")

const schema = new mongoose.Schema({
  name:
  {  
    type: String,
    required: true
  },
  redgno:
  {
    type: Number,
    required: true
  },
  email:
  {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
  },
  mob:
  {
    type: Number,
    required: true
  },
  dob:
  {
    type: Date,
  },
  gender:
  {
    type: String
  },
  branch: {
    type: String
  },
  password: {
    type: String
  },
  events: {
    type: Array,
  },
  todos: {
    type: Array, 
  },
  notes: {
    type: Array,
  }, 
  subjects: [
    {
      name: {
        type: String,
        required: true,
      },
      attendance: [
        {
          date: {
            type: Date, 
            required: true,
          },
          status: {
            type: String,
            enum: ['present', 'absent'],
            required: true,
          },
        },
      ],
    },
  ],
})
const user = mongoose.model("studdatas", schema)
module.exports = user;