import React, { useState, useEffect } from 'react';
import {
  Coffee,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Heart,
  Leaf,
  Users
} from 'lucide-react';
import './App.css';
import coffeeShopImg from './coffee-shop.png';

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#location', label: 'Visit Us' },
    // { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#home" className="navbar__logo">
          <Coffee className="navbar__logo-icon" />
          <span>Eagle Nest Coffee Co.</span>
        </a>

        <ul className={`navbar__links ${isMobileMenuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__content container">
        <span className="hero__tagline">Welcome to</span>
        <h1 className="hero__title">Eagle Nest Coffee Co.</h1>
        <p className="hero__subtitle">
          Where every cup tells a story. Artisan coffee crafted with passion,
          served in a warm and inviting atmosphere.
        </p>
        <div className="hero__buttons">
          <a href="#menu" className="btn btn--primary">
            Explore Our Menu
          </a>
          <a href="#location" className="btn btn--secondary">
            Find Us
          </a>
        </div>
        <a href="#about" className="hero__scroll">
          <span>Discover More</span>
          <ChevronDown className="hero__scroll-icon" />
        </a>
      </div>
    </section>
  );
}

// About Section
function About() {
  const values = [
    {
      icon: <Heart />,
      title: 'Passion',
      description: 'Every cup is crafted with love and dedication to the art of coffee making.'
    },
    {
      icon: <Leaf />,
      title: 'Sustainability',
      description: 'We source ethically grown beans and use eco-friendly practices throughout.'
    },
    {
      icon: <Users />,
      title: 'Community',
      description: 'More than a coffee shop, we\'re a gathering place for neighbors and friends.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__header">
          <span className="section-label">Our Story</span>
          <h2 className="section-title">A Passion Born from Love</h2>
        </div>

        <div className="about__content">
          <div className="about__story">
            <p>
              Eagle Nest Coffee Co. began in 2018 with a simple dream: to create a
              space where exceptional coffee meets genuine hospitality. Founded by
              two coffee enthusiasts who met traveling through the highlands of
              Ethiopia, we brought back not just beans, but a philosophy.
            </p>
            <p>
              Our name comes from the majestic eagles that soar over the mountain
              coffee farms we source from. Like these noble birds, we believe in
              rising above the ordinary, offering our guests an elevated coffee
              experience that nourishes both body and soul.
            </p>
            <p>
              Today, we roast our beans in small batches right here in our shop,
              ensuring every cup captures the unique character of its origin. From
              the first sip to the last, we invite you to taste the difference
              that care and craftsmanship make.
            </p>
          </div>

          <div className="about__image">
            <img src={coffeeShopImg} alt="Eagle Nest Coffee Co. shop" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
          </div>
        </div>

        <div className="about__values">
          <h3 className="about__values-title">Our Values</h3>
          <div className="about__values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h4 className="value-card__title">{value.title}</h4>
                <p className="value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Menu Section
function MenuSection() {
  const menuCategories = [
    {
      name: 'Lattes',
      items: [
        { name: 'Eagle Nest Latte', description: 'White Chocolate, Coconut, Toasted Marshmallow, Signature Nest', price: 'R $6.50 / Lg $7.50', size: '16oz/20oz' },
        { name: 'Royal Eagle', description: 'Banana, Dulce De Leche', price: 'R $5.50 / Lg $6.50', size: '16oz/20oz' },
        { name: 'Scout Latte', description: 'Dark Chocolate, Salted Caramel, Coconut', price: 'R $5.50 / Lg $6.50', size: '16oz/20oz' },
        { name: 'Love Bird', description: 'Raspberry, Dark Chocolate, Cold Foam', price: 'R $6.50 / Lg $7.50', size: '16oz/20oz' },
        { name: 'Cinnamon Swirl', description: 'Cinnamon Bun, White Chocolate', price: 'R $5.50 / Lg $6.50', size: '16oz/20oz' },
        { name: 'Yin Yang Latte', description: 'White Chocolate, Dark Chocolate', price: 'R $5.50 / Lg $6.50', size: '16oz/20oz' },
        { name: 'Strawberries & Cream', description: 'Strawberry, Vanilla, Cold Foam', price: 'R $6.50 / Lg $7.50', size: '16oz/20oz' }
      ]
    },
    {
      name: 'Matcha',
      items: [
        { name: 'Fruity Pebble Matcha', description: 'Vanilla, Lavender Cold Foam', price: 'R $6 / Lg $7', size: '16oz/20oz' },
        { name: 'The Forager', description: 'Strawberry, Blueberry Cold Foam', price: 'R $6 / Lg $7', size: '16oz/20oz' }
      ]
    },
    {
      name: 'Drip Coffee & Frappé',
      items: [
        { name: 'Drip Coffee', description: 'Freshly brewed drip coffee', price: 'R $3.50 / Lg $4.50', size: '16oz/20oz' },
        { name: 'Vanilla Frappé', description: 'Blended vanilla frappé', price: 'Lg $7', size: '20oz' },
        { name: 'Caramel Frappé', description: 'Blended caramel frappé', price: 'Lg $7', size: '20oz' },
        { name: 'Mocha Frappé', description: 'Blended mocha frappé', price: 'Lg $7', size: '20oz' },
        { name: 'White Chocolate Frappé', description: 'Blended white chocolate frappé', price: 'Lg $7', size: '20oz' }
      ]
    },
    {
      name: 'Eaglet Menu',
      items: [
        { name: 'Dirty Soda', description: 'For our younger guests', price: '$4', size: '' },
        { name: 'Mixed Lemonade', description: 'Refreshing lemonade blend', price: '$4', size: '' },
        { name: 'Banana Smoothie', description: 'Creamy banana smoothie', price: '$5', size: '' }
      ]
    },
    {
      name: 'Add-Ons & Flavors',
      items: [
        { name: 'Extra Sweet', description: 'Add extra sweetness to any drink', price: '+$1', size: '' },
        { name: 'Extra Espresso Shot', description: 'Add an extra shot of espresso', price: '+$1', size: '' },
        { name: 'Add Cold Foam', description: 'Add cold foam to any coffee', price: '+$1', size: '' },
        { name: 'Add a Nest', description: 'Marshmallow rim with toasted coconut flakes', price: '+$2', size: '' },
        { name: 'Oat or Almond Milk', description: 'Substitute with oat or almond milk', price: '+50¢', size: '' }
      ]
    }
  ];

  const flavors = [
    'Vanilla', 'Dark Chocolate', 'Toasted Marshmallow', 'Lavender Hazelnut',
    'White Chocolate', 'Brown Sugar Cinnamon', 'Banana', 'French Vanilla',
    'Dulce de Leche', 'Salted Caramel', 'Peach', 'Raspberry', 'Blueberry',
    'Strawberry', 'Milk Chocolate', 'Coconut'
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu__header">
          <span className="section-label">What We Serve</span>
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            Carefully curated beverages crafted from the finest ingredients
          </p>
        </div>

        <div className="menu__categories">
          {menuCategories.map((category, index) => (
            <button
              key={index}
              className={`menu__category-btn ${activeCategory === index ? 'menu__category-btn--active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu__items">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div key={index} className="menu-item" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="menu-item__info">
                <div className="menu-item__header">
                  <h3 className="menu-item__name">{item.name}</h3>
                  {item.size && <span className="menu-item__size">{item.size}</span>}
                </div>
                <p className="menu-item__description">{item.description}</p>
              </div>
              <span className="menu-item__price">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="menu__flavors">
          <h3 className="menu__flavors-title">Available Flavors</h3>
          <p className="menu__flavors-list">{flavors.join(', ')}</p>
        </div>

        <p className="menu__note">
          Sizes: Regular 16oz | Large 20oz
        </p>
      </div>
    </section>
  );
}

