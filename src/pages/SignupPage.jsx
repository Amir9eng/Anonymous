import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Axios from 'axios';
import "./access.scss";

const apiURL = 'https://ut23t.sse.codesandbox.io/api'

function SignupPage() {
  const [requesting, setRequesting] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setRequesting(true);

    console.log(e.target);

    const username = e.target.username.value
    const name = e.target.name.value
    const password = e.target.password.value

    try {
      const { data } = await Axios.post(`${apiURL}/signup`, {
        username, password, name
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
        <h2 className="heading">Sign up</h2>
        <div className="input-field">
          <label>Name</label>
          <input type="text" name="name" required />
        </div>
        <div className="input-field">
          <label>username</label>
          <input type="text" name="username" required />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Register</button>{" "}
        {requesting && <small>processing...</small>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default SignupPage
