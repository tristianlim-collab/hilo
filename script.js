const themeLink = document.createElement('link');
themeLink.rel = 'stylesheet';
themeLink.href = 'theme-fix.css';
document.head.appendChild(themeLink);

const footerLink = document.createElement('link');
footerLink.rel = 'stylesheet';
footerLink.href = 'footer-fix.css';
document.head.appendChild(footerLink);

const finalStyleLink = document.createElement('link');
finalStyleLink.rel = 'stylesheet';
finalStyleLink.href = 'final-fix.css';
document.head.appendChild(finalStyleLink);

const footerContrastLink = document.createElement('link');
footerContrastLink.rel = 'stylesheet';
footerContrastLink.href = 'footer-contrast.css';
document.head.appendChild(footerContrastLink);

const themeColorLink = document.createElement('link');
themeColorLink.rel = 'stylesheet';
themeColorLink.href = 'theme-color-fix.css';
document.head.appendChild(themeColorLink);

const profileImageLink = document.createElement('link');
profileImageLink.rel = 'stylesheet';
profileImageLink.href = 'profile-image.css';
document.head.appendChild(profileImageLink);

const profileFitLink = document.createElement('link');
profileFitLink.rel = 'stylesheet';
profileFitLink.href = 'profile-fit.css';
document.head.appendChild(profileFitLink);

const resumeImageBoxLink = document.createElement('link');
resumeImageBoxLink.rel = 'stylesheet';
resumeImageBoxLink.href = 'resume-image-box.css';
document.head.appendChild(resumeImageBoxLink);

const portraitLayoutLink = document.createElement('link');
portraitLayoutLink.rel = 'stylesheet';
portraitLayoutLink.href = 'portrait-layout.css';
document.head.appendChild(portraitLayoutLink);

const profileFinalLink = document.createElement('link');
profileFinalLink.rel = 'stylesheet';
profileFinalLink.href = 'profile-final.css';
document.head.appendChild(profileFinalLink);

const profileComposeLink = document.createElement('link');
profileComposeLink.rel = 'stylesheet';
profileComposeLink.href = 'profile-compose.css';
document.head.appendChild(profileComposeLink);

const profileZoomLink = document.createElement('link');
profileZoomLink.rel = 'stylesheet';
profileZoomLink.href = 'profile-zoom.css';
document.head.appendChild(profileZoomLink);

const textScaleLink = document.createElement('link');
textScaleLink.rel = 'stylesheet';
textScaleLink.href = 'text-scale-fix.css';
document.head.appendChild(textScaleLink);

const motionResponsiveLink = document.createElement('link');
motionResponsiveLink.rel = 'stylesheet';
motionResponsiveLink.href = 'motion-responsive.css';
document.head.appendChild(motionResponsiveLink);

const mobileNavLink = document.createElement('link');
mobileNavLink.rel = 'stylesheet';
mobileNavLink.href = 'mobile-nav-fix.css';
document.head.appendChild(mobileNavLink);

const brandPhotoLink = document.createElement('link');
brandPhotoLink.rel = 'stylesheet';
brandPhotoLink.href = 'brand-photo.css';
document.head.appendChild(brandPhotoLink);

document.title = document.title.replace(/Manuel Andres Buncio/gi, 'Tristan Zane Lim');
document.querySelectorAll('.brand strong').forEach((brandName) => {
  brandName.textContent = 'tristan zane c. lim';
});

document.querySelectorAll('.brand span').forEach((brandMark) => {
  const brandPhoto = document.createElement('img');
  brandPhoto.className = 'brand-photo';
  brandPhoto.src = '5.jpg';
  brandPhoto.alt = 'Portrait of Tristan Zane C. Lim';
  brandPhoto.onerror = () => brandPhoto.remove();
  brandMark.replaceWith(brandPhoto);
});

const footerDarkLink = document.createElement('link');
footerDarkLink.rel = 'stylesheet';
footerDarkLink.href = 'footer-dark-fix.css';
document.head.appendChild(footerDarkLink);

document.querySelectorAll('.site-footer').forEach((footer) => {
  footer.innerHTML = '<div class="footer-copy"><strong>© 2026 Tristan Zane C. Lim. All rights reserved.</strong></div><nav aria-label="Footer navigation"><a href="index.html">Home</a><a href="about.html">About</a><a href="skills.html">Skills</a><a href="certificates.html">Certificates</a><a href="contact.html">Contact</a><a href="resume.html">Resume</a></nav>';
  footer.style.backgroundColor = '#0d1311';
  footer.style.color = '#e8ede6';
  footer.querySelectorAll('a').forEach((link) => {
    link.style.color = '#e8ede6';
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('span').textContent = isOpen ? '×' : '+';
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('span').textContent = '+';
  });
});

document.querySelectorAll('.nav-resume').forEach((link) => {
  link.href = 'resume.html';
});

document.querySelectorAll('.site-nav a[href="projects.html"]').forEach((link) => {
  link.remove();
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project').forEach((project) => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
    });
  });
});

document.querySelectorAll('.certificate-card').forEach((card) => {
  const image = card.querySelector('.certificate-image');
  const verificationLink = card.querySelector('.certificate-link');

  if (!image || !verificationLink) return;

  image.setAttribute('role', 'link');
  image.setAttribute('tabindex', '0');
  image.setAttribute('aria-label', 'Open certificate verification');
  image.style.cursor = 'pointer';

  const openCertificate = () => verificationLink.click();
  image.addEventListener('click', openCertificate);
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCertificate();
    }
  });
});

const homeVisual = document.querySelector('.home-visual');
const homeCore = homeVisual?.querySelector('.visual-core');
if (homeVisual && homeCore) {
  homeVisual.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const bounds = homeVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    homeCore.style.transform = `translateX(calc(-50% + ${x * 10}px)) translateY(${y * 10}px) scale(1.04)`;
  });
  homeVisual.addEventListener('pointerleave', () => {
    homeCore.style.transform = '';
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = formData.get('subject') || 'Portfolio inquiry';
    const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`;
    window.location.href = `mailto:hello@manuelbuncio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    contactForm.querySelector('.form-status').textContent = 'Opening your email app...';
  });
}
