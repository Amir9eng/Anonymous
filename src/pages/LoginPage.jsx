import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./access.scss";

const apiURL = 'https://ut23t.sse.codesandbox.io/api'

function LoginPage() {
  const [requesting, setRequesting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setRequesting(true);

    console.log(e.target);

    const username = e.target.login.value
    const password = e.target.password.value

    try {
      const { data } = await Axios.post(`${apiURL}/login`, {
        username, password
      })

      console.log(JSON.stringify(data, null, 2));
    } catch (err) {
      console.log({ err });
    } finally {
      setRequesting(false)
    }
  };

  return (
    <div className="page">
      <h2>
        <Link to="/">Anonymous</Link>
      </h2>

      <form onSubmit={(e) => submit(e)}>
        <h2 className="heading">Login</h2>
        <div className="input-field">
          <label>username / email</label>
          <input type="text" name="login" required />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>{" "}
        {requesting && <small>processing...</small>}
        <p>
          No account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