// Location Section
function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 4:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 2:00 PM' }
  ];

  return (
    <section id="location" className="location">
      <div className="container">
        <div className="location__header">
          <span className="section-label">Find Us</span>
          <h2 className="section-title">Visit Our Nest</h2>
          <p className="section-subtitle">
            We'd love to welcome you to our cozy corner of the world
          </p>
        </div>

        <div className="location__content">
          <div className="location__info">
            <div className="location__card">
              <div className="location__card-icon">
                <MapPin />
              </div>
              <div className="location__card-content">
                <h3>Address</h3>
                <p>
                  10218 US-41<br />
                  Monteagle, TN 37356
                </p>
              </div>
            </div>

            <div className="location__card">
              <div className="location__card-icon">
                <Clock />
              </div>
              <div className="location__card-content">
                <h3>Hours</h3>
                {hours.map((item, index) => (
                  <div key={index} className="location__hours-row">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="location__card">
              <div className="location__card-icon">
                <Instagram />
              </div>
              <div className="location__card-content">
                <h3>Follow Us</h3>
                <div className="location__social-links">
                  <a href="https://www.facebook.com/share/1GdohpAc7G/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/eaglenestcoffee?igsh=MXI1OXQzNGt4MHJ0bg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="location__map">
            <iframe
              title="Eagle Nest Coffee Co. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.8!2d-85.839722!3d35.240833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88604d5e8f25c34f%3A0x0!2s10218%20US-41%2C%20Monteagle%2C%20TN%2037356!5e0!3m2!1sen!2sus!4v1706400000000"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '8px', minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <Coffee />
              <span>Eagle Nest Coffee Co.</span>
            </div>
            <p>Artisan coffee crafted with care, served in a space where everyone belongs.</p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#location">Visit Us</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <p>10218 US-41<br />Monteagle, TN 37356</p>
            <p><a href="mailto:hello@eaglenestcoffee.com">hello@eaglenestcoffee.com</a></p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Eagle Nest Coffee Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Location />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
