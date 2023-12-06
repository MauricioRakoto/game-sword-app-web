import mongoose from "mongoose"

const gameSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    catName: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
        default: "img.png"
    }
   
  }, {
    timestamps: true,
});


const Game = mongoose.model('Game', gameSchema)
export default Game
