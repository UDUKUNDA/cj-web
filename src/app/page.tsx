import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>
            Small Loans.
            <br />
            Big Impact.
            <br />
            <span className="underline">Real Growth.</span>
          </h1>
          <p>
            Fast, affordable, and flexible micro-loans
            <br />
            tailored to your needs.
          </p>
          <a href="#start" className="btn-get-started">
            Get started
          </a>
        </div>

        <div className="hero-illustration">
          <div className="handshake-container">
            <img
              src="/assets/hand-shake vector.svg"
              alt="CreditJambo Illustration - Handshake symbolizing partnership"
              className="handshake-image"
            />

            <p className="handshake-label">LOAN REQUEST</p>

            <img src="/assets/Group 1321318962.svg" alt="Additional illustration" className="additional-handshake-svg" />

            <img src="/assets/hero-walet.svg" alt="Wallet icon" className="floating-icon icon-wallet" />
            <img src="/assets/hero-time.svg" alt="Time icon" className="floating-icon icon-clock" />
            <img src="/assets/hero-pir-chart.svg" alt="Pie chart icon" className="floating-icon icon-chart" />
            <img src="/assets/hero-cash.svg" alt="Cash icon" className="floating-icon icon-cash" />
            <img src="/assets/hero-chart-2.svg" alt="Graph icon" className="floating-icon icon-graph" />
          </div>
        </div>
      </section>

      <section className="steps-section">
        <div className="steps-header">
          <h2>Simple Steps to Get Your Loan</h2>
          <p>Our loan process is fast and reliable you can get your loan in as little as 24 hours.</p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">
              <img src="/assets/Frame.svg" alt="Send icon" width="60" height="60" />
            </div>

            <h3>Loan Request</h3>
            <p>Choose your preferred loan type and submit a request directly from the app.</p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">
              <div className="approved-badge">APPROVED</div>
            </div>
            <h3>Loan Approval</h3>
            <p>Our system reviews your request and quickly determines your eligibility.</p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">
              <img src="/assets/Frame-1.svg" alt="Send icon" width="60" height="60" />
            </div>
            <h3>Loan Disbursement</h3>
            <p>Once approved, your loan is sent instantly to your mobile money account.</p>
          </div>

          <div className="step-card">
            <div className="step-number">*</div>
            <div className="step-icon">
              <img src="/assets/Frame-2.svg" alt="Send icon" width="60" height="60" />
            </div>
            <h3>Repayment</h3>
            <p>
              Repay your loan through flexible daily, weekly, or monthly payment options via the
              app.
            </p>
          </div>
        </div>
      </section>

      <section className="payment-section">
        <div className="payment-grid">
          <div className="payment-cards">
            <div className="payment-card">
              <div className="card-icon">
                <img src="/assets/calendar-1.svg" alt="Weekly payment" />
              </div>

              <div className="card-content">
                <h3>Daily Payment</h3>
                <p>
                  Make small, manageable payments every day to stay on track without affecting your
                  cash flow. Perfect for riders with daily income.
                </p>
              </div>
            </div>

            <div className="payment-card featured">
              <div className="star-badge">
                <img src="/assets/star.svg" alt="Monthly payment" />
              </div>
              <div className="card-icon">
                <img src="/assets/calendar-2.svg" alt="Monthly payment" />
              </div>

              <div className="card-content">
                <h3>Monthly Payment</h3>
                <p>
                  A simple plan that lets you spread your repayments across the month without
                  stress.
                </p>
              </div>
            </div>

            <div className="payment-card">
              <div className="card-icon">
                <img src="/assets/calendar-3.svg" alt="Daily payment" />
              </div>

              <div className="card-content">
                <h3>Weekly Payment</h3>
                <p>
                  Perfect for small businesses who prefer smaller, more frequent repayment cycles.
                </p>
              </div>
            </div>
          </div>

          <div className="payment-text">
            <h2>Choose the payment plan that suits you</h2>
            <p>
              Whether you earn daily, weekly, or monthly, Jambo lets you repay your loan in a way
              that aligns with your hustle.
            </p>
            <p>
              We offer you income-tailored repayment plans that match your income cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="activity-section">
        <div className="activity-grid">
          <div className="activity-content">
            <h2>More activity means higher limits</h2>
            <p>Build your credit history through consistent usage and timely repayments.</p>
            <p>
              Unlock higher limits and enjoy improved financial flexibility as you grow with us.
            </p>
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

      <section className="cj-section">
        <div className="cj-header">
          <h1>Credit Jambo offers multiple loan options</h1>
          <p>
            Choose the loan type that matches your needs, from covering daily
            <br />
            expenses to growing your business.
          </p>
        </div>

        <div className="cj-comparison-section">
          <div className="cj-icon-box">
            <img src="/assets/hero-cash.svg" alt="Icon" />
          </div>

          <table className="cj-comparison-table">
            <colgroup>
              <col className="cj-col-labels" />
              <col className="cj-col-data" span={5} />
            </colgroup>
            <thead>
              <tr>
                <th style={{ background: "transparent", border: "none" }} />
                <th>Jambo Cash</th>
                <th>Igisubizo</th>
                <th>Kura (LPO)</th>
                <th>Kura+ (Capital)</th>
                <th>ImberePay</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cj-highlight-row">
                <td className="cj-label-cell">
                  <span className="cj-label-title">Min Default Loan</span>
                  <span className="cj-label-desc">The smallest amount you can borrow.</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">RWF 50,000</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">RWF 150,000</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">RWF 1,000,000</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">RWF 2,500,000</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">50%</span>
                  <span className="cj-sub-value">of your Salary</span>
                </td>
              </tr>
              <tr>
                <td className="cj-label-cell">
                  <span className="cj-label-title">Interest Rate</span>
                  <span className="cj-label-desc">The extra percentage you pay back.</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">9%/mo</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">6.7%/mo</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">6.7%/mo</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">6.7%/mo</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">9%/mo</span>
                </td>
              </tr>
              <tr className="cj-highlight-row">
                <td className="cj-label-cell">
                  <span className="cj-label-title">Loan Tenure</span>
                  <span className="cj-label-desc">The time you have to repay.</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">30 days</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">90 days</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">180 days</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">180 days</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-value">60 days</span>
                </td>
              </tr>
              <tr>
                <td className="cj-label-cell">
                  <span className="cj-label-title">Target Customers</span>
                  <span className="cj-label-desc">Who the loan is meant for.</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-customer-text">Individual*</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-customer-text">
                    Jambo Cash
                    <br />
                    customers
                  </span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-customer-text">Entrepreneurs</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-customer-text">Entrepreneurs</span>
                </td>
                <td className="cj-data-cell">
                  <span className="cj-customer-text">Employees</span>
                </td>
              </tr>
              <tr className="cj-footer-row">
                <td style={{ background: "transparent", border: "none" }} />
                <td colSpan={5}>
                  * We are currently focusing on bodaboda riders (motari) for our base Jambo Cash
                  product only.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CreateAccountCTA />

      <section className="gettingstarted-container">
        <div className="getting-started">
          <h1>What You Need to Get Started</h1>
          <p>
            Getting started with Credit Jambo is easy. Just provide the necessary information below
            so we can verify your identity and set up your account securely.
          </p>
        </div>

        <div className="gettingstarted-card-wrapper">
          <div className="gettingstarted-card">
            <div className="gettingstarted-icon">
              <img src="/assets/Union-1.svg" alt="Individual icon" width="40" height="40" />
            </div>
            <h2 className="gettingstarted-h2">For Individuals</h2>
            <p className="gettingstarted-sub-text">
              The following requirements must be met to build your KYC for registration purposes:
            </p>
            <ul className="gettingstarted-ul">
              <li className="gettingstarted-li">National ID</li>
              <li className="gettingstarted-li">Must be 18 years or older</li>
              <li className="gettingstarted-li">Proof of address</li>
              <li className="gettingstarted-li">RWF 2,000 registration fee</li>
              <li className="gettingstarted-li">Valid Category A driving license</li>
              <li className="gettingstarted-li">Yellow Card (proof of motorcycle ownership)</li>
              <li className="gettingstarted-li">
                RURA license for operating as a boda boda rider in Rwanda
              </li>
              <li className="gettingstarted-li">
                Active MTN Mobile Money or Airtel Money account under your name
              </li>
            </ul>
          </div>

          <div className="gettingstarted-card">
            <div className="gettingstarted-icon">
              <img src="/assets/Union-5.svg" alt="Business icon" width="40" height="40" />
            </div>
            <h2 className="gettingstarted-h2">For Business</h2>
            <p className="gettingstarted-sub-text">
              The following requirements must be met to build your KYC for registration purposes:
            </p>
            <ul className="gettingstarted-ul">
              <li className="gettingstarted-li">ID/Passport for shareholder(s)</li>
              <li className="gettingstarted-li">Valid business registration certificate</li>
              <li className="gettingstarted-li">Up-to-date tax clearance certificate</li>
              <li className="gettingstarted-li">Business plan</li>
              <li className="gettingstarted-li">Notarized Company resolution</li>
              <li className="gettingstarted-li">Loan Purpose Statement</li>
              <li className="gettingstarted-li">Valid LPO (Local Purchase Order)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="features-highlights">
        <div className="container content-grid">
          <div className="section-intro">
            <h1 className="section-title">Why Choose Us</h1>
            <p className="section-subtitle">
              Trusted by thousands of riders, vendors, and SMEs across Africa.
            </p>

            <div className="stats-highlight">
              <span className="stats-number">12,000+</span>
              <span className="stats-label">Happy customers!</span>
            </div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/Union-3.svg" alt="Affordable interest rates" />
              </div>
              <h3 className="feature-title">Affordable interest rates</h3>
              <p className="feature-desc">
                Daily, weekly, or monthly plans tailored to customer income patterns.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/Union-2.svg" alt="Fast and flexible loans" />
              </div>
              <h3 className="feature-title">Fast, simple, flexible loans</h3>
              <p className="feature-desc">
                Quick approvals and easy access to credit based on customer needs.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/Union-4.svg" alt="Flexible repayment terms" />
              </div>
              <h3 className="feature-title">Flexible Repayment terms</h3>
              <p className="feature-desc">
                Daily, weekly, or monthly plans tailored to customer income patterns.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/Union-4.svg" alt="Online and offline access" />
              </div>
              <h3 className="feature-title">Online and offline access</h3>
              <p className="feature-desc">
                Web, mobile app, and USSD channels for anytime, anywhere use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="community-section">
        <div className="community-container">
          <h2 className="community-title">
            Our community of riders, vendors, and hardworking entrepreneurs trust <b>Credit Jambo</b>{" "}
            to power their growth every day.
          </h2>
          <p className="community-subtitle">Here&apos;s what they say about their experience with us:</p>

          <div className="community-grid">
            <div className="community-video-card">
              <div className="community-play-button" />
            </div>

            <div className="community-card-stack">
              <div className="community-card">
                <p className="community-quote-text">
                  &quot;Akazi dukora benshi badufata nkaho tudashoboye ariko kuva Credit jambo yaza
                  twiteza imbere ntangorane&quot;
                </p>
                <div className="community-author-info">
                  <h4 className="community-author-name">Habinshuti Emmanuel</h4>
                  <p className="community-author-role">Customer</p>
                </div>
              </div>
              <div className="community-card">
                <p className="community-quote-text">
                  &quot;Akazi dukora benshi badufata nkaho tudashoboye ariko kuva Credit jambo yaza
                  twiteza imbere ntangorane&quot;
                </p>
                <div className="community-author-info">
                  <h4 className="community-author-name">Habinshuti Emmanuel</h4>
                  <p className="community-author-role">Customer</p>
                </div>
              </div>
            </div>

            <div className="community-card community-card-tall">
              <p className="community-quote-text">
                &quot;Uziko wageraga naho uparika moto kubera utasha kubona amafaranga agura
                ibwishiziga cyawe&quot;
              </p>
              <div className="community-author-info">
                <h4 className="community-author-name">Bugingo Daniel</h4>
                <p className="community-author-role">Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-container">
          <h2 className="services-main-title">Our Services</h2>
          <p className="services-description">
            We offer digital financial solutions that help individuals and businesses access credit,
            manage finances, and grow.
          </p>

          <div className="services-grid-top">
            <div className="services-card">
              <div className="services-content">
                <h3 className="services-card-title">
                  Micro-loans <br /> to individuals &amp; MSMEs
                </h3>
                <p className="services-card-text">
                  We provide fast and flexible micro-loans to individuals and MSMEs, supporting
                  income growth and business expansion.
                </p>
              </div>
              <div className="services-image-box services-phone-mockup">
                <img src="/assets/phone-group.png" alt="Credit Jambo phone mockup" className="services-phone-image" />
              </div>
            </div>

            <div className="services-card">
              <div className="services-content">
                <h3 className="services-card-title">
                  Financial management <br /> systems
                </h3>
                <p className="services-card-text">
                  We build modern financial tools for MSMEs - helping them manage loans,
                  collections, and customer credit effortlessly.
                </p>
              </div>
              <div className="services-image-box services-gauge-mockup">
                <img src="/assets/financial-vector.png" alt="Financial growth illustration" className="services-gauge-image" />
              </div>
            </div>
          </div>

          <div className="services-card services-card-wide">
            <div className="services-image-box services-dashboard-mockup">
              <img src="/assets/software vector.png" alt="Software dashboard illustration" className="services-dashboard-image" />
            </div>

            <div className="services-content">
              <h3 className="services-card-title">
                Software Development <br /> &amp; Consultancy
              </h3>
              <p className="services-card-text">
                From custom financial solutions to digital tools for business operations, our team
                develops reliable software built for African markets.
              </p>
              <div className="services-icons" />
            </div>
          </div>
        </div>
      </section>

      <DownloadBanner />
    </div>
  );
}
