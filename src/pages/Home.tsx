import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'https://facebookvideo-downloader-backend.vercel.app';
const API_META_DOWNLOAD = `${API_BASE_URL}/api/meta/download`;

type ApiMediaItem = {
  resolution?: string;
  thumbnail?: string;
  url?: string;
  shouldRender?: boolean;
};

type ApiMetaDownloadResponse = {
  success?: boolean;
  error?: string;
  data?: {
    developer?: string;
    status?: boolean;
    msg?: string;
    data?: ApiMediaItem[];
  };
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

const readApiResponse = async (response: Response): Promise<ApiMetaDownloadResponse> => {
  const parsed = (await response.json()) as unknown;
  if (!isObject(parsed)) {
    throw new Error('Unexpected API response format.');
  }
  return parsed as ApiMetaDownloadResponse;
};

const normalizeUrl = (value?: string): string => {
  if (!value) return '';
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith('/')) return `${API_BASE_URL}${value}`;
  return `${API_BASE_URL}/${value}`;
};

const toPlayablePreviewUrl = (value?: string): string => {
  const normalized = normalizeUrl(value);
  if (!normalized) return '';
  if (/\/render\.php/i.test(normalized)) return '';

  try {
    const parsed = new URL(normalized);
    parsed.searchParams.delete('dl');
    return parsed.toString();
  } catch {
    return normalized.replace(/([?&])dl=1(&|$)/, '$1').replace(/[?&]$/, '');
  }
};

