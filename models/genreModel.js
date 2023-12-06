import mongoose from "mongoose"

const genreSchema = mongoose.Schema({
    name: {
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


const Genre = mongoose.model('Genre', genreSchema)
export default Genre
