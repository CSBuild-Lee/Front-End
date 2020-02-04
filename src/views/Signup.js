import React, { Component } from 'react';

class Signup extends Component {
    state = {
        userCreds: {
            username: "",
            password: ""
        }
    };

    changeHandler = e => {
        e.preventDefault();
        this.setState({
            userCreds: {
                ...this.state.userCreds,
                [e.target.name] : e.target.value
            }
        });
    };

    submitHandler = e => {
        e.preventDefault();
        // signUp needs to match action syntax, which is being passed in as a prop
        this.props.signUp(this.state.userCreds).then(() => {
            this.props.history.push("/");
            // Push argument might need to change?
        });
    };

    render() {
        return (
            <>
                {/* Do we need to pass error through props here? */}
                <div className="signup-container">
                    <form className="signup" onSubmit={this.submitHandler}>
                        <div className="inputs-container">
                            <label>Username</label>
                            <input 
                                id="username"
                                type="text"
                                name="username"
                                value={this.state.userCreds.username}
                                placeholder="Enter your username."
                                onChange={this.changeHandler}
                            />
                            <input 
                                id="password"
                                type="password"
                                name="password"
                                value={this.state.userCreds.password}
                                placeholder="Enter your password."
                                onChange={this.changeHandler}
                            />
                            <button type="submit">Create Account and Game Away</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Signup;