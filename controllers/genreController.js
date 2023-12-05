import Genre from '../models/genreModel.js'



export const addGenre = async (req, res) => {
  try {
   const newGenre = new Genre(req.body)
   const save = await newGenre.save()

   return res.status(200).json({ message: "Genre created successfully!" })

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const updateGenre = async (req, res) => {
  try {
   const genre = await Genre.findByIdAndUpdate(req.params.id, 
    { $set: req.body },
    { new: true }
    )

   return res.status(200).json(genre)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const deleteGenre = async (req, res) => {
  try {
   await Genre.findByIdAndDelete(req.params.id)

   return res.status(200).json("Delete successfully")

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const getGenre = async (req, res) => {
  try {
   const GenreOne = await Genre.findById(req.params.id)

   return res.status(200).json(GenreOne)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const getGenres = async (req, res) => {
  try {
   const Genres = await Genre.find()

   return res.status(200).json(Genres)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}