export default function Home() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState<ApiMetaDownloadResponse | null>(null);
  const [mediaItems, setMediaItems] = useState<ApiMediaItem[]>([]);
  const [selectedFormatIndex, setSelectedFormatIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlayControl, setShowOverlayControl] = useState(true);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const hideControlTimerRef = useRef<number | null>(null);

  const previewItem = useMemo(() => {
    return (
      mediaItems.find((item) => {
        const mediaUrl = normalizeUrl(item.url);
        return /(\.mp4|\.webm|m3u8|rapidcdn|fbcdn|video)/i.test(mediaUrl);
      }) ?? mediaItems[0]
    );
  }, [mediaItems]);
  const selectedItem = mediaItems[selectedFormatIndex] ?? previewItem;
  const selectedUrl = normalizeUrl(selectedItem?.url);
  const previewSource = useMemo(() => {
    const selectedPlayable = toPlayablePreviewUrl(selectedItem?.url);
    if (selectedPlayable) {
      return {
        url: selectedPlayable,
        poster: normalizeUrl(selectedItem?.thumbnail),
      };
    }

    for (const item of mediaItems) {
      const playable = toPlayablePreviewUrl(item.url);
      if (playable) {
        return {
          url: playable,
          poster: normalizeUrl(item.thumbnail),
        };
      }
    }

    return { url: '', poster: '' };
  }, [mediaItems, selectedItem]);

  const clearHideControlTimer = () => {
    if (hideControlTimerRef.current !== null) {
      window.clearTimeout(hideControlTimerRef.current);
      hideControlTimerRef.current = null;
    }
  };

  const scheduleHideControl = () => {
    clearHideControlTimer();
    hideControlTimerRef.current = window.setTimeout(() => {
      setShowOverlayControl(false);
    }, 1000);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowOverlayControl(true);
    scheduleHideControl();
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setShowOverlayControl(true);
    clearHideControlTimer();
  };

  const handleCenterPlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch {
      setError('Video play failed in browser. Try direct download button.');
    }
  };

  useEffect(() => {
    return () => {
      clearHideControlTimer();
    };
  }, []);

  useEffect(() => {
    if (!mediaItems.length) {
      setSelectedFormatIndex(0);
      return;
    }

    const playableIndex = mediaItems.findIndex((item) => Boolean(toPlayablePreviewUrl(item.url)));
    if (playableIndex >= 0) {
      setSelectedFormatIndex(playableIndex);
    } else {
      const renderIndex = mediaItems.findIndex((item) => item.shouldRender);
      setSelectedFormatIndex(renderIndex >= 0 ? renderIndex : 0);
    }
    setIsPlaying(false);
    setShowOverlayControl(true);
  }, [mediaItems]);

  useEffect(() => {
    if (mediaItems.length > 0) {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [mediaItems]);

  const handleStartDownloadingClick = () => {
    inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    inputRef.current?.focus();
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setIsLoading(true);
    setError('');
    setApiData(null);
    setMediaItems([]);

    try {
      const response = await fetch(`${API_META_DOWNLOAD}?url=${encodeURIComponent(url)}`);
      const payload = await readApiResponse(response);
      setApiData(payload);

      if (!response.ok || payload.success === false) {
        throw new Error(payload.error || `Request failed with status ${response.status}.`);
      }

      if (!payload.data?.status) {
        throw new Error(payload.data?.msg || 'Backend could not process this Facebook link.');
      }

      const items = (payload.data.data || []).filter((item) => Boolean(item.url));

      if (!items.length) {
        throw new Error('No downloadable formats found for this link.');
      }

      setMediaItems(items);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-pattern"></div>
        <div className="container hero-content">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-badge fade-in">
                <i className="fas fa-bolt"></i>
                <span>Free & Unlimited Downloads</span>
              </div>
              <h1 className="hero-title fade-in">
                Free Facebook Video <span className="highlight">Downloader</span>
              </h1>
              <p className="hero-subtitle fade-in">
                Download Facebook videos, reels, and stories in high-quality format with our free online Facebook video downloader. No watermarks, no registration required.
              </p>
              <div className="d-flex gap-3 flex-wrap fade-in">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleStartDownloadingClick}
                >
                  <i className="fas fa-download"></i>
                  Start Downloading
                </button>
                <Link to="/guide" className="btn btn-glass btn-lg">
                  <i className="fas fa-play-circle"></i>
                  How It Works
                </Link>
              </div>
              <div className="hero-stats fade-in">
                <div className="stat-item">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Downloads</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4K</span>
                  <span className="stat-label">Quality</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Free</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="download-box-wrapper slide-up" id="download">
                <h3 className="text-white text-center mb-4">
                  <i className="fas fa-link me-2"></i>
                  Paste Video URL
                </h3>
                <form onSubmit={handleDownload}>
                  <div className="download-input-group">
                    <input
                      ref={inputRef}
                      type="url"
                      className="form-control download-input"
                      placeholder="https://facebook.com/video..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="loading-spinner me-2"></span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-download"></i>
                        Download Now
                      </>
                    )}
                  </button>
                </form>
                <div className="security-badge mt-4">
                  <i className="fas fa-shield-alt"></i>
                  <span>100% Safe & Secure - No data stored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {(error || apiData || mediaItems.length > 0) && (
        <section className="section-padding bg-light-custom">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                {error && (
                  <div className="alert alert-danger mb-4" role="alert">
                    <strong>API Error:</strong> {error}
                  </div>
                )}

                {selectedItem && (
                  <div className="content-card mb-4" ref={resultRef}>
                    <h4 className="mb-3">Video Preview</h4>
                    <div className="video-preview-shell">
                      <video
                        ref={videoRef}
                        key={previewSource.url}
                        controls
                        className="w-100 rounded preview-video-fixed-height"
                        src={previewSource.url}
                        poster={previewSource.poster}
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                        onEnded={handleVideoPause}
                      >
                        Your browser does not support the video tag.
                      </video>

                      {showOverlayControl && (
                        <button
                          type="button"
                          className="video-center-play-btn"
                          onClick={handleCenterPlayPause}
                          aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                        </button>
                      )}
                    </div>

                    <a
                      href={selectedUrl}
                      target="_blank"
                      rel="noreferrer"
                      download
                      className="btn btn-primary w-100 mt-3"
                    >
                      Download Selected Format ({selectedItem.resolution || 'Best Quality'})
                    </a>

                    {mediaItems.length > 0 && (
                      <div className="mt-3">
                        <p className="small text-muted mb-2">Quick Download (All Formats)</p>
                        <div className="compact-format-buttons">
                          {mediaItems.map((item, index) => (
                            <a
                              key={`${item.url}-compact-${index}`}
                              href={normalizeUrl(item.url)}
                              target="_blank"
                              rel="noreferrer"
                              download
                              className="btn btn-primary compact-format-btn"
                              onClick={() => {
                                setSelectedFormatIndex(index);
                                setIsPlaying(false);
                                setShowOverlayControl(true);
                              }}
                            >
                              {item.resolution || `Format ${index + 1}`}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {apiData && (
                  <div className="content-card">
                    <h4 className="mb-3">API Response</h4>
                    <div
                      className="small p-3 rounded bg-dark"
                      style={{ maxHeight: '260px', overflowY: 'auto' }}
                    >
                      <pre className="mb-0 text-white">{JSON.stringify(apiData, null, 2)}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-card text-center">
                <span className="section-label">About Our Tool</span>
                <h2 className="mb-4">Facebook Video Downloader - Without Watermark</h2>
                <p className="lead mb-4">
                  Ever found a Facebook video you wanted to save, but there was no download button? Maybe it was a useful tutorial, a reel you liked, or important social media content you didn&apos;t want to lose. Streaming it again and again wastes time, and sometimes the video disappears from posts or stories.
                </p>
                <p>
                  A Facebook video downloader download video without watermark solves that problem. It&apos;s a simple online solution that lets you copy the video link from the address bar, paste the URL into the input field, choose a format like MP4, MP3, AAC, or 3GP, and download the file in HD or 4K completely clean and without watermarks.
                </p>
                <p className="mb-0">
                  Within seconds, the video is saved directly to your device for offline viewing. No extra software, no complicated steps, just a fast, secure, and watermark-free download process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Download Section */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Simple Process</span>
            <h2>How to Download Facebook Videos</h2>
            <p>Downloading Facebook videos online is simple and takes only a few seconds. Follow this easy process:</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="step-card">
                <div className="step-number">1</div>
                <h4>Copy the Facebook Video Link</h4>
                <p>Open Facebook and find the video you want to download. Copy the video URL from the address bar or tap the three dots on the post and select &quot;Copy link.&quot;</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step-card">
                <div className="step-connector"></div>
                <div className="step-number">2</div>
                <h4>Paste the URL into the Input Field</h4>
                <p>Go to the Facebook video downloader tool and paste the link into the input field. The tool will automatically detect the video file.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step-card">
                <div className="step-connector"></div>
                <div className="step-number">3</div>
                <h4>Select Format & Quality</h4>
                <p>Choose your preferred format MP4 for video, MP3 or AAC for audio, or 3GP for smaller files. Then select the quality option such as HD, 1080p, or 4K.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="step-card">
                <div className="step-connector"></div>
                <div className="step-number">4</div>
                <h4>Click Download</h4>
                <p>Click the download button and save the file directly to your device. Your video is now ready for offline viewing anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download All Types Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-label">All Media Types</span>
            <h2>Download All Types of Facebook Media</h2>
            <p>Our Facebook video downloader is built to handle more than just standard videos. You can download different types of Facebook media quickly and in high quality.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="media-card">
                <div className="media-icon">
                  <i className="fas fa-film"></i>
                </div>
                <h4>Facebook Reels Downloader</h4>
                <p>Found a reel you want to keep? Download Facebook reels in HD or 4K and save them directly to your device. Just copy the reel link, paste the URL into the tool, choose your format, and download without watermarks.</p>
                <Link to="/facebook-reels-downloader" className="media-link">
                  Try Reels Downloader <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media-card">
                <div className="media-icon">
                  <i className="fas fa-history"></i>
                </div>
                <h4>Download Facebook Stories</h4>
                <p>Stories disappear after 24 hours. If you want to save a Facebook story before it expires, copy the video link and use the downloader to store the file for offline viewing.</p>
                <Link to="/facebook-stories-downloader" className="media-link">
                  Try Stories Downloader <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media-card">
                <div className="media-icon">
                  <i className="fas fa-newspaper"></i>
                </div>
                <h4>Download Videos from Facebook Posts</h4>
                <p>Many Facebook posts include useful or entertaining videos. Copy the video URL from the post, paste it into the input field, select your format (MP4, MP3, or more), and download in seconds.</p>
                <Link to="/facebook-posts-downloader" className="media-link">
                  Try Posts Downloader <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media-card">
                <div className="media-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <h4>Private Facebook Videos</h4>
                <p>Some videos are shared privately within groups or limited audiences. Where permitted, you can download private Facebook videos by using the correct video link through our secure tool.</p>
                <Link to="/private-facebook-video-downloader" className="media-link">
                  Try Private Video Downloader <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format & Quality Section */}
      <section className="section-padding format-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Flexible Options</span>
            <h2>Download Facebook Videos in Any Format & Quality</h2>
            <p>Not everyone needs the same format or resolution. That&apos;s why our Facebook video downloader gives you flexible options for both video and audio downloads.</p>
          </div>
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <h4 className="text-white mb-4"><i className="fas fa-video me-2"></i>Video Formats</h4>
              <div className="row g-3">
                <div className="col-6">
                  <div className="format-card">
                    <span className="format-badge">MP4</span>
                    <p>The most popular format for high-quality playback. Works smoothly on almost all devices and media players.</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="format-card">
                    <span className="format-badge">3GP</span>
                    <p>A smaller, lightweight format ideal for older mobile devices or saving storage space.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h4 className="text-white mb-4"><i className="fas fa-music me-2"></i>Audio Formats</h4>
              <div className="row g-3">
                <div className="col-6">
                  <div className="format-card">
                    <span className="format-badge">MP3</span>
                    <p>Perfect if you only need the sound from a Facebook video, such as music, interviews, or podcasts.</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="format-card">
                    <span className="format-badge">AAC</span>
                    <p>Offers clear audio with efficient compression and smaller file size.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-white mb-4">Resolution Options</h4>
            <div className="quality-tags">
              <span className="quality-tag">HD</span>
              <span className="quality-tag">1080p Full HD</span>
              <span className="quality-tag">4K Ultra HD</span>
            </div>
            <p className="text-white-50 mt-4">
              Choose the quality that fits your needs. Select your preferred format and resolution before you click download.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why We&apos;re The Best</span>
            <h2>Key Features of Our Facebook Video Downloader</h2>
            <p>Our Facebook video downloader is built to be simple, fast, and reliable. Everything is designed around ease of use and high-quality downloads.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-desktop"></i>
                </div>
                <h4>User-Friendly Interface</h4>
                <p>The tool has a clean and simple interface. Just paste the video URL, choose your format, and click download. No confusion. No extra steps.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>Web-Based App – No Installation Required</h4>
                <p>This is a fully web-based app, so you don&apos;t need to install any software. It works directly in your browser, whether you&apos;re on desktop or mobile.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-magic"></i>
                </div>
                <h4>AI-Enhanced Quality Optimization</h4>
                <p>Our system uses smart AI-based detection to identify the best available video quality. It helps ensure you get clear HD, 1080p, or 4K downloads whenever available.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-play-circle"></i>
                </div>
                <h4>Built-In Video Player Preview</h4>
                <p>Before you download, you can preview the Facebook video using the built-in player. This helps confirm you selected the right file.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-screen"></i>
                </div>
                <h4>Cross-Platform Support</h4>
                <p>The downloader works smoothly on Android, iOS, and desktop devices. It supports modern browsers and delivers a consistent experience across platforms.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>No Watermarks</h4>
                <p>Your downloaded video file stays clean. No added watermarks or branding.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mx-lg-auto">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h4>Fast & Secure Download Process</h4>
                <p>The entire process is secure and private. Links are processed instantly, and files are delivered quickly to your device without unnecessary delays.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works on All Devices Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Universal Compatibility</span>
            <h2>Works on All Devices & Browsers</h2>
            <p>Our Facebook video downloader is fully web-based, so it works smoothly across devices and browsers without installing any extra software.</p>
          </div>
          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fab fa-android"></i>
                </div>
                <h6>Android</h6>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fab fa-apple"></i>
                </div>
                <h6>iPhone (iOS)</h6>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fas fa-laptop"></i>
                </div>
                <h6>Desktop</h6>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fab fa-chrome"></i>
                </div>
                <h6>Chrome</h6>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fab fa-safari"></i>
                </div>
                <h6>Safari</h6>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <div className="device-card">
                <div className="device-icon">
                  <i className="fab fa-google-drive"></i>
                </div>
                <h6>Google Drive</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Advantages</span>
            <h2>Why Choose Us?</h2>
            <p>There are many tools online, but not all of them are simple, safe, and reliable. Here&apos;s why users prefer our Facebook video downloader:</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-gift"></i>
                </div>
                <div>
                  <h5>Free Online Tool</h5>
                  <p>You can download Facebook videos, reels, and stories without paying. It&apos;s a completely free tool with no complicated setup.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-download"></i>
                </div>
                <div>
                  <h5>No Additional Software Required</h5>
                  <p>Everything works in your browser. No apps, no extensions, and no extra software to install.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div>
                  <h5>High-Speed Downloads</h5>
                  <p>Once you paste the video URL and select your format, the download process starts instantly. Fast, smooth, and hassle-free.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div>
                  <h5>Secure & Private</h5>
                  <p>Your links are processed securely. We don&apos;t store your video files or personal data. The entire process stays private.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-tags"></i>
                </div>
                <div>
                  <h5>No Hidden Pricing Plan</h5>
                  <p>There&apos;s no surprise pricing, locked features, or hidden plan upgrades. What you see is what you get.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div>
                  <h5>Optimized for Content Creators</h5>
                  <p>Whether you&apos;re a content creator, social media manager, or just saving favorite videos, this tool is designed to make downloads quick and easy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Got Questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      <i className="fas fa-question-circle me-2 text-primary"></i>
                      Can I download Facebook videos in 4K or HD?
                    </button>
                  </h3>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes, if the original Facebook video supports it, you can choose 4K, 1080p, or HD before you click download. The available quality depends on the source video.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      <i className="fas fa-music me-2 text-primary"></i>
                      Can I convert a Facebook video to MP3?
                    </button>
                  </h3>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. Select the MP3 format to extract audio from a Facebook video. The tool will convert the media file and let you download the MP3 directly to your device.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      <i className="fas fa-film me-2 text-primary"></i>
                      Does it work for Facebook reels and stories?
                    </button>
                  </h3>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. You can download Facebook reels, stories, and regular posts using the same process. Just copy the video URL, paste it into the input field, and choose your format.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      <i className="fas fa-lock me-2 text-primary"></i>
                      Can I download private Facebook videos?
                    </button>
                  </h3>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      You can download private Facebook videos only if you have permission to view them. The video must be accessible to your account for the link to work.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                      <i className="fas fa-water me-2 text-primary"></i>
                      Does the downloader add watermarks?
                    </button>
                  </h3>
                  <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      No. The tool does not add watermarks to your downloaded file. You receive the video in its original format and quality.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                      <i className="fas fa-mobile-alt me-2 text-primary"></i>
                      Is it safe to use on mobile devices?
                    </button>
                  </h3>
                  <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Yes. This is a secure, web-based tool that works on Android and iOS mobile devices through your browser. No additional app or software installation is required.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-card" style={{ borderLeft: '4px solid #1877F2' }}>
                <h3 className="text-gradient mb-4">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  Disclaimer
                </h3>
                <p>
                  We do not host or store any videos on our servers. All media files are hosted on Facebook&apos;s CDNs and remain the property of their respective owners.
                </p>
                <p>
                  This website is an independent social media tool and is not affiliated with Facebook™ or Meta Platforms, Inc. &quot;Facebook&quot; is a trademark of Meta, used for identification purposes only.
                </p>
                <p className="mb-0">
                  Users are responsible for ensuring they have permission to download and use any content in accordance with applicable laws and Facebook&apos;s Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
