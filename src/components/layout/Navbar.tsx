export default function Navbar() {
  return (
    <header>
      <div className="logo" aria-label="Credit Jambo">
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

      <nav>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact us</a>
        <a href="#start" className="btn-get-started">
          Get started
        </a>
      </nav>
    </header>
  );
}
