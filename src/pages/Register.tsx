import React, {Component, SyntheticEvent} from 'react';
import { Redirect } from 'react-router-dom'
import api from "../lib/api";

class Register extends Component {
    state = {
        redirect : false,
    }

    firstName = '';
    lastName = '';
    email = '';
    password = '';
    passwordConfirm = '';

    submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await api.post('register', {
            firt_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        })

        this.setState({
            redirect : true
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/login'}/>
        }
        return (
            <main className="form-signin">
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <div className="form-floating">
                        <input  className="form-control" placeholder="First name"
                            onChange={e => this.firstName = e.target.value}
                        />
                        <label>First name</label>
                    </div>
                    <div className="form-floating">
                        <input  className="form-control" placeholder="Last name"
                                onChange={e => this.lastName = e.target.value}
                        />
                        <label>Last name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                               onChange={e => this.email = e.target.value}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={e => this.password = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password Confirm"
                               onChange={e => this.passwordConfirm = e.target.value}
                        />
                        <label htmlFor="floatingPassword">Password Confirm</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        );
    }
}

export default Register;