import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-download"></i>
          <span>FB Downloader</span>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                <i className="fas fa-home me-1 d-lg-none"></i>
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="downloadDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="fas fa-download me-1 d-lg-none"></i>
                Download
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="downloadDropdown">
                <li>
                  <Link className="dropdown-item" to="/facebook-reels-downloader">
                    <i className="fas fa-film me-2"></i>Reels
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/facebook-stories-downloader">
                    <i className="fas fa-history me-2"></i>Stories
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/facebook-posts-downloader">
                    <i className="fas fa-newspaper me-2"></i>Posts
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/private-facebook-video-downloader">
                    <i className="fas fa-lock me-2"></i>Private Videos
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item" to="/mp3-converter">
                    <i className="fas fa-music me-2"></i>MP3 Converter
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/guide') ? 'active' : ''}`} to="/guide">
                <i className="fas fa-book me-1 d-lg-none"></i>
                Guide
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                <i className="fas fa-envelope me-1 d-lg-none"></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
