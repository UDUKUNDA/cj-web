export default function Footer() {
  return (
    <footer className="cj-footer-container">
      <div className="cj-footer-main">
        <div className="cj-footer-col">
          <div className="logo cj-footer-logo-text" aria-label="Credit Jambo">
            <span className="credi">
              CREDI<span className="letter-t">T</span>
            </span>
            <span className="jambo">
              <span>J</span>
              <span>A</span>
              <span>M</span>
              <span>B</span>
              <span>O</span>
            </span>
          </div>
          <p className="cj-footer-tagline">Growing with you...</p>
          <p className="cj-footer-description">
            Committed to providing secure, transparent, and inclusive financial services for all.
          </p>
        </div>

        <div className="cj-footer-col">
          <h3 className="cj-footer-heading">Contact us</h3>
          <div className="cj-footer-contact-item">
            <span className="cj-footer-label">Address:</span>
            <p>NM 233 St, Nyamagumba | Musanze - Rwanda</p>
          </div>
          <div className="cj-footer-contact-row">
            <div className="cj-footer-contact-item">
              <span className="cj-footer-label">General Inquiries:</span>
              <a href="tel:+250788268451" className="cj-footer-link">
                +250 788 268 451
              </a>
            </div>
            <div className="cj-footer-contact-item">
              <span className="cj-footer-label">Customer Care:</span>
              <a href="mailto:hello@creditjambo.com" className="cj-footer-link">
                hello@creditjambo.com
              </a>
            </div>
          </div>
          <p className="cj-footer-license">Licensed NDSFP by National Bank of Rwanda</p>
        </div>

        <div className="cj-footer-col">
          <h3 className="cj-footer-heading">Our Privacy & Cookies Policy</h3>
          <p className="cj-footer-newsletter-text">Sign up to get the latest news on our products.</p>

          <div className="cj-footer-subscribe-box">
            <div className="cj-footer-input-group">
              <label htmlFor="footer-email">Email:</label>
              <input id="footer-email" type="email" placeholder="youremail@gmail.com" />
            </div>
            <button className="cj-footer-subscribe-btn">Subscribe &rarr;</button>
          </div>

          <div className="cj-footer-socials">
            <p className="cj-footer-label">Social Media:</p>
            <div className="cj-footer-icons">
              <a href="#" className="cj-footer-icon" aria-label="WhatsApp">
                <img src="/assets/whatsapp.svg" alt="WhatsApp" />
              </a>

              <a href="#" className="cj-footer-icon" aria-label="Facebook">
                <img src="/assets/facebook.svg" alt="Facebook" />
              </a>

              <a href="#" className="cj-footer-icon" aria-label="Instagram">
                <img src="/assets/instageam.svg" alt="Instagram" />
              </a>

              <a href="#" className="cj-footer-icon" aria-label="LinkedIn">
                <img src="/assets/linked-in.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="cj-footer-bottom">
        <p>
          <a href="#">Terms & Conditions</a> | Credit Jambo Ltd &copy; 2025
        </p>
      </div>
    </footer>
  );
}
