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
              <span className="contacsts-icon">📍</span>
              <div>
                <strong>Visit us at Head Office</strong>
                <p>NM 233 St, Nyamagumba, Musanze, Rwanda</p>
              </div>
            </div>
            <div className="contacsts-info-item">
              <span className="contacsts-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+250 788 268 451</p>
              </div>
            </div>
            <div className="contacsts-info-item">
              <span className="contacsts-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>hello@creditjambo.com</p>
              </div>
            </div>
            <div className="contacsts-social-follow">
              <p>Follow us on social media for updates</p>
              <div className="contacsts-social-icons">
                <a href="#">in</a>
                <a href="#">ig</a>
                <a href="#">fb</a>
                <a href="#">tw</a>
                <a href="#">x</a>
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
