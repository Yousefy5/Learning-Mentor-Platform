import '../styles/footer.css'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer mt-auto">
        <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
          <div className="d-flex gap-3 mb-2 mb-md-0">
            <Link to="/about-us">About Us</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/legal">Legal</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>

          <div className="d-flex gap-3">
            <a href="https://www.facebook.com/depi.gov.eg" target='_blank'><i className="bi bi-facebook"></i></a>
            <a href="https://x.com/" target='_blank'><i className="bi bi-twitter"></i></a>
            <a href="https://www.linkedin.com/company/digital-egypt-pioneers-initiative-depi/posts/?feedView=all" target='_blank'><i className="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/depi.gov.eg?igsh=MTgyYXZpczFwdHlmMA==" target='_blank'><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

