# 🗺️ Website Site Map & Navigation Structure

## Your Complete Website Architecture

```
VIHAAN TRAVELS WEBSITE
├── Home (index.html) ✅ COMPLETE
├── Packages (packages.html) [Create new]
├── Destinations (destinations.html) [Create new]
├── Hotels (hotels.html) [Create new]
├── Services Dropdown
│   ├── Wedding Packages (wedding-packages.html) [Create new]
│   ├── Activities (activities.html) [Create new]
│   ├── Car Rental (car-rental.html) [Create new]
│   ├── Bus Rental (bus-rental.html) [Create new]
│   └── Helicopter Packages (helicopter-packages.html) [Create new]
└── Contact (footer section of every page)
```

---

## Master Components (Every Page Must Include)

### 1️⃣ HEADER (Identical on all pages)
```
┌─────────────────────────────────────────┐
│ info@vihaantravels.com | +91-98973... │ (Top Bar)
├─────────────────────────────────────────┤
│ 🚁 VihaanTravels | Home | Packages | ... │ (Nav)
│   Trust with Nature  Destination | etc.  │
└─────────────────────────────────────────┘
```

### 2️⃣ PAGE CONTENT (Unique per page)
```
Your page-specific content goes here
```

### 3️⃣ FOOTER (Identical on all pages)
```
┌──────────────────────────────────────────┐
│ Company Info | Contact Details | Links  │
│ Social Icons | Newsletter Signup        │
├──────────────────────────────────────────┤
│ © 2024-2025 Vihaan Tour & Travels      │
│ Terms & Conditions | Refund Policy      │
└──────────────────────────────────────────┘

Back-to-Top Button (floating, bottom-right)
```

---

## Page Templates & Creation Guide

### ✅ Already Complete:
- **index.html** - Home page with all sections

### ⭕ Ready to Create (Use page-template.html):

#### Tour Packages
```
📄 packages.html
├── Hero Section with package search
├── Filter options (duration, price, difficulty)
├── Package cards with:
│   ├── Image
│   ├── Title
│   ├── Duration & rating
│   ├── Description
│   ├── Price
│   └── View Details button
└── Master Header & Footer
```

#### Destinations
```
📄 destinations.html
├── Hero Section
├── Destination grid with:
│   ├── Yamunotri
│   ├── Gangotri
│   ├── Kedarnath
│   ├── Badrinath
│   └── Other locations
└── Master Header & Footer
```

#### Hotels
```
📄 hotels.html
├── Hero Section with hotel search
├── Hotel listings with:
│   ├── Image
│   ├── Name & location
│   ├── Rating & reviews
│   ├── Price range
│   ├── Amenities
│   └── Book button
└── Master Header & Footer
```

#### Activities
```
📄 activities.html
├── Hero Section
├── Activity categories:
│   ├── River Rafting
│   ├── Trekking
│   ├── Jungle Safari
│   ├── Adventure Sports
│   └── Cultural Tours
└── Master Header & Footer
```

#### Services (Dropdown Items)

**📄 wedding-packages.html**
```
Wedding-specific packages
└── Master Header & Footer
```

**📄 car-rental.html**
```
Vehicle types with pricing
└── Master Header & Footer
```

**📄 bus-rental.html**
```
Bus/Tempo traveller rental options
└── Master Header & Footer
```

**📄 helicopter-packages.html**
```
Helicopter tour packages & pricing
└── Master Header & Footer
```

---

## Navigation Link Matrix

### From HEADER (appears on every page):

| Link | Points To | Status |
|------|-----------|--------|
| Logo/Brand | index.html | ✅ Ready |
| Home | index.html | ✅ Ready |
| Packages | packages.html | ⭕ Create |
| Destination | destinations.html | ⭕ Create |
| Services → Wedding | wedding-packages.html | ⭕ Create |
| Services → Activities | activities.html | ⭕ Create |
| Services → Car Rental | car-rental.html | ⭕ Create |
| Services → Bus Rental | bus-rental.html | ⭕ Create |
| Services → Helicopter | helicopter-packages.html | ⭕ Create |
| Hotel | hotels.html | ⭕ Create |
| Contact | #contact (footer) | ✅ Ready |
| Call Now Button | tel:+91-9897352211 | ✅ Ready |

