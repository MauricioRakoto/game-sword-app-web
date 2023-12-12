
import '../../../assets/css/pages/home/genre-games.css'

import React, { useEffect, useState } from "react"

const GenreGames = () => {
  const [genres, setGenres] = useState([])

  const fetchData = () => {
    fetch("http://localhost:8000/genres")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setGenres(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="genres-games">
        <div className="title">
            <h4>Genres</h4>
        </div>
        
        {genres.length > 0 && (
            <div className='items'>
            {genres.map(genre => (
                <div className="item">
                    <div className="image">
                        <img src="http://localhost:8085/images/2023 BMW CAR  _ Car aesthetic _ Cool cars _ car wallpapers.jfif" alt=""/>
                    </div>
                    <div className="infos">
                        <div className="name">
                            <h3>{genre.name}</h3>
                        </div>
                        <div className="nombres">
                            <span>100</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}
            

        
    </div>
  )
}





export default GenreGames