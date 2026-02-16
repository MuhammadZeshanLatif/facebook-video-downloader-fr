export default function DMCA() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">DMCA Policy</h1>
          <p className="page-subtitle">Digital Millennium Copyright Act Compliance</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content-box">
                <h2>DMCA Policy</h2>
                <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>

                <h3>1. Introduction</h3>
                <p>
                  Facebook Video Downloader respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). This policy outlines our procedures for handling copyright infringement claims.
                </p>

                <h3>2. Important Notice</h3>
                <div className="alert alert-warning">
                  <i className="fas fa-exclamation-triangle me-2"></i>
                  <strong>We Do Not Host Content:</strong> We want to emphasize that we do not host, store, or distribute any video content on our servers. Our service merely provides a technical interface to access content that is already publicly available on Facebook&apos;s platform.
                </div>

                <h3>3. Reporting Copyright Infringement</h3>
                <p>
                  If you believe that your copyrighted work has been accessed through our service in a way that constitutes copyright infringement, please provide us with a written notice containing the following information:
                </p>
                <ul>
                  <li>A physical or electronic signature of the copyright owner or authorized agent</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of the material that is claimed to be infringing</li>
                  <li>Your contact information (address, telephone number, email)</li>
                  <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                  <li>A statement that the information in the notification is accurate, under penalty of perjury</li>
                </ul>

                <h3>4. DMCA Agent Contact</h3>
                <p>
                  DMCA notices should be sent to our designated agent at:
                </p>
                <div className="alert alert-info">
                  <p className="mb-1"><strong>DMCA Agent</strong></p>
                  <p className="mb-1">Facebook Video Downloader</p>
                  <p className="mb-1">Email: dmca@yourdomain.com</p>
                  <p className="mb-0">Please include &quot;DMCA Notice&quot; in the subject line</p>
                </div>

                <h3>5. Counter-Notification</h3>
                <p>
                  If you believe that your content was removed or disabled by mistake or misidentification, you may file a counter-notification containing:
                </p>
                <ul>
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the material that has been removed</li>
                  <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                  <li>Your name, address, telephone number, and email address</li>
                  <li>A statement that you consent to the jurisdiction of the federal court in your district</li>
                </ul>

                <h3>6. Repeat Infringers</h3>
                <p>
                  We reserve the right to terminate access to our service for users who are found to be repeat infringers of copyright.
                </p>

                <h3>7. Disclaimer</h3>
                <p>
                  Our service operates as an intermediary tool for accessing publicly available content. We:
                </p>
                <ul>
                  <li>Do not upload or host any video content</li>
                  <li>Do not control the content available on Facebook</li>
                  <li>Cannot remove content from Facebook&apos;s servers</li>
                  <li>Encourage users to respect copyright laws</li>
                </ul>

                <h3>8. Third-Party Content</h3>
                <p>
                  All videos accessed through our service are hosted on Facebook&apos;s servers and remain the property of their respective owners. We have no control over the content hosted on Facebook and cannot remove content from their platform.
                </p>

                <h3>9. Good Faith Policy</h3>
                <p>
                  We act in good faith to comply with copyright laws. Upon receiving a valid DMCA notice, we will:
                </p>
                <ul>
                  <li>Review the notice promptly</li>
                  <li>Take appropriate action as required by law</li>
                  <li>Notify the affected user if possible</li>
                  <li>Maintain records of all DMCA notices</li>
                </ul>

                <h3>10. Misrepresentation</h3>
                <p>
                  Please note that any person who knowingly materially misrepresents that material is infringing, or that it was removed by mistake, may be liable for damages, including costs and attorneys&apos; fees.
                </p>

                <h3>11. Changes to This Policy</h3>
                <p>
                  We may update this DMCA policy from time to time. Changes will be posted on this page with an updated revision date.
                </p>

                <h3>12. Contact Information</h3>
                <p>
                  For DMCA-related inquiries or to submit a notice, please use the contact information provided above or visit our <a href="/contact">Contact Page</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
