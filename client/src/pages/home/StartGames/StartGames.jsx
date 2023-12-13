import React from 'react'
import '../../../assets/css/pages/home/start-game.css'

const StartGames = () => {
  return (
    <div class="start-games"> 
        <div className="items">
            <button className="item">
                <i className="fa-solid fa-play"></i>
                <span>Play</span>
            </button>
            <button className="item">
                <i className="fa-solid fa-money-bill"></i>
                <span>By Game</span>
            </button>
            <button className="item">
                <i className="fa-solid fa-search"></i>
                <span>Find Game</span>
            </button>
        </div>
    </div>
  )
}

export default StartGames