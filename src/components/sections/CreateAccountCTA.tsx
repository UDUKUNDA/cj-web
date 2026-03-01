export default function CreateAccountCTA() {
  return (
    <section className="cj-section" id="start">
      <div className="cj-cta-section">
        <div className="cj-cta-grid">
          <div className="cj-cta-content">
            <h2>Create account</h2>
            <p>
              Our mobile app is built to give you quick access to credit, easy repayments, and a
              clear view of your financial activity. Manage everything from your phone - anytime,
              anywhere.
            </p>
            <div className="cj-button-group-cta">
              <button className="cj-btn-download">
                <img src="/assets/App_Store_(iOS).svg" alt="Apple Store" className="cj-store-icon" />
                Download iOS
              </button>
              <button className="cj-btn-download">
                <img
                  src="/assets/Google_Play_2012-2016_icon.svg"
                  alt="Google Play"
                  className="cj-store-icon"
                />
                Download Android
              </button>
            </div>
          </div>

          <div className="cj-cta-phone">
            <img src="/assets/phone-group.png" alt="Phone group" className="cj-phone-group-img" />
          </div>
        </div>
      </div>
    </section>
  );
}
