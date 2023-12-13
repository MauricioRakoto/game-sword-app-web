import '../../assets/css/headers/headers.css'

const Headers = () => {
    return (
        <div className="headers">
            <div className="col-w140 search">
                <button>
                    <i className="fa-solid fa-search"></i>
                </button>
                <span>Search ...</span>
            </div>
            <div className="col-w140 logo">
                <h3>Game Sword</h3>
            </div>
            <div className="col-w700 notifications">
                <div className="items">
                    <div className="item">
                        <div className="icon">
                            <i className="fa-solid fa-heart"></i>
                            <span className="numbers">0</span>
                        </div>
                        <div className="modal">
                            <div className="content">
                            <div className="data">
                                <div className="image">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <div className="image">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-message"></i>
                        <span className="numbers">0</span>
                    </div>
                    <div className="modal">
                        <div className="content">
                            <div className="data">
                                <div className="image">
                                    <i class="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <div className="image">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="icon">
                        <i className="fa-solid fa-bell"></i>
                        <span className="numbers">0</span>
                    </div>
                    <div className="modal">
                        <div className="content">
                            <div className="data">
                                <div className="image">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="data">
                                <div className="image">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="message">
                                    <div className="text">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>   
                                    </div>
                                    <div className="datetime">
                                        <p>08 Octobre 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-w200 profiles">
            <div className="my-profile">
                <i className="fa-solid fa-user"></i>
                <div className="modal">
                    <div className="photo">
                        <div className="image">
                            <i className="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className="auth">
                        <a href="auth.html">
                            <i className="fa-solid fa-users"></i>
                            <span>Signin or Signup</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Headers