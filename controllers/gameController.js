import Game from '../models/gameModel.js'



export const addGame = async (req, res) => {
  try {
    const gameName = req.params.gamename

    const {  
       name,
       catName,
       img
    } = req.body

        // const _id = await Product.findOne({$or: [{ product_id }]})

    const newGame = new Game({ 
        name,
        catName: gameName,
        img
    })
   const save = await newGame.save()

   return res.status(200).json({ message: "Game created successfully!" })

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const updateGame = async (req, res) => {
  try {
   const game = await Game.findByIdAndUpdate(req.params.id, 
    { $set: req.body },
    { new: true }
    )

   return res.status(200).json(game)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const deleteGame = async (req, res) => {
  try {
   await Game.findByIdAndDelete(req.params.id)

   return res.status(200).json({ message: "Deleted Game successfully!" })

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const getGame = async (req, res) => {
  try {
   const GameOne = await Game.findById(req.params.id)

   return res.status(200).json(GameOne)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}

export const getGames = async (req, res) => {
  try {
   const Games = await Game.find()

   return res.status(200).json(Games)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
}



