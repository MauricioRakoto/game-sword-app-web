import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: '1d'
  })

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60  * 60 * 1000,
    
  })

  return token
}

export default generateTokenAndSetCookie