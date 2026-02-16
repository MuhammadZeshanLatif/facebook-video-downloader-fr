export default function Posts() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Facebook Posts Video Downloader</h1>
          <p className="page-subtitle">Download Videos from Facebook Posts in HD/4K</p>
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
                      placeholder="Paste Facebook Post URL here..."
                      required
                    />
                    <button type="submit" className="download-btn">
                      <i className="fas fa-download me-2"></i>
                      Download Video
                    </button>
                  </div>
                </form>
              </div>

              <div className="content-box">
                <h2>Download Videos from Facebook Posts</h2>
                <p>
                  Many Facebook posts include useful or entertaining videos. Copy the video URL from the post, paste it into the input field, select your format (MP4, MP3, or more), and download in seconds.
                </p>
                
                <h3>Why Download Videos from Posts?</h3>
                <p>
                  Facebook posts often contain valuable video content that you might want to save for later. Whether it&apos;s an educational tutorial, a funny clip, an important announcement, or memorable moments shared by friends and family, our tool makes it easy to download these videos.
                </p>

                <h3>How to Download Videos from Facebook Posts</h3>
                <ol>
                  <li>Find the Facebook post containing the video you want to download</li>
                  <li>Click on the video to open it in full view</li>
                  <li>Copy the URL from your browser&apos;s address bar</li>
                  <li>Paste the URL in the input field above</li>
                  <li>Click the Download button</li>
                  <li>Choose your preferred format and quality</li>
                  <li>Save the video to your device</li>
                </ol>

                <h3>Types of Post Videos You Can Download</h3>
                <ul>
                  <li><strong>Personal Videos</strong> - Videos shared by friends and family</li>
                  <li><strong>Page Videos</strong> - Content from Facebook pages you follow</li>
                  <li><strong>Live Videos</strong> - Previously broadcast live streams</li>
                  <li><strong>Shared Videos</strong> - Videos shared from other sources</li>
                  <li><strong>Group Videos</strong> - Videos posted in Facebook groups</li>
                </ul>

                <h3>Available Formats and Quality</h3>
                <div className="row g-4 mt-2">
                  <div className="col-md-6">
                    <h5>Video Formats</h5>
                    <ul>
                      <li><strong>MP4</strong> - Best quality, universal compatibility</li>
                      <li><strong>3GP</strong> - Smaller file size for mobile</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Audio Formats</h5>
                    <ul>
                      <li><strong>MP3</strong> - Most popular audio format</li>
                      <li><strong>AAC</strong> - High-quality compressed audio</li>
                    </ul>
                  </div>
                </div>

                <h3>Features</h3>
                <ul>
                  <li>Download in HD, 1080p, or 4K quality</li>
                  <li>No watermarks on downloaded videos</li>
                  <li>Fast processing and download speeds</li>
                  <li>Works on all devices and browsers</li>
                  <li>No software installation required</li>
                  <li>Completely free service</li>
                </ul>

                <div className="alert alert-info mt-4">
                  <i className="fas fa-lightbulb me-2"></i>
                  <strong>Tip:</strong> For the best quality download, always choose the highest available resolution option. The quality of the downloaded video depends on the original upload quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
