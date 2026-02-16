import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <i className="fas fa-download"></i>
              <span>FB Downloader</span>
            </div>
            <p>
              Free online tool to download Facebook videos, reels, and stories in HD/4K/MP3 format without watermark. Fast, secure, and easy to use.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/"><i className="fas fa-chevron-right"></i>Home</Link></li>
              <li><Link to="/guide"><i className="fas fa-chevron-right"></i>How to Use</Link></li>
              <li><Link to="/contact"><i className="fas fa-chevron-right"></i>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Download Types</h5>
            <ul className="footer-links">
              <li><Link to="/facebook-reels-downloader"><i className="fas fa-chevron-right"></i>Reels Downloader</Link></li>
              <li><Link to="/facebook-stories-downloader"><i className="fas fa-chevron-right"></i>Stories Downloader</Link></li>
              <li><Link to="/facebook-posts-downloader"><i className="fas fa-chevron-right"></i>Posts Downloader</Link></li>
              <li><Link to="/private-facebook-video-downloader"><i className="fas fa-chevron-right"></i>Private Videos</Link></li>
              <li><Link to="/mp3-converter"><i className="fas fa-chevron-right"></i>MP3 Converter</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5>Legal</h5>
            <ul className="footer-links">
              <li><Link to="/privacy-policy"><i className="fas fa-chevron-right"></i>Privacy Policy</Link></li>
              <li><Link to="/terms-conditions"><i className="fas fa-chevron-right"></i>Terms & Conditions</Link></li>
              <li><Link to="/dmca"><i className="fas fa-chevron-right"></i>DMCA</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Facebook Video Downloader. All rights reserved.
          </p>
          <p className="mb-0 mt-2" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
            This website is not affiliated with Facebook™ or Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
