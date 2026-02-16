export default function PrivateVideos() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Private Facebook Video Downloader</h1>
          <p className="page-subtitle">Download Private Facebook Videos Securely</p>
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
                      placeholder="Paste Private Facebook Video URL here..."
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
                <h2>Download Private Facebook Videos</h2>
                <p>
                  Some videos are shared privately within groups or limited audiences. Where permitted, you can download private Facebook videos by using the correct video link through our secure tool.
                </p>

                <div className="alert alert-warning mb-4">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  <strong>Important:</strong> You can only download private videos that you have legitimate access to. The video must be accessible to your Facebook account for the link to work.
                </div>
                
                <h3>How Private Video Download Works</h3>
                <p>
                  Private Facebook videos are those shared with limited visibility - either within specific groups, to friends only, or through custom privacy settings. Our tool can help you download these videos when:
                </p>
                <ul>
                  <li>You are a member of the group where the video is posted</li>
                  <li>You are friends with the person who posted the video</li>
                  <li>The video is shared with an audience that includes you</li>
                  <li>You have the direct link to the private video</li>
                </ul>

                <h3>Steps to Download Private Videos</h3>
                <ol>
                  <li>Make sure you can view the video on Facebook</li>
                  <li>Copy the video URL from the address bar</li>
                  <li>Paste the URL in the input field above</li>
                  <li>Click the Download button</li>
                  <li>Select your preferred format and quality</li>
                  <li>Save the video to your device</li>
                </ol>

                <h3>Supported Private Video Types</h3>
                <ul>
                  <li><strong>Group Videos</strong> - Videos posted in Facebook groups you belong to</li>
                  <li><strong>Friends-Only Videos</strong> - Content shared with friends only</li>
                  <li><strong>Custom Audience Videos</strong> - Videos shared with specific people</li>
                  <li><strong>Private Account Videos</strong> - Content from accounts you follow</li>
                </ul>

                <h3>Security & Privacy</h3>
                <p>
                  We take your privacy seriously. When you use our private video downloader:
                </p>
                <ul>
                  <li>Your data is processed securely</li>
                  <li>We don&apos;t store your login credentials</li>
                  <li>Downloaded files are not kept on our servers</li>
                  <li>Your download history remains private</li>
                </ul>

                <div className="alert alert-danger mt-4">
                  <i className="fas fa-ban me-2"></i>
                  <strong>Legal Notice:</strong> Only download videos that you have permission to save. Unauthorized downloading and distribution of private content may violate Facebook&apos;s Terms of Service and applicable copyright laws.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
