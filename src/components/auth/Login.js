import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions';

class Login extends Component {
    state = {
        usercreds: {
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
        this.props.login(this.state.userCreds).then(() => {
            if (localStorage.getItem('token')) {
                this.props.history.push("/");
                // Push argument might need to change?
            }
        });
    };

    render() {
        return (
            <>
                {/* Do we need to pass error through props here? */}
                <div className="login-container">
                    <form className="login" onSubmit={this.submitHandler}>
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
                            <button type="submit">Login to Play</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default connect(
    null, 
    { login }
)(Login)