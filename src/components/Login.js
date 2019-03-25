import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"


class Login extends Component {

    state = {
        
    }
    onChange = (event) => {

        this.setState({ [event.target.name]: event.target.value })
    }

    login = (event) => {
        event.preventDefault()

        axios.post("/login", this.state)
        .then((result) =>{
            console.log(result.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div className="loginBackground">
                <div className="container">
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <h1>Login</h1>
                            </div>

                            <form onSubmit={this.login}>
                                <input  onChange={this.onChange} type="text"  className="fadeIn second" name="email" placeholder="login" />
                                <input  onChange={this.onChange} type="text"  className="fadeIn third" name="password" placeholder="password" />
                                <input type="submit" className="fadeIn fourth" value="Log In" />
                                <br />
                                <Link className="underlineHover" to={"/user/password"}>Forgot Password?</Link>
                            </form>
                            <br />
                            
                            <div id="formFooter">
                                <Link className="underlineHover" to={"/register"}>Create Account</Link>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Login;


