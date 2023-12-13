import '../../../assets/css/navbar/navbar.css'

const Navbar = () => {
    return (
        <div className="col-w140 navbar">
            <ul className="navbar-links">
            <li>
                <a className="active" href="#">
                    <i class="fa-solid fa-house"></i>
                </a>
            </li> 
            <li>
                <a href="#">
                    <i className="fa-brands fa-windows"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-diamond"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-gamepad"></i>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Navbar