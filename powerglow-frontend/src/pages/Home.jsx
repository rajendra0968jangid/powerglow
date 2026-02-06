import React from 'react'
import Header from '../Common/Header'
// import { Autocomplete } from '@react-google-maps/api';
import "./Home.css";
import Footer from './Footer';

export default function Home() {
  return (
 <>
      <Header />

      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Smart Tourism <br />
            <span>Live Crowd & Footfall Analytics</span>
          </h1>

          <p>
            Plan your travel smarter with real-time crowd insights, interactive
            maps, and intelligent recommendations for safer and better tourism.
          </p>

          <div className="hero-buttons">
            <a href="/PlaceDetails" className="btn-primary">
              Explore Places
            </a>
            <a href="/LiveMap" className="btn-secondary">
              View Live Map
            </a>
          </div>
        </div>
      </section>
       {/*Here input box */}
       <div className="input-wrapper">
                {/* <Autocomplete
                  onLoad={(auto) => (window.fromAutocomplete = auto)}
                  onPlaceChanged={onFromPlaceChanged}
                  restrictions={{ country: "in" }} // optional: India only
                > */}
                  <input
                    type="text"
                    placeholder="From location"
                    className="location-input"
                    // value={fromText}
                    // onChange={(e) => setFromText(e.target.value)}
                  />
                {/* </Autocomplete> */}

                <div className="swap-icon">↔</div>

                {/* <Autocomplete
                  onLoad={(auto) => (window.toAutocomplete = auto)}
                  onPlaceChanged={onToPlaceChanged}
                  restrictions={{ country: "in" }}
                > */}
                  <input
                    type="text"
                    placeholder="To location"
                    className="location-input"
                    // value={toText}
                    // onChange={(e) => setToText(e.target.value)}
                  />
                {/* </Autocomplete> */}
              </div>
      {/* FEATURES */}
      <section className="home-features">
        <h2>Why Use Our Platform?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📊 Live Crowd Analytics</h3>
            <p>
              Monitor real-time footfall data to avoid overcrowded tourist
              locations.
            </p>
          </div>

          <div className="feature-card">
            <h3>🗺️ Smart Interactive Maps</h3>
            <p>
              View crowd density on maps with color-coded indicators and
              insights.
            </p>
          </div>

          <div className="feature-card">
            <h3>⏱️ Best Time to Visit</h3>
            <p>
              Get intelligent suggestions for visiting places at the right
              time.
            </p>
          </div>

          <div className="feature-card">
            <h3>🚨 Safety & Crowd Alerts</h3>
            <p>
              Stay informed with alerts during peak hours or high-risk crowd
              situations.
            </p>
          </div>
        </div>
      </section>

      {/* POPULAR PLACES */}
      <section className="home-places">
        <h2>Popular Tourist Places</h2>

        <div className="places-grid">
          <div className="place-card">
            <span className="badge green">Low Crowd</span>
            <h3>City Palace</h3>
            <p>Best time: 8 AM – 11 AM</p>
          </div>

          <div className="place-card">
            <span className="badge yellow">Medium Crowd</span>
            <h3>Hawa Mahal</h3>
            <p>Best time: 9 AM – 12 PM</p>
          </div>

          <div className="place-card">
            <span className="badge red">High Crowd</span>
            <h3>Amber Fort</h3>
            <p>Best time: Early Morning</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <h2>Experience Smart Tourism Today</h2>
        <p>
          Avoid crowds, save time, and explore destinations with intelligent
          insights.
        </p>
        <a href="/Footfall" className="btn-primary">
          View Live Crowd Data
        </a>
      </section>
      <Footer/>
    </>
  )
}
