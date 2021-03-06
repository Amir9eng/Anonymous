import React, {useState} from 'react'
import { Link } from "react-router-dom";
import "./access.scss";
import "./AnonMessenger";
import Axios from 'axios';

const capitalize = (w) => w[0].toUpperCase().concat(w.substring(1))


const MessageCount = ({textCount}) =>  <span style={{color:'black'}}className="indicator">{textCount}</span>
function AnonMessenger({ match }) {

  const [textCount, setTextCount] = useState(0)

  const anon = match.params.anon;

  const handleMessageSubmit = (e)=>{
    e.preventDefault();
    
     Axios.post(`http://localhost:3030/api/v1/${anon}`,{message:e.target.text.value}).then(response => console.log(response)).catch(console.log)
  }
  

  return (
    <div className="page" style={{ color: "white" }}>
      <h2 className="heading">Drop a message for {capitalize(anon)}</h2>
      <form onSubmit={(e) => handleMessageSubmit(e)} style={{ paddingTop: "1rem", margin: '4rem auto 2rem' }}>
        <p style={{ color: "rgba(0, 0, 0, 0.7)" }}>
          Feel free to say anything. He won't know it's you. We promise{" "}
          <span role="img" aria-label="wink">
            😉
          </span>
        </p>
        <div className="input-field">
          <label>Message</label>
          <textarea onChange={(e) => setTextCount((e.target.value).length)} name="text" rows="10" required maxLength= "400" placeholder="Type a message here.....">
          
          </textarea>
          <MessageCount textCount={textCount} />
          
        </div>
        <button>Send</button>
      </form>
      <p style={{ textAlign: "center" }}>
        Want to receive anonymous messages? {" "}
        <Link style={{ color: "rgba(255, 255, 255, 0.85)" }} to="/register">
          Sign up now.
        </Link>
      </p>
    </div>
  )
}

export default AnonMessenger
