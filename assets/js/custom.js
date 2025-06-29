document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('#darkLightToggle');
    const themeSwitch = document.querySelector('.theme-switch-vertical');
    
    // Function to apply theme
    function applyTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        if (themeSwitch) {
            themeSwitch.setAttribute('data-theme', theme);
        }
    }

    // Check for saved theme in localStorage or default to 'dark'
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('dark'); // Default to dark theme
    }

    function switchTheme(e) {
        let newTheme;
        if (document.body.getAttribute('data-theme') === 'dark') {
            newTheme = 'light';
        } else {
            newTheme = 'dark';
        }
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', switchTheme, false);
    }
    
    if (themeSwitch) {
        const slider = themeSwitch.querySelector('.switch-slider');
        if (slider) {
            slider.addEventListener('click', (e) => {
                e.stopPropagation();
                switchTheme({ currentTarget: themeSwitch });
            });
        } else {
            themeSwitch.addEventListener('click', switchTheme, false);
        }
    }

    var navSearch = document.querySelector('.nav-search-link');
    var overlay = document.getElementById('searchOverlay');
    var input = document.querySelector('.search-overlay__form .search-input');
    if(navSearch && overlay) {
        navSearch.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.style.display = 'flex';
            setTimeout(function() {
                input && input.focus();
            }, 200);
            document.body.style.overflow = 'hidden';
        });
    }
}); 