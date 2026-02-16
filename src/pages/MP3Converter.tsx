export default function MP3Converter() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Facebook to MP3 Converter</h1>
          <p className="page-subtitle">Convert Facebook Videos to MP3 Audio Files</p>
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
                      placeholder="Paste Facebook Video URL to convert to MP3..."
                      required
                    />
                    <button type="submit" className="download-btn">
                      <i className="fas fa-music me-2"></i>
                      Convert to MP3
                    </button>
                  </div>
                </form>
              </div>

              <div className="content-box">
                <h2>Convert Facebook Videos to MP3</h2>
                <p>
                  Select the MP3 format to extract audio from a Facebook video. The tool will convert the media file and let you download the MP3 directly to your device. Perfect if you only need the sound from a Facebook video, such as music, interviews, or podcasts.
                </p>
                
                <h3>Why Convert Videos to MP3?</h3>
                <p>
                  There are many reasons you might want to extract audio from Facebook videos:
                </p>
                <ul>
                  <li><strong>Music</strong> - Save songs or music covers shared on Facebook</li>
                  <li><strong>Podcasts</strong> - Download podcast episodes for offline listening</li>
                  <li><strong>Interviews</strong> - Keep audio interviews for reference</li>
                  <li><strong>Speeches</strong> - Save motivational or educational speeches</li>
                  <li><strong>Sound Effects</strong> - Extract audio clips for creative projects</li>
                  <li><strong>Language Learning</strong> - Save language lessons for practice</li>
                </ul>

                <h3>How to Convert Facebook Videos to MP3</h3>
                <ol>
                  <li>Find the Facebook video you want to convert</li>
                  <li>Copy the video URL from the address bar</li>
                  <li>Paste the URL in the input field above</li>
                  <li>Click the &quot;Convert to MP3&quot; button</li>
                  <li>Wait for the conversion process to complete</li>
                  <li>Download the MP3 file to your device</li>
                </ol>

                <h3>MP3 Conversion Features</h3>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="feature-card h-auto">
                      <h5><i className="fas fa-bolt text-primary me-2"></i>Fast Conversion</h5>
                      <p className="mb-0">Our servers quickly process and convert videos to MP3 format in seconds.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card h-auto">
                      <h5><i className="fas fa-volume-up text-primary me-2"></i>High Quality</h5>
                      <p className="mb-0">Get clear, high-quality audio output up to 320kbps bitrate.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card h-auto">
                      <h5><i className="fas fa-compress text-primary me-2"></i>Compressed Size</h5>
                      <p className="mb-0">MP3 files are smaller than video files, saving storage space.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="feature-card h-auto">
                      <h5><i className="fas fa-universal-access text-primary me-2"></i>Universal Support</h5>
                      <p className="mb-0">MP3 works on all devices and media players.</p>
                    </div>
                  </div>
                </div>

                <h3 className="mt-4">Audio Quality Options</h3>
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th>Quality</th>
                      <th>Bitrate</th>
                      <th>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Economy</td>
                      <td>64 kbps</td>
                      <td>Small file size, speech content</td>
                    </tr>
                    <tr>
                      <td>Standard</td>
                      <td>128 kbps</td>
                      <td>Balanced quality and size</td>
                    </tr>
                    <tr>
                      <td>High</td>
                      <td>192 kbps</td>
                      <td>Good quality music</td>
                    </tr>
                    <tr>
                      <td>Premium</td>
                      <td>320 kbps</td>
                      <td>Best quality, music collection</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Alternative Audio Format: AAC</h3>
                <p>
                  In addition to MP3, we also support AAC format. AAC (Advanced Audio Coding) offers clear audio with efficient compression and smaller file size. It&apos;s the preferred format for Apple devices and provides excellent quality at lower bitrates.
                </p>

                <div className="alert alert-info mt-4">
                  <i className="fas fa-info-circle me-2"></i>
                  <strong>Note:</strong> The audio quality of the converted MP3 depends on the original video&apos;s audio quality. Higher quality source videos will result in better MP3 output.
                </div>

                <div className="alert alert-warning">
                  <i className="fas fa-copyright me-2"></i>
                  <strong>Copyright Notice:</strong> Please respect copyright laws when converting videos to MP3. Only convert content that you have permission to use or that is in the public domain.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
