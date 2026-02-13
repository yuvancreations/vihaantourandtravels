/* Master JavaScript (site-wide) */
document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar Scroll Shadow Logic (YatraGo Style)
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            navbar.classList.add("shadow");
        } else {
            navbar.classList.remove("shadow");
        }
    });

    // Desktop Dropdown on Hover
    if (window.innerWidth > 992) {
        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.addEventListener('mouseenter', function (e) {
                let toggle = dropdown.querySelector('.dropdown-toggle');
                let menu = dropdown.querySelector('.dropdown-menu');
                toggle.classList.add('show');
                menu.classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function (e) {
                let toggle = dropdown.querySelector('.dropdown-toggle');
                let menu = dropdown.querySelector('.dropdown-menu');
                toggle.classList.remove('show');
                menu.classList.remove('show');
            });
        });
    }

    // Back to Top Button Functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Newsletter Subscription
    const subscribeBtn = document.getElementById('subscribeBtn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function () {
            const emailInput = this.previousElementSibling;
            const email = emailInput.value.trim();
            
            if (email && email.includes('@')) {
                alert('Thank you for subscribing! Check your email.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    // Set Active Navigation Link based on current page
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        if (link.href.includes(currentLocation.split('/').pop() || 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Mobile Menu Close on Link Click
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks_mobile = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks_mobile.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar Scroll Logic - Keeps it sticky and adds shadow
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            navbar.classList.add("shadow");
            // Optional: Compact the top bar if you want the nav to go higher, 
            // but since you said "wahi rahe", we just add shadow.
        } else {
            navbar.classList.remove("shadow");
        }
    });

    // Desktop Dropdown on Hover (Preserved your request)
    if (window.innerWidth > 992) {
        document.querySelectorAll('.dropdown').forEach(function (dropdown) {
            dropdown.addEventListener('mouseenter', function (e) {
                let toggle = dropdown.querySelector('.dropdown-toggle');
                let menu = dropdown.querySelector('.dropdown-menu');
                toggle.classList.add('show');
                menu.classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function (e) {
                let toggle = dropdown.querySelector('.dropdown-toggle');
                let menu = dropdown.querySelector('.dropdown-menu');
                toggle.classList.remove('show');
                menu.classList.remove('show');
            });
        });
    }

    // ... rest of your JS ...
});

    // Gallery / Premium Viewer
    document.addEventListener('DOMContentLoaded', function () {
        const gallerySection = document.getElementById('wedding-gallery');
        if (!gallerySection) return;

        const thumbs = Array.from(gallerySection.querySelectorAll('.gallery-thumb'));
        const images = thumbs.map(t => t.querySelector('img').src);

        const modal = document.getElementById('galleryModal');
        const modalImg = modal.querySelector('.image-modal__img');
        const modalCaption = modal.querySelector('.image-modal__caption');
        const btnClose = modal.querySelector('.image-modal__close');
        const btnPrev = modal.querySelector('.image-modal__prev');
        const btnNext = modal.querySelector('.image-modal__next');
        const backdrop = modal.querySelector('.image-modal__backdrop');
        const modalInner = modal.querySelector('.image-modal__inner');

        let current = 0;

        function updateImage(idx) {
            current = (idx + images.length) % images.length;
            modalImg.style.opacity = 0;
            // small preloader effect
            setTimeout(() => {
                modalImg.src = images[current];
                modalCaption.textContent = `Photo ${current + 1} of ${images.length}`;
                modalImg.onload = () => { modalImg.style.opacity = 1; };
            }, 160);
        }

        function openModal(idx) {
            // ensure modal sits below header and above navbar
            const headerEl = document.getElementById('header') || document.querySelector('.navbar');
            const headerHeight = headerEl ? headerEl.offsetHeight || 0 : 0;
            modal.style.setProperty('--header-height', headerHeight + 'px');
            // limit modal image height to viewport minus header
            modalInner.style.maxHeight = `calc(100vh - ${headerHeight + 48}px)`;
            updateImage(idx);
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            // focus for keyboard
            btnClose.focus();
        }

        function closeModal() {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        thumbs.forEach((btn, i) => {
            btn.addEventListener('click', () => openModal(i));
        });

        btnClose.addEventListener('click', closeModal);
        backdrop.addEventListener('click', closeModal);

        btnPrev.addEventListener('click', function () { updateImage(current - 1); });
        btnNext.addEventListener('click', function () { updateImage(current + 1); });

        document.addEventListener('keydown', function (e) {
            if (!modal.classList.contains('show')) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') updateImage(current - 1);
            if (e.key === 'ArrowRight') updateImage(current + 1);
        });
    });