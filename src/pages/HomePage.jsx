import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

import './Home.scss'
import Axios from 'axios'

  const featureItems = [
  {
    image: '/images/f-icon-1.png',
    title: 'Anonymity',
    desc: 'Our Platform ensures your privacy so that you stay anonymous everytime you send someone a secret message. You are anonymous until you ever choose to reveal your identity.'
  },
  {
    image: '/images/f-icon-1.png',
    title: 'Safe & Secure',
    desc: 'Safety of our users using this anonymous messaging platform is very important for us. We have got reporting systems so that you can report anything that you do not like to see.'
  },
  {
    image: '/images/f-icon-1.png',
    title: '24/7 Support',
    desc: 'If there is anything that you need help with related to our anonymous messaging and feedback platform, We are always here for you. 24 hours a day and 7 days a week.'
  },
  {
    image: '/images/f-icon-1.png',
    title: 'Easy 2 Use',
    desc: 'We are constantly working on Kubool as a platform to make it as user friendly as possible. As of now you can just download our app, fill in your username & pass to get started.'
  }
]

function HomePage() {
  return (
    <div>
      <header>
        <NavBar />
        <div className="hero">
          <h1>Receive anonymous messages online!</h1>
          <p>Share you link and start getting anonymous messages from friends & family, colleagues, co-workers, well wishers, haters...anyone!</p>
          <Link to="/register" className="start">Get started</Link>
        </div>
      </header>

      <section className="why">
        <h2>Why anonymous ?</h2>
        <p>It's amazing and awesome, below are features of anonymous</p>
      </section>

      <section className="cards">
        {
          featureItems.map((item, itemIdx) =>
            <div key={itemIdx} className="card">
              <img src={item.image} alt="" className="icon" />

              <h2 className="heading-2">{item.title}</h2>
              <p className="desc">{item.desc}</p>
            </div>
          )
        }
      </section>

      <section className="screenshot-area">
        <div className="container">
          <div className="main-title">
            <h2>App Screenshots</h2>
            <p>Out of all other Anonymous Messaging and Anonymous Feedback apps our User Interface is much easier to use. Have a quick look.</p>
          </div>
        </div>

        <div className="screenshots">
          <img src="/images/feature-1.png" alt="screenshot" />
          <img src="/images/feature-2.png" alt="screenshot" />
          <img src="/images/feature-3.png" alt="screenshot" />
          <img src="/images/feature-4.png" alt="screenshot" />
        </div>
      </section>

      <section className="download-area">
        <div className="holder">
          <h2>Download Anonymous Today</h2>
          <p>
            Anonymous is easy to use, small in size, and fun to play with,Simply download the app and get started with Kubool now. After you download the app, easily create your account and share the profile link with friends to get going. <br />
            Recieve Anonymous message from friends now

          </p>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>
            Copyright © 2020 - CodeVillage </p>
            <div className="contacts"> <a href="https://github.com/Amir9eng"><img src="/images/github-fill.png" alt="github"/></a></div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
