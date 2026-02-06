import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import './LiveCrowd.css';

export default function Footfall() {
  // You can later fetch this from API / Firebase / your backend
  const [crowdData, setcrowdData] = useState([]);
    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL+"/crowdData")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setcrowdData(data?.data); // ✅ save API data into state
        })
        .catch((err) => {
          console.error("API Error:", err);
        });
    }, []);

  return (
    <div className="footfall-page">
      <Header />

      <main className="main-content">
        {/* Hero / Introduction */}
        <section className="hero-section">
          <div className="container">
            <h1>Live Footfall & Crowd Insights</h1>
            <p className="lead">
              Real-time visitor numbers and crowd levels at Jaipur's top attractions
            </p>
          </div>
        </section>

        {/* Main Data Section */}
        <section className="crowd-section">
          <div className="container">
            <div className="section-header">
              <div className="header-left">
                <h2>Current Crowd Status</h2>
                <p className="update-time">Last updated: just now • Auto-refreshes every 5 min</p>
              </div>

              <div className="header-controls">
                <button className="btn btn-refresh">↻ Refresh Now</button>
                <select className="time-range">
                  <option>Today</option>
                  <option>Last 24 hours</option>
                  <option>This Week </option>
                </select>
                  <select
                      className="time-range"
                      onChange={(e) => {
                        if (e.target.value) {
                          // Using search params (simple way)
                          window.location.href = `/DayCrowd?day=${encodeURIComponent(e.target.value)}`;
                          
                          // OR better – if using react-router <Link> or useNavigate:
                          // navigate(`/day-crowd/${e.target.value}`);
                        }
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        View daily pattern...
                      </option>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
              </div>
            </div>

            {/* Desktop Table + Mobile Cards */}
            <div className="crowd-data-container">
              {/* Table view (large screens) */}
              <div className="crowd-table desktop-view">
                <div className="table-head">
                  <span>Place</span>
                  <span>Visitors Now</span>
                  <span>Capacity</span>
                  <span>Trend</span>
                  <span>Status</span>
                </div>

                {crowdData.map((item, index) => (
                  <div className="table-row" key={index}>
                    <span className="place-name">{item.place}</span>
                    <span className="visitors-count">{item.people.toLocaleString()}</span>
                    <span className="capacity">
                      {item.capacityPercent}%
                    </span>
                    <span className={`trend ${item.trend.includes('↑') ? 'up' : item.trend.includes('↓') ? 'down' : 'stable'}`}>
                      {item.trend}
                    </span>
                    <span className={`tag ${item.level.toLowerCase()}`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card view (mobile & tablet) */}
              <div className="crowd-cards mobile-view">
                {crowdData.map((item, index) => (
                  <div className={`crowd-card ${item.level.toLowerCase()}`} key={index}>
                    <div className="card-header">
                      <h3>{item.place}</h3>
                      <span className={`status-tag ${item.level.toLowerCase()}`}>
                        {item.level}
                      </span>
                    </div>

                    <div className="card-body">
                      <div className="stat-row">
                        <span className="label">Visitors now</span>
                        <span className="value big">{item.people.toLocaleString()}</span>
                      </div>
                      <div className="stat-row">
                        <span className="label">Capacity used</span>
                        <span className="value">{item.capacityPercent}%</span>
                      </div>
                      <div className="stat-row">
                        <span className="label">Trend</span>
                        <span className={`value trend ${item.trend.includes('↑') ? 'up' : item.trend.includes('↓') ? 'down' : 'stable'}`}>
                          {item.trend}
                        </span>
                      </div>
                      <div className="stat-row">
                        <span className="label">Peak time</span>
                        <span className="value">{item.peakTime}</span>
                      </div>
                    </div>

                    <div className="card-footer">
                      <span className="update">Updated {item.lastUpdate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="legend">
              <h3>Crowd Levels</h3>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="color low"></span>
                  <span>Low</span>
                </div>
                <div className="legend-item">
                  <span className="color medium"></span>
                  <span>Medium</span>
                </div>
                <div className="legend-item">
                  <span className="color high"></span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="tips-section">
          <div className="container">
            <h2>Best Times to Visit (Less Crowded)</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>Amber Fort</h4>
                <p>7:00 – 9:30 AM or after 4:00 PM</p>
              </div>
              <div className="tip-card">
                <h4>Hawa Mahal</h4>
                <p>7:30 – 10:00 AM</p>
              </div>
              <div className="tip-card">
                <h4>City Palace</h4>
                <p>9:00 – 11:00 AM or 3:00 – 5:00 PM</p>
              </div>
              <div className="tip-card">
                <h4>Jantar Mantar</h4>
                <p>Early morning (8–10 AM)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>{new Date().getFullYear()} Jaipur Tourism • Live Crowd </p>
        </div>
      </footer>
    </div>
  );
}