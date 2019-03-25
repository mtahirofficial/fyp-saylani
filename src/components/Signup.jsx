import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"

class Signup extends Component {

    state = {
        fName: ''
    }
    onChange = (event) => {

        this.setState({ [event.target.name]: event.target.value }, () => {
            console.log(this.state)
        })
    }
    submit = (event) => {
        event.preventDefault()

        axios.post("/regist", this.state)
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
                                <h1>Signup</h1>
                            </div>


                            <form onSubmit={this.submit} >
                                <input required type="text" className="fadeIn second" name="fName" placeholder="First Name" onChange={this.onChange} />
                                <input required type="text" className="fadeIn third" name="lName" placeholder="Last Name" onChange={this.onChange} />
                                <input required type="email" className="fadeIn second" name="email" placeholder="Email" onChange={this.onChange} />
                                <input required type="password" className="fadeIn third" name="password" placeholder="Password" onChange={this.onChange} />
                                <input required type="password" className="fadeIn second" name="cPassword" placeholder="Confirm Password" onChange={this.onChange} />
                                <input type="submit" className="fadeIn fourth" value="Sign Up" />

                            </form>
                            <br />
                            <div id="formFooter">
                                Have an account ?   <Link className="underlineHover" to={"/login"}>Sign IN</Link>
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        );
    }
}

export default Signup;


