export default function PrivacyPolicy() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">How We Protect Your Data</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-box">
                <h2>Privacy Policy</h2>
                <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Introduction</h3>
                <p>
                  Welcome to Facebook Video Downloader. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle any information when you use our service.
                </p>

                <h3>2. Information We Do NOT Collect</h3>
                <p>
                  We believe in minimal data collection. Our service is designed to work without requiring any personal information:
                </p>
                <ul>
                  <li>We do not require user registration or accounts</li>
                  <li>We do not collect email addresses</li>
                  <li>We do not store Facebook login credentials</li>
                  <li>We do not track your browsing history</li>
                  <li>We do not use cookies for tracking purposes</li>
                </ul>

                <h3>3. Information We Process</h3>
                <p>
                  The only information we process is:
                </p>
                <ul>
                  <li><strong>Video URLs:</strong> The Facebook video links you paste into our tool are processed temporarily to fetch download links</li>
                  <li><strong>Technical Data:</strong> Basic server logs for system maintenance (IP addresses are anonymized)</li>
                </ul>

                <h3>4. How We Handle Video URLs</h3>
                <p>
                  When you paste a Facebook video URL:
                </p>
                <ul>
                  <li>The URL is processed in real-time to generate download links</li>
                  <li>URLs are not stored on our servers after processing</li>
                  <li>We do not keep logs of downloaded content</li>
                  <li>Processing is done temporarily and automatically deleted</li>
                </ul>

                <h3>5. Data Security</h3>
                <p>
                  We implement appropriate security measures to protect any data processed through our service:
                </p>
                <ul>
                  <li>All connections use HTTPS encryption</li>
                  <li>Our servers are secured with industry-standard protections</li>
                  <li>Regular security audits and updates</li>
                  <li>No permanent storage of user-submitted URLs</li>
                </ul>

                <h3>6. Third-Party Services</h3>
                <p>
                  Our service interacts with Facebook&apos;s servers to retrieve video information. We do not share your data with any third parties for marketing or advertising purposes.
                </p>

                <h3>7. Cookies</h3>
                <p>
                  We use minimal cookies only for:
                </p>
                <ul>
                  <li>Ensuring the website functions properly</li>
                  <li>Remembering your preferences (if any)</li>
                </ul>
                <p>We do not use tracking cookies or third-party analytics.</p>

                <h3>8. Children&apos;s Privacy</h3>
                <p>
                  Our service is not intended for use by children under the age of 13. We do not knowingly collect data from children under 13 years of age.
                </p>

                <h3>9. Your Rights</h3>
                <p>
                  Since we do not collect personal data, there is typically no personal information to access, modify, or delete. However, if you have any concerns about your privacy while using our service, please contact us.
                </p>

                <h3>10. Changes to This Policy</h3>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>

                <h3>11. Contact Us</h3>
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us through our <a href="/contact">Contact Page</a>.
                </p>

                <h3>12. Legal Disclaimer</h3>
                <p>
                  This website is an independent tool and is not affiliated with Facebook™ or Meta Platforms, Inc. We do not host or store any videos on our servers. All media files remain the property of their respective owners on Facebook&apos;s platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
