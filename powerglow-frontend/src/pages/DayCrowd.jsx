// src/pages/DayCrowd.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../Common/Header';
import './DayCrowd.css';

export default function DayCrowd() {
  const [searchParams] = useSearchParams();
  const day = searchParams.get('day') || 'Monday';

  // Mock data – in real app this would come from API
  const [dailyData, setdailyData] = useState([]);
    useEffect(() => {
      fetch(process.env.REACT_APP_API_URL+"/dailyData")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setdailyData(data?.data); // ✅ save API data into state
        })
        .catch((err) => {
          console.error("API Error:", err);
        });
    }, []);

  const getLevelClass = (level) => level.toLowerCase();

  return (
    <div className="day-crowd-page">
      <Header />

      <main className="container">
        <section className="page-hero">
          <h1>Crowd Pattern – {day}</h1>
          <p>Hourly visitor trends and current status for {day}</p>
        </section>

        <div className="places-grid">
          {dailyData.map((item, index) => (
            <div className="place-card" key={index}>
              <div className="place-image">
                <img src={item.image} alt={item.place} />
              </div>

              <div className="place-content">
                <h3>{item.place}</h3>

                <div className="current-status">
                  <div className={`status-badge ${getLevelClass(item.crowdLevel)}`}>
                    {item.crowdLevel}
                  </div>
                  <div className="visitors-now">
                    <strong>{item.currentVisitors}</strong> visitors now
                  </div>
                </div>

                <div className="chart-container">
                  <div className="simple-bar-chart">
                    {item.hourlyData.map((value, i) => (
                      <div
                        key={i}
                        className="bar"
                        style={{
                          height: `${(value / item.maxVisitorsToday) * 100}%`,
                        }}
                        title={`Hour ${i + 1}: ${value} visitors`}
                      />
                    ))}
                  </div>
                  <div className="chart-labels">
                    <span>12AM</span>
                    <span>6AM</span>
                    <span>12PM</span>
                    <span>6PM</span>
                    <span>11PM</span>
                  </div>
                </div>

                <div className="peak-info">
                  Peak today: <strong>{item.maxVisitorsToday} visitors</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}