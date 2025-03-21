import React from 'react'

const Footer = () => {
  return (
    <div>
   
    
        <footer className="footer">
            <div className="footer-container">
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p>Phone: 1800-XXXX-XXXX</p>
                    <p>Email: support@bank.com</p>
                    <p>Address: Bank, XYZ Street, City, State, Zip</p>
                </div>
                <div className="navigation-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/faq">FAQs</a></li>
                        <li><a href="/support">Customer Support</a></li>
                    </ul>
                </div>
                <div className="legal-info">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li>&copy; 2025 Bank. All rights reserved.</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com/bank" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/bank" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/bank" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="cta">
                    <h4>Stay Updated</h4>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
    </div>
  )
}

export default Footer
