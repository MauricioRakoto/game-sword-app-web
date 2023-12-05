import { NavLink } from 'react-router-dom'
import '../../assets/css/auth/auth.css'

const Auth = () => {
    return (
        <>
            <div className="title-auth">
                <div className="row">
                    <div className="icon">
                        <img src="http://localhost:8085/images/user.png" alt=""/>
                    </div>
                    <div className="text">
                        <h2>Authenfication</h2>
                    </div>
                </div>
            </div>
            <div className="images">
                <img src="http://localhost:8085/images/bg-auth-1.png" alt=""/>
            </div>
            <div className="links">
                <NavLink to="/users/auth/signin">
                    <img src="http://localhost:8085/images/user2.png" alt=""/>
                    <span>Signin</span>
                </NavLink>
                <NavLink to="/users/auth/signup">
                    <img src="http://localhost:8085/images/signup.png" alt=""/>
                    <span>Signup</span>
                </NavLink>
            </div>
        </>
    )
}

export default Auth