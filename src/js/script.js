document.addEventListener('DOMContentLoaded', () => {
    // Cart functionality
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.nav-cart');

    cartIcon.addEventListener('click', () => {
        alert('Shopping Cart is empty. Start shopping!');
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchSelect = document.querySelector('.nav-search-select select');

    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim()) {
            alert(`Searching in ${searchSelect.value} for: ${searchInput.value}`);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim()) {
            searchButton.click();
        }
    });

    // Back to top functionality
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Navigation interactions
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.outline = '1px solid white';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.outline = 'none';
        });
    });

    // Language selector
    const languageSelector = document.querySelector('.language-selector');
    languageSelector.addEventListener('click', () => {
        alert('Language selection options would appear here');
    });

    // Add hover effect for product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
            card.style.boxShadow = 'none';
        });
    });

    // Simulate loading more products
    const seeMoreLinks = document.querySelectorAll('.see-more');
    seeMoreLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Loading more items...');
        });
    });

    // Handle nav hamburger menu
    const hamburgerMenu = document.querySelector('.nav-hamburger');
    hamburgerMenu.addEventListener('click', () => {
        alert('Side navigation menu would slide in here');
    });

    // Add smooth scrolling for Back to Top
    document.querySelector('.back-to-top a').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});