const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-6 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">RESTAURANT</h5>
            <p className="text-secondary">
              Crafting unforgettable flavors, where tradition meets innovation — welcome to a taste revolution.
            </p>
          </div>

          {/* Hours */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Opening Hours</h6>
            <ul className="list-unstyled text-secondary">
              <li>Monday – Sunday</li>
              <li className="text-warning">8:00 AM – 10:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="text-secondary mb-1">
              <i className="bi bi-envelope-fill me-2 text-warning"></i>
              <a href="mailto:smartdine@yahoo.com" className="text-decoration-none text-secondary link-hover">
                smartdine@yahoo.com
              </a>
            </p>
            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
              Hubli, Karnataka
            </p>
            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
              Dharwad, Karnataka
            </p>
            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
              Belgavi, Karnataka
            </p>

          </div>

        </div>

        <hr className="border-secondary mt-4" />
        <div className="text-center text-muted small">
          © {new Date().getFullYear()} RESTAURANT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
