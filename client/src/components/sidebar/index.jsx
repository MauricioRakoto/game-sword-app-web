import Headers from '../headers/Headers'
import Navbar from "./navbar/Navbar"
import Content from './content'

const Sidebar = () => {
    return (
        <>
            <Headers/>
            <div className="sidebar">
                <Navbar/>
                <Content/>
            </div>
        </>
    )
}

export default Sidebar