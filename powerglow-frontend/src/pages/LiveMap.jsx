import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import './LiveMap.css';

export default function LiveMap() {
  // You can later fetch this data from your backend/API
  const [locations, setlocations] = useState([]);
    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL+"/locations")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setlocations(data?.data); // ✅ save API data into state
        })
        .catch((err) => {
          console.error("API Error:", err);
        });
    }, []);

  return (
    <div className="live-map-page">
      <Header />

      <main className="main-content">
        {/* Hero / Intro */}
        <section className="hero-section">
          <div className="container">
            <h1>Live Crowd Map – Jaipur</h1>
            <p className="lead">
              Real-time crowd density at major tourist attractions.
              <br />
              Plan your visit smarter – avoid crowds, save time.
            </p>
          </div>
        </section>

        {/* Map + Legend + Controls */}
        <section className="map-section">
          <div className="container">
            <div className="map-header">
              <div className="map-title">
                <h2>Jaipur Tourist Locations – Live Crowd</h2>
                <span className="last-updated">Last updated: just now</span>
              </div>

              <div className="map-controls">
                <button className="btn btn-refresh">↻ Refresh</button>
                <select className="time-filter">
                  <option>Today</option>
                  <option>This Week</option>
                  <option>Peak Hours</option>
                </select>
              </div>
            </div>

            <div className="map-and-legend">
              {/* Map area */}
              <div className="map-container">
                {/* 
                  In real project replace this iframe with:
                  - Google Maps JavaScript API + Advanced Markers
                  - Mapbox GL JS
                  - Leaflet + custom markers
                */}
                <iframe
                  title="Jaipur Tourist Places Crowd Map"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d114748.286049709!2d75.77827219999999!3d26.9124338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAmber+Fort%2C+Hawa+Mahal%2C+City+Palace%2C+Jantar+Mantar%2C+Nahargarh+Fort%2C+Jal+Mahal!5e0!3m2!1sen!2sin!4v1690000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Overlay placeholder - remove when using real map API */}
                <div className="map-overlay-info">
                  <p>Using embedded Google Maps (static view)</p>
                  <small>
                    For real-time colored markers + crowd data, use Google Maps JS API / Mapbox
                  </small>
                </div>
              </div>

              {/* Legend */}
              <div className="legend-panel">
                <h3>Crowd Level</h3>
                <div className="legend-items">
                  <div className="legend-item low">
                    <span className="color-box"></span>
                    <span>Low Crowd</span>
                  </div>
                  <div className="legend-item medium">
                    <span className="color-box"></span>
                    <span>Medium Crowd</span>
                  </div>
                  <div className="legend-item high">
                    <span className="color-box"></span>
                    <span>High Crowd</span>
                  </div>
                </div>

                <div className="quick-stats">
                  <div className="stat">
                    <strong>Most crowded now</strong>
                    <span>Amber Fort</span>
                  </div>
                  <div className="stat">
                    <strong>Calmest now</strong>
                    <span>Jantar Mantar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Cards */}
            <div className="location-cards">
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className={`location-card ${loc.crowdLevel}`}
                >
                  <div className="card-header">
                    <h4>{loc.name}</h4>
                    <span className={`crowd-badge ${loc.crowdLevel}`}>
                      {loc.crowdText}
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="visitors">{loc.visitorsNow}</p>
                    <p className="update-time">Updated {loc.lastUpdate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="tips-section">
          <div className="container">
            <h2>Smart Visiting Tips</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>Go early</h4>
                <p>Most places are calmest between 7–10 AM</p>
              </div>
              <div className="tip-card">
                <h4>Avoid weekends</h4>
                <p>Saturday & Sunday see 2× more visitors</p>
              </div>
              <div className="tip-card">
                <h4>Check before leaving</h4>
                <p>Refresh map 30–60 min before heading out</p>
              </div>
              <div className="tip-card">
                <h4>Amber Fort peak</h4>
                <p>11 AM – 3 PM is usually busiest</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>{new Date().getFullYear()} Jaipur Smart Tourism • Real-time crowd</p>
        </div>
      </footer>
    </div>
  );
}