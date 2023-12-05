import React from 'react'
import '../../../assets/css/pages/home/genre-games.css'

const GenreGames = () => {
  return (
    <div className="genres-games">
        <div className="title">
            <h4>Genres</h4>
        </div>
        <div className="items">
            <div className="item">
                <div className="image">
                    <img src="http://localhost:8085/images/2023 BMW CAR  _ Car aesthetic _ Cool cars _ car wallpapers.jfif" alt=""/>
                </div>
                <div className="infos">
                    <div className="name">
                        <h3>Actions</h3>
                    </div>
                    <div className="nombres">
                        <span>100</span>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="image">
                    <img src="http://localhost:8085/images/téléchargement (1).jfif" alt=""/>
                </div>
                <div className="infos">
                    <div className="name">
                        <h3>Sports</h3>
                    </div>
                    <div className="nombres">
                        <span>50</span>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="image">
                    <img src="http://localhost:8085/images/games/mario/Felt Empty Without Luigi _ Mario's Flat Butt.jfif" alt=""/>
                </div>
                <div className="infos">
                    <div className="name">
                        <h3>Arcades</h3>
                    </div>
                    <div className="nombres">
                        <span>200</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenreGames