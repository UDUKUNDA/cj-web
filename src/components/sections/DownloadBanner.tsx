export default function DownloadBanner() {
  return (
    <section className="downloadstarting-banner">
      <div className="downloadstarting-text-box">
        <h1 className="downloadstarting-title">Get started Today</h1>
        <p className="downloadstarting-subtitle">Download our app now!</p>
      </div>

      <div className="downloadstarting-actions">
        <a href="#" className="downloadstarting-link">
          <img src="/assets/Union-7.svg" alt="Android" className="downloadstarting-icon" />
          Download Android
        </a>
        <a href="#" className="downloadstarting-link">
          <img src="/assets/Union-6.svg" alt="iOS" className="downloadstarting-icon" />
          Download iOS
        </a>
      </div>
    </section>
  );
}
