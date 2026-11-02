import React from 'react';
import { Instagram, Facebook, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="brand brand-footer">
            <span className="brand-mark">✺</span>
            <span className="brand-name">
              gowmari
              <small>SWEETS & CELEBRATIONS</small>
            </span>
          </a>

          <p>
            Made with tradition, shared with love. Here's to a sweeter celebration.
          </p>

          <div className="socials">
            <a href="#visit" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="#visit" aria-label="Facebook">
              <Facebook size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="#sweets">Our sweets</a>
          <a href="#story">Our story</a>
          <a href="#gifts">Gift boxes</a>
          <a href="#offers">Diwali offers</a>
        </div>

        <div>
          <h4>Come say hello</h4>
          <p>
            <MapPin size={16} /> Palani Chettipatti, Theni,
            <br />
            Tamil Nadu 625531
          </p>
          <p>
            <Phone size={16} /> Please confirm shop phone
          </p>
          <a
            className="footer-map"
            href="https://www.google.com/maps/search/?api=1&query=Palani+Chettipatti+Theni+Tamil+Nadu"
            target="_blank"
            rel="noreferrer"
          >
            Find us on Maps <ArrowUpRight size={15} />
          </a>
        </div>

        <div>
          <h4>A little sweetness</h4>
          <p>Get festive updates and seasonal favourites.</p>

          <form
            className="subscribe-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Newsletter sign-up demo only.');
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />
            <button aria-label="Subscribe">
              <ArrowUpRight size={18} />
            </button>
          </form>

          <small className="form-note">Newsletter preview · no email is sent</small>
        </div>
      </div>
    </footer>
  );
}