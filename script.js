document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 hidden';
    mobileMenu.innerHTML = `
        <div class="bg-white h-full w-64 p-6 shadow-xl transform transition-transform">
            <div class="flex justify-between items-center mb-8">
                <span class="text-2xl font-['Pacifico'] text-primary">logo</span>
                <button class="close-menu w-8 h-8 flex items-center justify-center text-gray-700">
                    <i class="ri-close-line ri-lg"></i>
                </button>
            </div>
            <nav class="flex flex-col space-y-4">
                <a href="#features" class="text-gray-700 hover:text-primary font-medium py-2 transition">Features</a>
                <a href="#pricing" class="text-gray-700 hover:text-primary font-medium py-2 transition">Pricing</a>
                <a href="#about" class="text-gray-700 hover:text-primary font-medium py-2 transition">About Us</a>
                <a href="#contact" class="text-gray-700 hover:text-primary font-medium py-2 transition">Contact</a>
                <a href="#contact" class="bg-primary text-white px-5 py-2 !rounded-button font-medium hover:bg-opacity-90 transition whitespace-nowrap text-center mt-4">Get Started</a>
            </nav>
        </div>
    `;
    document.body.appendChild(mobileMenu);
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.remove('hidden');
        mobileMenu.querySelector('div').classList.add('translate-x-0');
        mobileMenu.querySelector('div').classList.remove('-translate-x-full');
        document.body.classList.add('overflow-hidden');
    });
    
    mobileMenu.querySelector('.close-menu').addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
        mobileMenu.querySelector('div').classList.remove('translate-x-0');
        mobileMenu.querySelector('div').classList.add('-translate-x-full');
        document.body.classList.remove('overflow-hidden');
    });
    
    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.querySelector('div').classList.remove('translate-x-0');
            mobileMenu.querySelector('div').classList.add('-translate-x-full');
            document.body.classList.remove('overflow-hidden');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if(this.getAttribute('href') === '#') return;
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Custom checkbox functionality
    const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkmark = this.nextElementSibling;
            if(this.checked) {
                checkmark.classList.add('bg-primary', 'border-primary');
            } else {
                checkmark.classList.remove('bg-primary', 'border-primary');
            }
        });
    });
});