export default function SocialShare() {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Check out this awesome Facebook Video Downloader!';

  return (
    <div className="sticky-social">
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
        aria-label="Share on Facebook"
      >
        <i className="fab fa-facebook-f"></i>
      </a>
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
        aria-label="Share on Twitter"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
        aria-label="Share on LinkedIn"
      >
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a 
        href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon whatsapp"
        aria-label="Share on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
