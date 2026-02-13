# 🚀 Quick Reference Card - Master Header & Footer

## Copy-Paste Code for New Pages

### Option 1: Complete Page Template
Use `page-template.html` - already includes master header & footer ready to go!

### Option 2: Manual Setup

Copy this to the beginning of your `<body>` tag:

```html
<!-- MASTER HEADER -->
<div class="top-bar">
    <div class="container d-flex justify-content-between align-items-center">
        <div class="contact-info">
            <small><i class="fas fa-envelope me-2"></i> info@vihaantravels.com</small>
            <span class="mx-2">|</span>
            <small><i class="fas fa-phone-alt me-2"></i> +91-9897352211</small>
        </div>
        <div class="social-links d-none d-md-block">
            <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" title="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
    </div>
</div>

<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <div class="brand-text">
                <h2 class="m-0 fw-bold text-primary">Vihaan<span class="text-success">Travels</span></h2>
                <small class="text-muted" style="font-size: 12px; letter-spacing: 1px;">Trust with Nature</small>
            </div>
            <div class="heli-animation-container ms-3">
                <i class="fas fa-helicopter text-primary heli-icon"></i>
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="packages.html">Packages</a></li>
                <li class="nav-item"><a class="nav-link" href="destinations.html">Destination</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">Services</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="wedding-packages.html">Wedding Packages</a></li>
                        <li><a class="dropdown-item" href="activities.html">Activities</a></li>
                        <li><a class="dropdown-item" href="car-rental.html">Car Rental</a></li>
                        <li><a class="dropdown-item" href="bus-rental.html">Bus Rental</a></li>
                        <li><a class="dropdown-item" href="helicopter-packages.html">Helicopter Packages</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="hotels.html">Hotel</a></li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
            <a href="tel:9897352211" class="btn btn-primary rounded-pill ms-3 px-4">Call Now</a>
        </div>
    </div>
</nav>
```

---

## Master Footer Code

Add this before `</body>` closing tag:

```html
<!-- MASTER FOOTER -->
<footer class="bg-dark text-white pt-5 pb-0" id="contact">
    <div class="container">
        <div class="row g-4 mb-4">
            <div class="col-lg-4 mb-4">
                <h3 class="fw-bold text-white mb-3">
                    <span class="text-primary">Vihaan</span>Travels
                </h3>
                <p class="text-white-50 small">Trust with Nature. We are Haridwar's most trusted travel partner for Chardham Yatra and Adventure Tourism since 2015.</p>
                <div class="d-flex gap-3 mt-4">
                    <a href="https://facebook.com" class="footer-social-icon" title="Facebook"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="https://instagram.com" class="footer-social-icon" title="Instagram"><i class="fab fa-instagram fa-lg"></i></a>
                    <a href="https://wa.me/919897352211" class="footer-social-icon" title="WhatsApp"><i class="fab fa-whatsapp fa-lg"></i></a>
                    <a href="https://youtube.com" class="footer-social-icon" title="YouTube"><i class="fab fa-youtube fa-lg"></i></a>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <h5 class="text-white mb-3 fw-bold">Contact Us</h5>
                <ul class="list-unstyled text-white-50 small">
                    <li class="mb-3 d-flex">
                        <i class="fas fa-user text-primary me-3" style="min-width: 20px;"></i>
                        <span><strong>Ketan Sehgal</strong> (Owner)</span>
                    </li>
                    <li class="mb-3 d-flex">
                        <i class="fas fa-phone text-primary me-3" style="min-width: 20px;"></i>
                        <span>
                            <a href="tel:+919897352211" class="text-white-50 text-decoration-none">+91-9897352211</a>,
                            <a href="tel:+919761620581" class="text-white-50 text-decoration-none">9761620581</a>
                        </span>
                    </li>
                    <li class="mb-3 d-flex">
                        <i class="fas fa-envelope text-primary me-3" style="min-width: 20px;"></i>
                        <a href="mailto:info@vihaantravels.com" class="text-white-50 text-decoration-none">info@vihaantravels.com</a>
                    </li>
                    <li class="mb-3 d-flex">
                        <i class="fas fa-map-marker-alt text-primary me-3" style="min-width: 20px;"></i>
                        <span>Shop No. 8, Railway Road, Haridwar, Uttarakhand 249401</span>
                    </li>
                </ul>
            </div>
            <div class="col-lg-4 mb-4">
                <h5 class="text-white mb-3 fw-bold">Quick Links</h5>
                <div class="row small">
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="index.html" class="footer-link">Home</a></li>
                            <li class="mb-2"><a href="packages.html" class="footer-link">Packages</a></li>
                            <li class="mb-2"><a href="destinations.html" class="footer-link">Destinations</a></li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="hotels.html" class="footer-link">Hotels</a></li>
                            <li class="mb-2"><a href="activities.html" class="footer-link">Activities</a></li>
                            <li class="mb-2"><a href="#" class="footer-link">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <h6 class="text-white mb-2 fw-bold">Newsletter</h6>
                    <div class="input-group input-group-sm">
                        <input type="email" class="form-control" placeholder="Your email">
                        <button class="btn btn-primary" type="button" id="subscribeBtn">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-secondary my-4">
        <div class="py-4">
            <div class="row align-items-center">
                <div class="col-md-6 small text-white-50 mb-3 mb-md-0">
                    &copy; 2024-2025 Vihaan Tour & Travels. All Rights Reserved.
                </div>
                <div class="col-md-6 small text-white-50 text-md-end">
                    <a href="#" class="text-white-50 text-decoration-none me-3">Terms & Conditions</a>
                    <a href="#" class="text-white-50 text-decoration-none">Refund Policy</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Back to Top Button -->
<button class="btn btn-primary btn-sm rounded-circle back-to-top d-none" id="backToTop" title="Back to Top">
    <i class="fas fa-arrow-up"></i>
</button>
```

