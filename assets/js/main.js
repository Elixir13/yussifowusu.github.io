/*
    Fractal by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Mobile?
    if (browser.mobile)
        $body.addClass('is-mobile');
    else {

        breakpoints.on('>medium', function () {
            $body.removeClass('is-mobile');
        });

        breakpoints.on('<=medium', function () {
            $body.addClass('is-mobile');
        });

    }

    // Scrolly.
    $('.scrolly')
        .scrolly({
            speed: 1500
        });

})(jQuery);


(function () {
    // Wait for the page to be fully loaded and the template to remove .is-preload
    window.addEventListener('load', function () {
        // Small delay ensures transitions are re-enabled after preload
        setTimeout(function () {
            var title = document.querySelector('#about_me .major h2');
            if (title) {
                title.classList.add('visible');
            }
        }, 180); // 180 ms works reliably with Fractal’s timing
    });
})();

(function () {
    // Wait for full page load and preload class removal
    window.addEventListener('load', function () {
        setTimeout(function () {
            // Select all <p> tags inside #about_me .major
            var paragraphs = document.querySelectorAll('#about_me .major p');

            paragraphs.forEach(function (p, index) {
                // Stagger each paragraph slightly
                setTimeout(function () {
                    p.classList.add('visible');
                }, index * 180); // 180ms delay between each
            });
        }, 200); // Initial delay after preload (safe with Fractal)
    });
})();

/* -------------------------------------------------
   PUBLICATIONS – STAGGERED FADE-IN ANIMATION
   ------------------------------------------------- */
(function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            var pubs = document.querySelectorAll('#publications .publication');
            pubs.forEach(function (pub, index) {
                setTimeout(function () {
                    pub.classList.add('visible');
                }, index * 220); // 220ms stagger
            });
        }, 250); // Start after H2 & About Me
    });
})();

/* H2 TITLE ANIMATION (works for both About Me & Publications) */
(function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            var title = document.querySelector('#about_me .major h2');
            if (title) title.classList.add('visible');
        }, 180);
    });
})();

/* H2 TITLE ANIMATION – BOTH SECTIONS */
(function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            // About Me
            var aboutH2 = document.querySelector('#about_me .major h2');
            if (aboutH2) aboutH2.classList.add('visible');

            // Publications
            var pubH2 = document.querySelector('#publications .major h2');
            if (pubH2) pubH2.classList.add('visible');
        }, 180);
    });
})();

/* -------------------------------------------------
   TOP NAV + DARK MODE TOGGLE
   ------------------------------------------------- */
(function () {
    // Dark/Light Mode Toggle
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggle.querySelector('.icon');

    // Check saved preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Active link highlighting
    const links = document.querySelectorAll('#topnav .links a');
    const sections = ['header', 'about_me', 'publications', 'projects', 'contact'];

    function setActiveLink() {
        let scrollPos = window.scrollY + 100;

        sections.forEach((section, i) => {
            const el = document.getElementById(section);
            if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
                links.forEach(l => l.classList.remove('active'));
                links[i].classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initial check
})();

/* -------------------------------------------------
   CONTACT SECTION – H2 & FORM ANIMATION + SUBMISSION
   ------------------------------------------------- */
(function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            // Animate Contact H2
            var contactH2 = document.querySelector('#contact .major h2');
            if (contactH2) contactH2.classList.add('visible');

            // Animate form fields
            var contactForm = document.querySelector('#contact form');
            if (contactForm) contactForm.classList.add('visible');
        }, 180);
    });

    // Form submission handling (success/error message)
    var form = document.getElementById('contact-form');
    var messageDiv = document.getElementById('form-message');

    if (form) {
        form.addEventListener('submit', function (e) {
            // Optional: Add loading state
            var submitBtn = form.querySelector('input[type="submit"]');
            submitBtn.value = 'Sending...';

            // Formspree handles submission natively – we just show feedback on redirect
            // If using AJAX (advanced), implement fetch here
        });

        // Listen for Formspree thank-you redirect (simple method)
        if (window.location.hash === '#thanks') {
            messageDiv.textContent = 'Thank you! Your message has been sent successfully.';
            messageDiv.className = 'success';
            messageDiv.style.display = 'block';
            history.replaceState(null, null, window.location.pathname); // Clean URL
        } else if (window.location.hash === '#error') {
            messageDiv.textContent = 'Sorry, there was an error sending your message. Please try again.';
            messageDiv.className = 'error';
            messageDiv.style.display = 'block';
            history.replaceState(null, null, window.location.pathname);
        }
    }
})();

/* -------------------------------------------------
   PROJECTS (#two) – H2 ANIMATION + READ MORE TOGGLE
   ------------------------------------------------- */
(function () {
    window.addEventListener('load', function () {
        setTimeout(function () {
            // Animate Projects H2
            var projectsH2 = document.querySelector('#projects .major h2');
            if (projectsH2) projectsH2.classList.add('visible');
        }, 200);
    });

    // Read More toggle for all projects
    document.querySelectorAll('.read-more-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                details.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
})();