export default function Stories() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Facebook Stories Downloader</h1>
          <p className="page-subtitle">Save Facebook Stories Before They Disappear</p>
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
                      placeholder="Paste Facebook Story URL here..."
                      required
                    />
                    <button type="submit" className="download-btn">
                      <i className="fas fa-download me-2"></i>
                      Download Story
                    </button>
                  </div>
                </form>
              </div>

              <div className="content-box">
                <h2>Download Facebook Stories in HD</h2>
                <p>
                  Facebook Stories disappear after 24 hours. If you want to save a Facebook story before it expires, our downloader tool is the perfect solution. Copy the story link and use our downloader to store the file for offline viewing.
                </p>
                
                <h3>Why Download Facebook Stories?</h3>
                <p>
                  Stories on Facebook are temporary content that vanishes after 24 hours. This ephermal nature makes it difficult to save memories, important announcements, or content you want to revisit later. Our Facebook Stories downloader solves this problem by allowing you to:
                </p>
                <ul>
                  <li>Save precious memories before they disappear</li>
                  <li>Archive important announcements and updates</li>
                  <li>Keep tutorial or educational content for future reference</li>
                  <li>Download creative content for inspiration</li>
                </ul>

                <h3>How to Download Facebook Stories</h3>
                <ol>
                  <li>Open Facebook and navigate to the story you want to save</li>
                  <li>Copy the story URL from your browser&apos;s address bar</li>
                  <li>Paste the URL in the input field above</li>
                  <li>Click the Download button</li>
                  <li>Select your preferred format and quality</li>
                  <li>Save the story to your device</li>
                </ol>

                <h3>Features</h3>
                <ul>
                  <li>Download stories in original quality</li>
                  <li>No watermarks on downloaded content</li>
                  <li>Fast processing and download speeds</li>
                  <li>Works on mobile and desktop devices</li>
                  <li>No account registration needed</li>
                  <li>100% free to use</li>
                </ul>

                <h3>Important Notes</h3>
                <div className="alert alert-warning">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Stories can only be downloaded while they are still active (within 24 hours of posting). Once a story expires, it cannot be retrieved.
                </div>

                <div className="alert alert-info">
                  <i className="fas fa-shield-alt me-2"></i>
                  Always respect the privacy of others. Only download stories that you have permission to save.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
