import Headers from "../../components/headers"
import Navbar from "../../components/sidebar/navbar/Navbar"

import StartGames from "./StartGames/StartGames"
import GenreGames from "./GenreGames/GenreGames"

const Home = () => {
  return (
    <div>
      <Headers/>
      <div className="sidebar">
        <Navbar/>
        <div className="content">
            <StartGames/>
            <GenreGames/>
        </div>
      </div>
    </div>  
  )
}

export default Home
