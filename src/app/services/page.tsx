import "@/styles/legacy-service.css";
import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export const metadata = {
  title: "Services - CREDIJAMBO",
  description: "Powering Growth Through Technology & Finance.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="riders-services-hero">
        <div className="riders-bg-text">Our Services</div>

        <div className="riders-hero-inner">
          <h1 className="riders-hero-headline">
            Powering Growth Through <br />
            Technology &amp; Finance
          </h1>

          <p className="riders-hero-subtext">
            From micro loans to online banking platforms and tailored software <br />
            development, we build solutions that move you forward.
          </p>
        </div>
      </section>

      <section className="activity-section">
        <div className="activity-grid">
          <div className="activity-content">
            <h2>
              More activity,
              <br />
              increase t he amount
              <br />
              you of loan
            </h2>
            <p>Build your credit history through consistent usage and timely repayments.</p>
            <p>
              Unlock higher limits and enjoy improved financial flexibility as you grow with us.
            </p>
            <button className="riders-btn-read-more">
              <span className="play-icon">▶</span> Read more
            </button>
          </div>

          <div className="phone-mockup" style={{ position: "relative" }}>
            <img
              src="/assets/confeti.png"
              alt="Confetti"
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "150px",
                opacity: "0.6",
                pointerEvents: "none",
              }}
            />

            <img
              src="/assets/hero-chart-2.svg"
              alt="Icon"
              style={{
                position: "absolute",
                top: "-30px",
                left: "-30px",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/hero-chart.svg"
              alt="Icon"
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/hero-credit-card.svg"
              alt="Icon"
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "-30px",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/hero-pir-chart.svg"
              alt="Icon"
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/hero-time.svg"
              alt="Icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "-50px",
                transform: "translateY(-50%)",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />
            <img
              src="/assets/hero-walet.svg"
              alt="Icon"
              style={{
                position: "absolute",
                top: "50%",
                right: "-50px",
                transform: "translateY(-50%)",
                width: "40px",
                filter: "invert(42%) sepia(100%) saturate(500%) hue-rotate(90deg)",
                pointerEvents: "none",
              }}
            />

            <img
              src="/assets/phone-group.png"
              alt="Phone Mockup"
              style={{ width: "100%", maxWidth: "400px", display: "block", margin: "0 auto" }}
            />
          </div>
        </div>
      </section>

      <section className="riders-software-v2">
        <div className="riders-software-grid">
          <div className="riders-mockup-container">
            <img src="/assets/software vector.png" alt="Software dashboard illustration" className="services-dashboard-image" />
          </div>

          <div className="riders-software-info">
            <h2 className="riders-info-title">
              Software Development <br />&amp; Consultancy
            </h2>
            <p className="riders-info-text">
              Lorem ipsum dolor sit amet consectetur. Viverra vitae dis tincidunt varius vulputate
              ornare quis sed. Imperdiet consequat purus accumsan pharetra nibh odio viverra
              senectus at. Id at tincidunt at imperdiet lectus est fermentum imperdiet. Nulla eget
              sit leo.
            </p>
            <button className="riders-btn-read-more">
              <span className="play-icon">▶</span> Read more
            </button>
          </div>
        </div>
      </section>

      <section className="riders-consultancy-section">
        <div className="riders-container">
          <div className="riders-text-content">
            <h2 className="riders-title">
              Software Development <br />&amp; Consultancy
            </h2>
            <p className="riders-description">
              Lorem ipsum dolor sit amet consectetur. Viverra vitae dis tincidunt varius vulputate
              ornare quis sed. Imperdiet consequat purus accumsan pharetra nibh odio viverra
              senectus at. Id at tincidunt at imperdiet lectus est fermentum imperdiet. Nulla eget
              sit leo.
            </p>
            <button className="riders-btn-read">
              <span className="riders-icon-play">▶</span> Read more
            </button>
          </div>

          <div className="riders-visual-content">
            <img src="/assets/financial-vector.png" alt="Financial growth illustration" className="services-gauge-image" />
          </div>
        </div>
      </section>

      <CreateAccountCTA />
      <DownloadBanner />
    </div>
  );
}
