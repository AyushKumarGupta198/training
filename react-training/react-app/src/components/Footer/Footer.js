import "./Footer.css";

const Footer = ({ companyName }) => {
  return (
    <footer className="footer">
      <div >
        <p className="footer-text">&copy; {new Date().getFullYear()} { companyName }. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
