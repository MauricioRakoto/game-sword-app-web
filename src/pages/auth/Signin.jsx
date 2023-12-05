import { NavLink } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="auth">
            <div className="left">
                <div className="row title-auth">
                    <div className="row">
                        <div className="icon">
                        <img src="http://localhost:8085/images/user.png" alt=""/>
                    </div>
                    <div className="text">
                        <h2>Authenfication</h2>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '20px'}}>
                <div className="account">
                    <NavLink className="active" to="/users/auth/signin">
                        <img src="http://localhost:8085/images/user2.png" alt=""/>
                        <span>Signin</span>
                    </NavLink>
                </div>
                <div className="account">
                    <NavLink to="/users/auth/signup">
                        <img src="http://localhost:8085/images/signup.png" alt=""/>
                        <span>Signup</span>
                    </NavLink>
                </div>
            </div>
            <div className="row">
                <div class="my-account">
    
                </div>
            </div>
        </div>
        <div className="right">
            <div className="box">
                <div className="close">
                    <NavLink to="/users/auth">&times;</NavLink>
                </div>
                <form>
                    <div className="user-image">
                        <div className="image">
                            <img src="http://localhost:8085/images/user.png" alt=""/>
                        </div>
                    </div>
                    <div className="form-group-input">
                        <label style={{width: '80px'}}>Email</label>
                        <input type="text" placeholder="Your Email"/>
                    </div>
                    <div className="form-group-input" style={{marginTop: '30px'}}>
                        <label style={{width: '80px'}}>Password</label>
                        <input type="text" placeholder="Your Password"/>
                    </div>
                    <div className="form-group-button">
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Signin