---

## Required in `<head>` Tag

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
```

---

## Required Before `</body>` Tag

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="script.js"></script>
```

---

## Page File Names to Create

```
✅ index.html (Home - DONE)
⭕ packages.html (Packages)
⭕ destinations.html (Destinations)
⭕ hotels.html (Hotels)
⭕ activities.html (Activities)
⭕ wedding-packages.html
⭕ car-rental.html
⭕ bus-rental.html
⭕ helicopter-packages.html
```

---

## Key CSS Classes to Know

| Class | Purpose |
|-------|---------|
| `.top-bar` | Contact info bar at top |
| `.navbar` | Sticky navigation |
| `.navbar-brand` | Logo and branding |
| `.nav-link` | Navigation items |
| `.dropdown-menu` | Services dropdown |
| `.hero-section` | Page banner area |
| `.search-widget` | Search form |
| `footer` | Main footer |
| `.back-to-top` | Back to top button |
| `.footer-social-icon` | Social media icons |
| `.footer-link` | Footer links |

---

## JavaScript Events

```javascript
// Back to top button shows after 300px scroll
// Newsletter form validates email format
// Dropdown opens on hover (desktop)
// Navbar adds shadow on scroll
// Mobile menu closes when link clicked
```

---

## Color Variables (in style.css)

```css
--primary: #006ce4      /* Brand blue */
--secondary: #febb02    /* Accent yellow */
--success: #008234      /* Green highlights */
--text-dark: #1a1a1a
--text-light: #6b6b6b
```

---

## Navigation Structure

```
Home → index.html
Packages → packages.html
Destination → destinations.html
Services
  ├─ Wedding Packages → wedding-packages.html
  ├─ Activities → activities.html
  ├─ Car Rental → car-rental.html
  ├─ Bus Rental → bus-rental.html
  └─ Helicopter Packages → helicopter-packages.html
Hotel → hotels.html
Contact → #contact (footer)
```

---

## Tips for Success

1. Always use `page-template.html` as starting point for new pages
2. Keep footer contact info updated
3. Update social media URLs to your actual profiles
4. Test all links before going live
5. Check mobile menu works on small screens
6. Verify phone numbers are clickable on mobile
7. Newsletter form shows success message

---

## Support Files

📄 **header.html** - Standalone header (reference only)  
📄 **footer.html** - Standalone footer (reference only)  
📄 **page-template.html** - Use this to create new pages  
📖 **MASTER_HEADER_FOOTER_GUIDE.md** - Detailed documentation  
📖 **IMPLEMENTATION_SUMMARY.md** - What was done and why  
📋 **QUICK_REFERENCE.md** - This file  

---

**Version:** 1.0  
**Last Updated:** February 5, 2026  
**Status:** ✅ Ready to Use
