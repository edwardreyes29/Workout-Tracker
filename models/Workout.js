const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      weight: {
        type: Number,
        required: true
      },
      reps: {
        type: Number,
        required: true
      }, 
      sets: {
        type: Number,
        required: true
      },
    }
  ], 
  totalDuration: {
    type: Number,
    required: false
  }
});

// Set total duration
WorkoutSchema.methods.setTotalDuration = function() {
  this.totalDuration = 0;
  console.log("***********************")
  console.log(this.exercises)
  console.log("***********************")
  console.log("***********************")
  console.log(this.totalDuration)
  console.log("***********************")
  return this.totalDuration;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;