// PlaceDetails.jsx
import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import './PlaceDetails.css';

export default function PlaceDetails() {
  const [places, setplaces] = useState([]);
    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL+"/places")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setplaces(data?.data); // ✅ save API data into state
        })
        .catch((err) => {
          console.error("API Error:", err);
        });
    }, []);

  return (
    <div className="place-details-page">
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Discover Jaipur's Most Beautiful Places</h1>
            <p>Plan your visit wisely – check crowd levels & best visiting times</p>
          </div>
        </section>

        <section className="filters-section">
          <div className="container">
            <h2>Explore Tourist Attractions</h2>

            <div className="filter-controls">
              <div className="search-box">
                <input type="text" placeholder="Search places..." />
                <span className="search-icon">🔍</span>
              </div>

              <div className="sort-options">
                <select defaultValue="">
                  <option value="">Sort by...</option>
                  <option value="name">Name A-Z</option>
                  <option value="crowd">Crowd Level</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="places-section">
          <div className="container">
            <div className="places-grid">
              {places.map((place) => (
                <div className="place-card" key={place.id}>
                  <div className="place-image">
                    <img src={place.image} alt={place.name} loading="lazy" />
                    <span className={`crowd-badge ${place.crowd.toLowerCase()}`}>
                      {place.crowd} Crowd
                    </span>
                  </div>

                  <div className="place-content">
                    <div className="place-header">
                      <h3>{place.name}</h3>
                      <div className="rating">
                        <span>★ {place.rating}</span>
                      </div>
                    </div>

                    <p className="description">{place.desc}</p>

                    <div className="place-info-grid">
                      <div className="info-item">
                        <span className="label">Best Time</span>
                        <span className="value">{place.bestTime}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Timing</span>
                        <span className="value">{place.timing}</span>
                      </div>
                      <div className="info-item">
                        <span className="label">Entry Fee</span>
                        <span className="value">{place.entryFee}</span>
                      </div>
                    </div>

                    <button className="btn btn-outline">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="tips-section">
          <div className="container">
            <h2>Travel Tips for Jaipur</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <h4>Early Morning Visits</h4>
                <p>Most monuments are less crowded and more pleasant between 6–10 AM.</p>
              </div>
              <div className="tip-card">
                <h4>Comfortable Footwear</h4>
                <p>Lots of walking and stairs – wear comfortable shoes.</p>
              </div>
              <div className="tip-card">
                <h4>Stay Hydrated</h4>
                <p>Carry water bottle – summers can be very hot.</p>
              </div>
              <div className="tip-card">
                <h4>Respect Local Culture</h4>
                <p>Dress modestly, especially at religious sites.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p> {new Date().getFullYear()} Jaipur Tourism Guide</p>
        </div>
      </footer>
    </div>
  );
}