import React, { useState, useEffect } from 'react';
import {
  Coffee,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Menu as MenuIcon,
  X,
  ChevronDown,
  Heart,
  Leaf,
  Users,
  Send
} from 'lucide-react';
import './App.css';

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
    { href: '#contact', label: 'Contact' }
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
            <div className="about__image-placeholder">
              <Coffee size={64} />
              <span>Crafted with Care</span>
            </div>
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
      name: 'Espresso Drinks',
      items: [
        { name: 'Espresso', description: 'Rich, bold, and perfectly pulled', price: '$3.50', size: 'Single' },
        { name: 'Double Espresso', description: 'Twice the intensity', price: '$4.50', size: 'Double' },
        { name: 'Americano', description: 'Espresso with hot water, smooth and satisfying', price: '$4.00', size: '12oz' },
        { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and velvety foam', price: '$5.00', size: '8oz' },
        { name: 'Latte', description: 'Espresso with silky steamed milk', price: '$5.50', size: '12oz' },
        { name: 'Flat White', description: 'Velvety microfoam with a double shot', price: '$5.50', size: '8oz' },
        { name: 'Mocha', description: 'Espresso, chocolate, and steamed milk', price: '$6.00', size: '12oz' },
        { name: 'Macchiato', description: 'Espresso marked with a dollop of foam', price: '$4.00', size: 'Single' }
      ]
    },
    {
      name: 'Cold Beverages',
      items: [
        { name: 'Cold Brew', description: 'Slow-steeped for 18 hours, naturally sweet', price: '$5.00', size: '16oz' },
        { name: 'Iced Latte', description: 'Espresso over ice with cold milk', price: '$5.50', size: '16oz' },
        { name: 'Iced Americano', description: 'Espresso with cold water over ice', price: '$4.50', size: '16oz' },
        { name: 'Nitro Cold Brew', description: 'Silky smooth, infused with nitrogen', price: '$6.00', size: '16oz' },
        { name: 'Iced Mocha', description: 'Chocolate, espresso, and cold milk over ice', price: '$6.50', size: '16oz' }
      ]
    },
    {
      name: 'Specialty & Seasonal',
      items: [
        { name: 'Honey Lavender Latte', description: 'Local honey, lavender, and espresso', price: '$6.50', size: '12oz' },
        { name: 'Vanilla Bean Latte', description: 'Real vanilla bean with steamed milk', price: '$6.00', size: '12oz' },
        { name: 'Maple Oat Latte', description: 'Maple syrup with oat milk', price: '$6.50', size: '12oz' },
        { name: 'Affogato', description: 'Espresso poured over vanilla gelato', price: '$7.00', size: 'Single' }
      ]
    },
    {
      name: 'Non-Coffee',
      items: [
        { name: 'Hot Chocolate', description: 'Rich Belgian chocolate with steamed milk', price: '$4.50', size: '12oz' },
        { name: 'Chai Latte', description: 'Spiced chai with steamed milk', price: '$5.00', size: '12oz' },
        { name: 'Matcha Latte', description: 'Ceremonial grade matcha with steamed milk', price: '$5.50', size: '12oz' },
        { name: 'London Fog', description: 'Earl Grey, vanilla, and steamed milk', price: '$5.00', size: '12oz' }
      ]
    }
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
                  <span className="menu-item__size">{item.size}</span>
                </div>
                <p className="menu-item__description">{item.description}</p>
              </div>
              <span className="menu-item__price">{item.price}</span>
            </div>
          ))}
        </div>

        <p className="menu__note">
          All drinks available with oat, almond, or coconut milk (+$0.75)
        </p>
      </div>
    </section>
  );
}

// Location Section
function Location() {
  const hours = [
    { day: 'Monday - Friday', time: '7:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 6:00 PM' }
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
                <Phone />
              </div>
              <div className="location__card-content">
                <h3>Contact</h3>
                <p>
                  <a href="tel:+15035551234">(503) 555-1234</a>
                </p>
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

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Questions, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit}>
            {isSubmitted && (
              <div className="contact__success">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <div className="contact__form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn--primary btn--full">
              <Send size={18} />
              Send Message
            </button>
          </form>

          <div className="contact__info">
            <div className="contact__info-card">
              <h3>Other Ways to Reach Us</h3>
              <div className="contact__info-item">
                <Mail />
                <a href="mailto:hello@eaglenestcoffee.com">hello@eaglenestcoffee.com</a>
              </div>
              <div className="contact__info-item">
                <Phone />
                <a href="tel:+15035551234">(503) 555-1234</a>
              </div>
            </div>

            <div className="contact__social">
              <h3>Follow Our Journey</h3>
              <div className="contact__social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook />
                </a>
              </div>
            </div>
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
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Contact</h4>
            <p>10218 US-41<br />Monteagle, TN 37356</p>
            <p><a href="tel:+15035551234">(503) 555-1234</a></p>
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
