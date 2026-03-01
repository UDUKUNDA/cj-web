import "@/styles/legacy-contact.css";
import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export const metadata = {
  title: "Contact Us - CREDIJAMBO",
  description: "Talk to us for support and business inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="contacsts-hero">
        <div className="contacsts-intro">
          <h1>Talk to us</h1>
          <p>
            If you have questions or need any general information, please complete this form to
            request the information you need. It will be an honor to help you
          </p>
        </div>

        <div className="contacsts-form-card">
          <div className="contacsts-info-pane">
            <div className="contacsts-info-item">
              <span className="contacsts-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 22s7-5.6 7-12a7 7 0 10-14 0c0 6.4 7 12 7 12zm0-8.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg>
              </span>
              <div>
                <strong>Visit us at Head Office</strong>
                <p>NM 233 St, Nyamagumba, Musanze, Rwanda</p>
              </div>
            </div>
            <div className="contacsts-info-item">
              <span className="contacsts-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.25.56 3.45.56a1 1 0 011 1V21a1 1 0 01-1 1C10.9 22 2 13.1 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.35.56 3.45a1 1 0 01-.24 1L6.6 10.8z" />
                </svg>
              </span>
              <div>
                <strong>Phone</strong>
                <p>+250 788 268 451</p>
              </div>
            </div>
            <div className="contacsts-info-item">
              <span className="contacsts-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7l8-5H4l8 5zm0 2L4 9v9h16V9l-8 5z" />
                </svg>
              </span>
              <div>
                <strong>Email</strong>
                <p>hello@creditjambo.com</p>
              </div>
            </div>
            <div className="contacsts-social-follow">
              <p>Follow us on social media for updates</p>
              <div className="contacsts-social-icons">
                <a href="#" aria-label="LinkedIn">
                  <img src="/assets/linked-in.svg" alt="LinkedIn" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src="/assets/instageam.svg" alt="Instagram" />
                </a>
                <a href="#" aria-label="Facebook">
                  <img src="/assets/facebook.svg" alt="Facebook" />
                </a>
                <a href="#" aria-label="WhatsApp">
                  <img src="/assets/whatsapp.svg" alt="WhatsApp" />
                </a>
                <a href="#" aria-label="X" className="contacsts-social-x">
                  X
                </a>
              </div>
            </div>
          </div>

          <form className="contacsts-main-form">
            <div className="contacsts-form-row">
              <div className="contacsts-field">
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type="text" />
              </div>
              <div className="contacsts-field">
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type="text" />
              </div>
            </div>
            <div className="contacsts-field">
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" required />
            </div>
            <div className="contacsts-field">
              <label htmlFor="subject">Add subject *</label>
              <input id="subject" type="text" required />
            </div>
            <div className="contacsts-field">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} />
            </div>
            <button type="submit" className="contacsts-btn-send">
              Send message <span>➤</span>
            </button>
          </form>
        </div>
      </section>

      <section className="contacsts-map-section">
        <div className="contacsts-map-container">
          <div
            className="contacsts-map-placeholder"
            style={{ backgroundImage: "url('/assets/contact-map.jpg')" }}
          >
            <div className="contacsts-map-pin">
              <strong>Credit Jambo</strong>
              <p>NM 233 St, Nyamagumba...</p>
              <a href="#">Directions</a>
            </div>
          </div>
        </div>
      </section>

      <CreateAccountCTA />
      <DownloadBanner />
    </div>
  );
}
