const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">RESTAURANT</h5>
            <p className="text-secondary">
              Elevating taste one plate at a time. Gourmet dining meets tradition and flair.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Explore</h6>
            <ul className="list-unstyled text-secondary">
              <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Home</a></li>
              <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Menu</a></li>
              <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Chefs</a></li>
              <li><a href="#" className="text-decoration-none text-secondary d-block py-1">Contact</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Opening Hours</h6>
            <ul className="list-unstyled text-secondary">
              <li>Sun – Thu</li>
              <li className="text-warning">8:00 AM – 9:00 PM</li>
              <li className="mt-2">Fri Only</li>
              <li className="text-warning">3:00 PM – 9:00 PM</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
            <p className="text-secondary mb-1">
              <i className="bi bi-envelope-fill me-2 text-warning"></i>
              <a href="mailto:smartdine@gmail.com" className="text-decoration-none text-secondary">smartdine@gmail.com</a>
            </p>
            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
              Hubli, India
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="text-light fs-5 me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-5 me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-5 me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light fs-5"><i className="bi bi-linkedin"></i></a>
            </div>
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
