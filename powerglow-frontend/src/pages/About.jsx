import React from 'react'
import Header from '../Common/Header'
import "./About.css";
import myScreenshot from '../Images/Screenshot 2026-02-06 155821.png';
import Footer from './Footer';

export default function About() {
  return (
    <>
      <Header />

      <div className="about-container">
        {/* About Project */}
        <div className='aboutflex'>
            <section>
                <img src={myScreenshot} alt="Description of screenshot" />
            </section>
        <section className="about-section">
          <h1>About Us</h1>

          <h2>🌍 About the Project</h2>
          <p>
            <strong>Tourism Intelligence & Footfall Analytics System</strong> is a
            smart web-based platform designed to make tourism{" "}
            <strong>safe, organized, and intelligent</strong>.
          </p>

          <p>
            Today, the biggest challenges at tourist destinations are:
          </p>

          <ul>
            <li>Sudden overcrowding at popular places</li>
            <li>Tourist safety and security issues</li>
            <li>Time wastage and poor trip planning</li>
            <li>Lack of real-time information</li>
          </ul>

          <p>
            Our system uses{" "}
            <strong>real-time crowd data, maps, and analytics</strong> to help
            both tourists and authorities make{" "}
            <strong>smart decisions</strong>, resulting in a safer and better
            travel experience.
          </p>
        </section>
        </div>        

        {/* Vision */}
        <section className="about-section">
          <h2>🎯 Our Vision</h2>

          <ul>
            <li>Promote smart tourism using technology</li>
            <li>Provide the right information at the right time</li>
            <li>Improve crowd management at tourist locations</li>
            <li>
              Enable safe, smooth, and sustainable travel through innovation
            </li>
          </ul>

          <p>
            We believe tourism should not just be about visiting places, but
            about creating a{" "}
            <strong>well-planned and intelligent travel experience</strong>.
          </p>
        </section>

        {/* How It Works */}
        <section className="about-section">
          <h2>⚙️ How It Works</h2>

          <div className="steps">
            <div className="step">
              <h3>1️⃣ Data Collection</h3>
              <p>
                Crowd-related data is collected from tourist locations using
                GPS, map data, and sensors (demo-level implementation).
              </p>
            </div>

            <div className="step">
              <h3>2️⃣ Data Analysis</h3>
              <p>
                The collected data is analyzed to identify crowd levels, peak
                hours, and popular tourist spots.
              </p>
            </div>

            <div className="step">
              <h3>3️⃣ Live Updates</h3>
              <p>
                Users receive live crowd status, map-based visualizations, and
                real-time insights.
              </p>
            </div>

            <div className="step">
              <h3>4️⃣ Smart Suggestions</h3>
              <p>
                The system suggests the best time to visit, less crowded places,
                and optimized routes to help tourists save time and effort.
              </p>
            </div>
          </div>
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}
