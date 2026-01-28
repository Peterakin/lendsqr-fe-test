import "./LoginPage.scss";
import { useState } from "react";
import logo from "../../assets/logo.png";
import illustration from "../../assets/pablo-sign-in 1.svg"

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login">
            <div className="login__left">
                <img src={logo} alt="Lendsqr logo" className="login__logo" />
                <img src={illustration} alt="Login illustration" className="login__image" />
            </div>

            <div className="login__right">
                <h2>Welcome!</h2>
                <p>Enter details to login.</p>

                <form className="login__form">
                    <input type="email" placeholder="Email" />

                    <div className="password__wrapper">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? "HIDE" : "SHOW"}
                        </span>
                    </div>

                    <a href="#" className="forgot">
                        FORGOT PASSWORD
                    </a>

                    <button type="submit">LOG IN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;