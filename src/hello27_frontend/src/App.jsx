import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">GTA V</div>
        <nav className="nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#trailers">Trailers</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#buy">Buy Now</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Los Santos</h1>
          <p>Explore the ultimate open-world experience in GTA V.</p>
          <button className="cta-button">Buy Now</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Expansive Open World</h3>
            <p>Immerse yourself in the dynamic world of Los Santos, with stunning environments, detailed characters, and endless possibilities.</p>
          </div>
          <div className="feature-item">
            <h3>Heists and Missions</h3>
            <p>Team up with friends to plan and execute thrilling heists and missions across the city and beyond.</p>
          </div>
          <div className="feature-item">
            <h3>Online Multiplayer</h3>
            <p>Join millions of players in GTA Online to build your criminal empire, race, and compete in various activities.</p>
          </div>
        </div>
      </section>

      <section id="trailers" className="trailers">
        <h2>Trailers</h2>
        <div className="trailer-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QkkoHAzjnUs" title="GTA V Official Trailer" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>

      <section id="reviews" className="reviews">
        <h2>Reviews</h2>
        <div className="review-item">
          <blockquote>"A masterpiece of open-world design!"</blockquote>
          <cite>- IGN</cite>
        </div>
        <div className="review-item">
          <blockquote>"The ultimate sandbox game."</blockquote>
          <cite>- GameSpot</cite>
        </div>
        <div className="review-item">
          <blockquote>"Incredible attention to detail and a fantastic story."</blockquote>
          <cite>- Kotaku</cite>
        </div>
      </section>

      <footer id="buy" className="footer">
        <h2>Buy Now</h2>
        <p>Available on PC, PlayStation, and Xbox.</p>
        <button className="cta-button">Purchase GTA V</button>
      </footer>
    </div>
  );
};

export default App;
