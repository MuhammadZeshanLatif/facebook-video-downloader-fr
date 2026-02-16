export default function Guide() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">How to Use Guide</h1>
          <p className="page-subtitle">Step-by-Step Instructions for All Devices</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-box mb-5">
                <h2>Complete Guide to Downloading Facebook Videos</h2>
                <p>
                  This guide provides detailed, step-by-step instructions on how to download Facebook videos on all devices including Android, iPhone (iOS), and Desktop computers. Follow these screenshots and instructions for the best experience.
                </p>
              </div>

              {/* Desktop Guide */}
              <h3 className="mb-4"><i className="fas fa-desktop text-primary me-2"></i>Desktop (Windows & Mac)</h3>
              
              <div className="guide-step">
                <div className="guide-step-number">1</div>
                <div className="guide-step-content">
                  <h4>Open Facebook and Find Your Video</h4>
                  <p>Navigate to Facebook.com and find the video, reel, or story you want to download.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Facebook homepage with video post highlighted</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">2</div>
                <div className="guide-step-content">
                  <h4>Copy the Video URL</h4>
                  <p>Click on the video to open it. Then copy the URL from your browser&apos;s address bar (Ctrl+C on Windows, Cmd+C on Mac).</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-link"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Browser address bar showing Facebook video URL</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">3</div>
                <div className="guide-step-content">
                  <h4>Paste URL in Our Downloader</h4>
                  <p>Open our Facebook Video Downloader website and paste the copied URL in the input field.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-paste"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Downloader page with URL pasted in input field</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">4</div>
                <div className="guide-step-content">
                  <h4>Click Download and Select Quality</h4>
                  <p>Click the Download button, then choose your preferred format (MP4, MP3) and quality (HD, 4K).</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-download"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Quality selection options displayed</p>
                  </div>
                </div>
              </div>

              {/* Android Guide */}
              <h3 className="mb-4 mt-5"><i className="fab fa-android text-success me-2"></i>Android Smartphones</h3>
              
              <div className="guide-step">
                <div className="guide-step-number">1</div>
                <div className="guide-step-content">
                  <h4>Open Facebook App</h4>
                  <p>Launch the Facebook app on your Android device and find the video you want to download.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fab fa-android"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Facebook app with video post</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">2</div>
                <div className="guide-step-content">
                  <h4>Tap the Three Dots Menu</h4>
                  <p>Tap the three dots (⋯) on the top right of the post, then select &quot;Copy link&quot; from the menu.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-ellipsis-v"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Menu options with &quot;Copy link&quot; highlighted</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">3</div>
                <div className="guide-step-content">
                  <h4>Open Browser and Paste URL</h4>
                  <p>Open Chrome or any browser, go to our website, and paste the copied link in the input field.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fab fa-chrome"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Chrome browser showing downloader website</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">4</div>
                <div className="guide-step-content">
                  <h4>Download to Your Device</h4>
                  <p>Tap Download, select your preferred quality, and the video will be saved to your Downloads folder.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-save"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Download confirmation message</p>
                  </div>
                </div>
              </div>

              {/* iOS Guide */}
              <h3 className="mb-4 mt-5"><i className="fab fa-apple text-dark me-2"></i>iPhone (iOS)</h3>
              
              <div className="guide-step">
                <div className="guide-step-number">1</div>
                <div className="guide-step-content">
                  <h4>Open Facebook on iPhone</h4>
                  <p>Launch the Facebook app on your iPhone or iPad and locate the video.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fab fa-apple"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Facebook app on iOS with video</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">2</div>
                <div className="guide-step-content">
                  <h4>Share and Copy Link</h4>
                  <p>Tap the Share button, then select &quot;Copy Link&quot; to copy the video URL to your clipboard.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: iOS share sheet with &quot;Copy Link&quot; option</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">3</div>
                <div className="guide-step-content">
                  <h4>Use Safari Browser</h4>
                  <p>Open Safari, navigate to our downloader website, and paste the link in the input field.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fab fa-safari"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Safari showing downloader with pasted URL</p>
                  </div>
                </div>
              </div>

              <div className="guide-step">
                <div className="guide-step-number">4</div>
                <div className="guide-step-content">
                  <h4>Save to Photos</h4>
                  <p>Tap Download, select quality, and save the video to your Photos app for offline viewing.</p>
                  <div className="screenshot-box">
                    <div className="screenshot-placeholder">
                      <i className="fas fa-images"></i>
                    </div>
                    <p className="text-muted mb-0">Screenshot: Video saved to Photos app</p>
                  </div>
                </div>
              </div>

              {/* Tips Section */}
              <h3 className="mb-4 mt-5"><i className="fas fa-lightbulb text-warning me-2"></i>Pro Tips</h3>
              
              <div className="content-box">
                <ul className="mb-0">
                  <li>Always use the latest version of your browser for best compatibility</li>
                  <li>For private videos, make sure you&apos;re logged into Facebook in the same browser</li>
                  <li>Downloaded videos are usually saved in your Downloads folder or Photos app</li>
                  <li>If download doesn&apos;t start, check your pop-up blocker settings</li>
                  <li>For best quality, always select the highest available resolution</li>
                  <li>You can save videos directly to Google Drive for cloud access</li>
                </ul>
              </div>

              {/* Troubleshooting */}
              <h3 className="mb-4 mt-5"><i className="fas fa-tools text-danger me-2"></i>Troubleshooting</h3>
              
              <div className="content-box">
                <h4>Common Issues and Solutions</h4>
                
                <h5 className="mt-3">Download Button Not Working</h5>
                <p>Try refreshing the page or clearing your browser cache. Disable ad blockers temporarily as they might interfere with the download process.</p>
                
                <h5 className="mt-3">Video Not Found</h5>
                <p>Ensure the video URL is correct and the video is publicly accessible. For private videos, you must have permission to view them.</p>
                
                <h5 className="mt-3">Slow Download Speed</h5>
                <p>Check your internet connection. Downloads are processed on our servers, so speed also depends on the video file size.</p>
                
                <h5 className="mt-3">Video Has No Sound</h5>
                <p>Some Facebook videos may have copyright restrictions. Try downloading a different video to test.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
