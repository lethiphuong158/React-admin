import React, { SyntheticEvent, useState } from 'react';
import '../styles/Login.css'
import { Redirect } from "react-router-dom";
import api from "../lib/api";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState('');
  const [hasError, setHasError] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await api.post('/login', {
      email,
      password
    }).then(response => {
      setHasError(false)
      setMessage('')
      setRedirect(true)
    }).catch(error => {
      setHasError(true)
      if (error.response) {
        setMessage(error.response.data)
      }
    })

  }

  if (redirect) {
    return <Redirect to={'/'} />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        {hasError ? <div className="alert alert-danger" role="alert">
          {message}
        </div>: null}
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                 onChange={e => setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                 onChange={e => setPassword(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </main>
  );
};

export default Login;