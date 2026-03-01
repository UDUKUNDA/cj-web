import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export const metadata = {
  title: "For business - CREDIJAMBO",
  description: "Bridging Africa's financial gap for the unbanked.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bridging-section">
        <div className="bridging-container">
          <div className="bridging-content-wrapper">
            <div className="bridging-column-header">
              <h2 className="bridging-title">Bridging Africa’s financial gap for the unbanked.</h2>
            </div>

            <div className="bridging-column-text">
              <p className="bridging-description">
                Credit Jambo, licensed NDFSP by the National Bank of Rwanda, offers affordable and
                accessible financial services to low-income earners and SMEs across Rwanda and
                Africa, fostering financial inclusion and supporting the continent&apos;s economic
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="riders-mission-vision">
        <div
          className="riders-hero-container"
          style={{ backgroundImage: "url('/assets/about-riders.jpg')" }}
        >
          <div className="riders-hero-overlay" />

          <div className="riders-logo-cluster">
            <span className="riders-circle riders-circle-dark" />
            <span className="riders-circle riders-circle-green" />
            <span className="riders-circle riders-circle-light" />
          </div>

          <div className="riders-card-wrap">
            <div className="riders-main-card riders-card-mint">
              <div className="riders-icon-box">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To bridge the gap between millions of unbanked Africans and accessibility of
                tailored finances to fulfil their dreams of prosperity.
              </p>
            </div>

            <div className="riders-main-card riders-card-forest">
              <div className="riders-icon-box">🧭</div>
              <h3>Our Vision</h3>
              <p>
                To become the leading financial services provider in Africa, empowering individuals
                and businesses to achieve their financial goals and drive economic development
                across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="riders-values-grid">
        <div className="riders-section-header">
          <h2 className="riders-section-title">Our Values</h2>
          <p className="riders-section-subtitle">
            Trusted by thousands of riders, vendors, and SMEs across Africa.
          </p>
        </div>

        <div className="riders-grid-container">
          <div className="riders-grid-row">
            <div className="riders-value-card">
              <div className="riders-value-icon">💡</div>
              <h4>Innovation</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Volutpat ultrices et et</p>
            </div>
            <div className="riders-value-card">
              <div className="riders-value-icon">🎧</div>
              <h4>Customer centric</h4>
              <p>facilisis vel morbi ut at faucibus. Convallis arcu quam ac auctor.</p>
            </div>
          </div>

          <div className="riders-grid-row">
            <div className="riders-value-card">
              <div className="riders-value-icon">🔍</div>
              <h4>Transparency</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Massa amet feugiat vel vulputate integer.</p>
            </div>
            <div className="riders-value-card">
              <div className="riders-value-icon">⚡</div>
              <h4>Swift &amp; Flexible</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Consectetur et mauris quis diam. Tellus proin.</p>
            </div>
            <div className="riders-value-card">
              <div className="riders-value-icon">👥</div>
              <h4>Community &amp; Teamwork</h4>
              <p>Lorem ipsum dolor sit amet consectetur. Sit vehicula ut bibendum in dolor.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="riders-terms-section">
        <div className="riders-terms-container">
          <div className="riders-terms-header">
            <h1 className="riders-terms-title">Terms &amp; Conditions</h1>
            <p className="riders-terms-instruction">Click Doc to View</p>
          </div>

          <div className="riders-terms-list-wrapper">
            <ol className="riders-terms-list">
              <li>
                <a href="#" className="riders-link">
                  Lending Terms &amp; Conditions
                </a>
                <span className="riders-lang-tag">(Kinyarwanda)</span>
              </li>
              <li>
                <a href="#" className="riders-link">
                  Social Media Policy
                </a>
              </li>
              <li>
                <a href="#" className="riders-link">
                  Acceptable Use Policy
                </a>
              </li>
              <li>
                <a href="#" className="riders-link">
                  Customer Service Charter
                </a>
              </li>
              <li>
                <a href="#" className="riders-link">
                  Workplace Anti-bullying Policy
                </a>
              </li>
              <li>
                <a href="#" className="riders-link">
                  Privacy &amp; Cookies Policy
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <CreateAccountCTA />
      <DownloadBanner />
    </div>
  );
}
