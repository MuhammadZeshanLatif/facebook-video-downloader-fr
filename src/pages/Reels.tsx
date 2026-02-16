export default function Reels() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Facebook Reels Downloader</h1>
          <p className="page-subtitle">Download Facebook Reels in HD/4K Without Watermark</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="download-box mb-5">
                <form>
                  <div className="input-group">
                    <input
                      type="url"
                      className="form-control url-input"
                      placeholder="Paste Facebook Reel URL here..."
                      required
                    />
                    <button type="submit" className="download-btn">
                      <i className="fas fa-download me-2"></i>
                      Download Reel
                    </button>
                  </div>
                </form>
              </div>

              <div className="content-box">
                <h2>Download Facebook Reels in High Quality</h2>
                <p>
                  Facebook Reels are short, engaging videos that users share on the platform. Our Facebook Reels downloader allows you to save these videos directly to your device in high quality without any watermarks.
                </p>
                
                <h3>How to Download Facebook Reels</h3>
                <ol>
                  <li>Open the Facebook app or website and find the reel you want to download</li>
                  <li>Tap the three dots menu on the reel and select &quot;Copy link&quot;</li>
                  <li>Come back to this page and paste the URL in the input field above</li>
                  <li>Click the Download button and select your preferred quality</li>
                  <li>Save the reel to your device for offline viewing</li>
                </ol>

                <h3>Features of Our Reels Downloader</h3>
                <ul>
                  <li>Download reels in HD and 4K quality</li>
                  <li>No watermark on downloaded videos</li>
                  <li>Fast and secure download process</li>
                  <li>Works on all devices and browsers</li>
                  <li>Completely free to use</li>
                  <li>No registration or software installation required</li>
                </ul>

                <h3>Supported Formats</h3>
                <p>Our Facebook Reels downloader supports multiple formats including:</p>
                <ul>
                  <li><strong>MP4</strong> - High-quality video format compatible with all devices</li>
                  <li><strong>3GP</strong> - Compressed format for mobile devices</li>
                  <li><strong>MP3</strong> - Extract audio from reels</li>
                </ul>

                <div className="alert alert-info mt-4">
                  <i className="fas fa-info-circle me-2"></i>
                  <strong>Note:</strong> Please respect copyright laws and only download reels that you have permission to save. This tool is for personal use only.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