### From FOOTER (appears on every page):

| Link | Points To |
|------|-----------|
| Home | index.html |
| Packages | packages.html |
| Destinations | destinations.html |
| Hotels | hotels.html |
| Activities | activities.html |
| Privacy Policy | privacy.html |
| Terms & Conditions | terms.html |
| Refund Policy | refund.html |

---

## Creating Pages - Step by Step

### Step 1: Copy Template
```
1. Open page-template.html
2. File → Save As → "your-page-name.html"
3. You now have a complete page with header & footer
```

### Step 2: Update Page-Specific Content
```
1. Change the <title>
2. Update <meta description>
3. Replace the page content area
4. Keep header & footer unchanged
```

### Step 3: Test
```
1. Check all navigation links work
2. Verify header displays correctly
3. Verify footer displays correctly
4. Test mobile responsiveness
5. Test hover effects
```

---

## Content Hierarchy Example

### For packages.html:

```html
<head>
    <title>Tour Packages | Vihaan Tour & Travels</title>
    <meta name="description" content="Explore our premium tour packages...">
</head>
<body>
    <!-- MASTER HEADER (Copy from header.html) -->
    [Header with nav]
    
    <!-- PAGE CONTENT -->
    <header class="hero-section">
        <h1>Our Tour Packages</h1>
    </header>
    
    <section id="packages" class="py-5">
        [Your package cards here]
    </section>
    
    <!-- MASTER FOOTER (Copy from footer.html) -->
    [Footer with contact & links]
</body>
```

---

## File Organization Recommendation

```
Vihan Tours/Gemini Version2/
│
├── 📄 HTML Pages
│   ├── index.html ✅
│   ├── packages.html
│   ├── destinations.html
│   ├── hotels.html
│   ├── activities.html
│   ├── wedding-packages.html
│   ├── car-rental.html
│   ├── bus-rental.html
│   └── helicopter-packages.html
│
├── 🔧 Components (for reference)
│   ├── header.html
│   ├── footer.html
│   └── page-template.html
│
├── 🎨 Styling
│   └── style.css
│
├── ⚙️ Scripts
│   └── script.js
│
├── 📁 Assets (Create these folders)
│   ├── images/
│   │   ├── hero/
│   │   ├── packages/
│   │   ├── destinations/
│   │   ├── hotels/
│   │   └── team/
│   ├── videos/
│   └── documents/
│
└── 📖 Documentation
    ├── MASTER_HEADER_FOOTER_GUIDE.md
    ├── IMPLEMENTATION_SUMMARY.md
    ├── QUICK_REFERENCE.md
    └── SITE_MAP.md (this file)
```

---

## Quick Creation Checklist

For each new page:

- [ ] Copy page-template.html
- [ ] Rename to appropriate filename
- [ ] Update `<title>` tag
- [ ] Update `<meta description>`
- [ ] Replace page content (keep header & footer)
- [ ] Verify all links work
- [ ] Test on mobile
- [ ] Add to navigation menu if needed
- [ ] Test back-to-top button
- [ ] Verify footer contact info displays

---

## Mobile Navigation Flow

```
📱 User on Mobile
│
├─ Clicks ☰ (Hamburger)
│  └─ Menu opens
│     ├─ Home
│     ├─ Packages
│     ├─ Destination
│     ├─ Services ▼
│     │  ├─ Wedding Packages
│     │  ├─ Activities
│     │  ├─ Car Rental
│     │  ├─ Bus Rental
│     │  └─ Helicopter Packages
│     ├─ Hotel
│     └─ Contact
│
└─ Clicks link
   └─ Menu auto-closes
      └─ Page loads with header & footer
```

---

## Analytics Recommendations

Consider adding tracking IDs to these elements:
- "Call Now" button
- Package cards
- Newsletter subscription
- Social media links
- Footer contact links

---

## Next Steps

1. ✅ Master header & footer are complete
2. ⭕ Create remaining 9 pages using page-template.html
3. ⭕ Add images to assets folder
4. ⭕ Fill content for each page
5. ⭕ Test all navigation links
6. ⭕ Deploy to hosting server

---

**Version:** 1.0  
**Created:** February 5, 2026  
**Status:** Structure Complete - Ready for Content
