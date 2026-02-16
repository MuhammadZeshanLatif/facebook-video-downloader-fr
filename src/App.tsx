import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './custom.css';
import Contact from './pages/Contact';
import DMCA from './pages/DMCA';
import Footer from './components/Footer';
import Guide from './pages/Guide';
import Header from './components/Header';
import Home from './pages/Home';
import MP3Converter from './pages/MP3Converter';
import Posts from './pages/Posts';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivateVideos from './pages/PrivateVideos';
import Reels from './pages/Reels';
import ScrollToTop from './components/ScrollToTop';
import SocialShare from './components/SocialShare';
import Stories from './pages/Stories';
import TermsConditions from './pages/TermsConditions';

export function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <SocialShare />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mp3-converter" element={<MP3Converter />} />
          <Route path="/facebook-reels-downloader" element={<Reels />} />
          <Route path="/facebook-stories-downloader" element={<Stories />} />
          <Route path="/private-facebook-video-downloader" element={<PrivateVideos />} />
          <Route path="/facebook-posts-downloader" element={<Posts />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/dmca" element={<DMCA />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
