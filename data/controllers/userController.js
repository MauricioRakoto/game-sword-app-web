import { userInfo } from 'os'
import User from '../models/userModel.js'
import generateTokenAndSetCookie from '../utils/helpers/generateTokenAndSetCookie.js'
import bcrypt from 'bcrypt'


export const signupUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body
        const user = await User.findOne({$or: [{ email }]})
    
        if(user) {
          return res.status(400).json({ message: "User already exists" })
        }
    
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const newUser = new User({ 
            firstname, 
            lastname,
            email,
            password: hashedPassword
        })
    
        await newUser.save()
    
        if(newUser) {
          generateTokenAndSetCookie(newUser._id,res)
    
          res.status(201).json({ message: "User created successfully" })
        } else {
          res.status(400).json({ message: "Invadid user data" })
        }
    
      } catch (err) {
          res.status(500).json({ message: err.message })
          console.log("Error in signupUser: ", err.message)
      }
}

export const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect) return res.status(400).json({ message: "Email or password" })

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({ message: "Signin successfully" })
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const logoutUser = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge:1})
        res.status(200).json({ message: "User logged out successfully" })
    } catch(err) {
        res.status(500).json({ message: err.message })
        console.log("Error in signupUser: ", err.message)
    }
}

export const getUsers = async (req, res) => {
    try {
     const users = await User.find()
  
     return res.status(200).json(users)
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const getUserProfile = async (req, res) => {
    const { lastname } = req.params
    try {
        const user = await User.findOne({lastname}).select("-password").select("-updateAt")

        if(!user) return res.status(400).json({message: "User not found"})

        res.status(200).json(user)
  
     return res.status(200).json(user)
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const followUnFollowUser = async (req, res) => {
   
}


export const getUser = async (req, res) => {
    try {
     const user = await User.findById(req.params.id)
  
     return res.status(200).json(user)
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

export const updateUser = async (req, res) => {
    try {
     const user = await User.findByIdAndUpdate(req.params.id, 
      { $set: req.body },
      { new: true }
      )
  
     return res.status(200).json(user)
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}


export const deleteUser = async (req, res) => {
    try {
     await User.findByIdAndDelete(req.params.id)
  
     return res.status(200).json("Delete successfully")
  
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  }