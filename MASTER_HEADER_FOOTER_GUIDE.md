# Master Header & Footer Implementation Guide

## Overview
You now have a **Master Header** and **Master Footer** that are designed to be reused across all pages of your website. This ensures consistency and makes maintenance easier.

---

## Files Created

### 1. **header.html**
Contains the complete master header structure including:
- Top bar with contact info and social links
- Navigation bar with logo, menu items, and dropdown
- Mobile-responsive hamburger menu

### 2. **footer.html**
Contains the complete master footer structure including:
- Company information and social media links
- Contact details with icons
- Quick navigation links
- Newsletter subscription form
- Footer bottom with copyright and links

### 3. **Updated Files**
- **index.html** - Now uses the master header and footer
- **style.css** - Added footer styling, back-to-top button styling
- **Script.js** - Added functionality for back-to-top button, newsletter subscription, and active nav links

---

## How to Use Master Header on Every Page

### Option 1: Copy & Paste (Simple)
1. Open `header.html`
2. Copy all the code between `<body>` and before your main content
3. Paste it into every new page's HTML file
4. Update internal links to match your file structure

**Example for packages.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your head content -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- PASTE MASTER HEADER HERE -->
    [Header code from header.html]
    
    <!-- YOUR PAGE-SPECIFIC CONTENT -->
    <div class="container">
        <!-- Packages content here -->
    </div>
    
    <!-- PASTE MASTER FOOTER HERE -->
    [Footer code from footer.html]
    
    <script src="script.js"></script>
</body>
</html>
```

### Option 2: Include via JavaScript (Recommended for Dynamic Sites)
If you want automatic header/footer inclusion, create a new file `include-components.js`:

```javascript
// Load Master Header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);
    });

// Load Master Footer  
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    });
```

Then add this to the `<head>` of every page:
```html
<script src="include-components.js"></script>
```

---

## Navigation Structure

The master header includes links to these pages. Create these files with the same header & footer:

### Main Pages to Create:
- `packages.html` - Tour packages
- `destinations.html` - Travel destinations
- `hotels.html` - Hotel listings
- `activities.html` - Adventure activities

### Service Pages (Under Services dropdown):
- `wedding-packages.html` - Wedding tour packages
- `car-rental.html` - Vehicle rental services
- `bus-rental.html` - Bus rental services
- `helicopter-packages.html` - Helicopter booking

---

## Key Features of Master Header

✅ **Top Bar**
- Contact email and phone
- Social media links
- Dark blue background (#003580)

✅ **Navigation Bar**
- Sticky positioning (stays at top while scrolling)
- Brand logo with animated helicopter
- Responsive mobile menu
- Dropdown for Services
- "Call Now" button with phone link

✅ **Mobile Responsive**
- Hamburger menu on mobile
- Collapsible navigation
- Touch-friendly buttons

---

## Key Features of Master Footer

✅ **Company Section**
- Brand name and description
- Social media icons with hover effects
- LinkedIn, Facebook, Instagram, WhatsApp, YouTube links

✅ **Contact Section**
- Owner name (Ketan Sehgal)
- Clickable phone numbers
- Email link
- Physical address

✅ **Quick Links**
- Navigation to main pages
- Important policy links
- Newsletter subscription form

✅ **Footer Bottom**
- Copyright notice
- Terms & Conditions link
- Refund Policy link

✅ **Back-to-Top Button**
- Floating button (bottom-right corner)
- Appears after scrolling 300px
- Smooth scroll animation
- Responsive sizing

---

## Customization Tips

### Change Brand Colors
Edit `style.css`:
```css
:root {
    --primary: #006ce4;      /* Main blue - change this */
    --secondary: #febb02;    /* Accent yellow - change this */
    --text-dark: #1a1a1a;
    --text-light: #6b6b6b;
    --success: #008234;
}
```

### Update Contact Information
In **header.html** and **footer.html**, find:
- Email: `info@vihaantravels.com`
- Phone: `+91-9897352211`
- Address: `Shop No. 8, Railway Road, Haridwar`

Replace with your actual contact details.

### Modify Social Media Links
In **footer.html**, update these URLs:
```html
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourprofile">
<a href="https://wa.me/919897352211">
```

### Change Navigation Menu Items
Edit the `<ul class="navbar-nav">` in **header.html** to add/remove menu items.

---

## Responsive Behavior

### Desktop (992px and up)
- Full horizontal navigation
- Dropdown on hover
- Full footer columns

### Tablet (768px to 992px)
- Navigation items stack nicely
- Mobile menu toggle
- Footer stacks in 2 columns

### Mobile (Below 768px)
- Hamburger menu
- Collapsed navigation
- Single-column footer
- Back-to-top button adjusted for thumb reach

---

## Testing Checklist

Before deploying to all pages:

- [ ] Links in header work correctly
- [ ] Dropdown menu works on desktop (hover)
- [ ] Dropdown menu works on mobile (tap)
- [ ] Mobile hamburger menu opens/closes
- [ ] Footer links are clickable
- [ ] Phone numbers dial correctly (`tel:` links)
- [ ] Email link opens mail client (`mailto:` links)
- [ ] Social media links point to correct profiles
- [ ] Back-to-top button appears on scroll
- [ ] Newsletter form validation works
- [ ] Responsive design works on all screen sizes

---

## JavaScript Functionality

The `Script.js` file now includes:

### 1. **Navbar Scroll Effect**
- Adds shadow when user scrolls down 10px
- Removes shadow when at top

### 2. **Desktop Dropdown Hover**
- Services dropdown opens on hover (desktop only)
- Closes on mouse leave

### 3. **Back-to-Top Button**
- Shows after 300px scroll
- Smooth scroll to top
- Responsive positioning

### 4. **Newsletter Subscription**
- Basic email validation
- Click handler for subscribe button

### 5. **Active Page Detection**
- Highlights current page in navigation
- Compares current URL with nav links

### 6. **Mobile Menu Close**
- Auto-closes menu when link is clicked
- Better mobile UX

---

## File Structure for Complete Site

```
/Vihan Tours/Gemini Version2/
│
├── index.html              (Home page)
├── packages.html           (Tour packages)
├── destinations.html       (Travel destinations)
├── hotels.html            (Hotel listings)
├── activities.html        (Activities & adventures)
│
├── wedding-packages.html   (Services)
├── car-rental.html
├── bus-rental.html
├── helicopter-packages.html
│
├── style.css              (Master stylesheet)
├── Script.js              (Master JavaScript)
├── header.html            (Header component)
├── footer.html            (Footer component)
│
└── assets/
    ├── images/
    └── other files/
```

---

## Tips for Success

1. **Consistency**: Use the same header/footer on ALL pages for brand consistency
2. **Update Links**: Make sure internal links point to correct filenames
3. **Test Responsiveness**: Test on mobile, tablet, and desktop
4. **Regular Maintenance**: Update header/footer once, it updates everywhere
5. **SEO**: Each page should have unique `<title>` and `<meta description>`
6. **Performance**: Don't duplicate code - use the master versions

---

## Support Notes

- The helicopter animation in the header triggers on hover of the brand logo
- Footer social icons have smooth hover animations
- All buttons and links have hover states for better UX
- Newsletter form includes basic validation
- Back-to-top button is accessible on all pages

**Version:** 1.0  
**Last Updated:** February 2026
