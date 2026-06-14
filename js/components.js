/* ============================================================
   NEUROPORTALEN – COMPONENTS.JS
   Globale komponenter: topbar, navigation, footer
   Rediger tekst her for at ændre det på alle sider på én gang.
   ============================================================ */

/* -- TOPBAR -- */
const topbarHTML = `
<div class="topbar">
  <div class="topbar__inner">
    <a href="/om-os.html">Om os</a>
    <a href="/kontakt.html">Kontakt</a>
  </div>
</div>
`;

/* -- NAVIGATION -- */
const navbarHTML = `
<nav class="navbar">
  <div class="container">
    <div class="navbar__inner">

      <a href="/index.html" class="navbar__logo">
        <img src="/assets/images/logo.svg" alt="Neuroportalen logo">
      </a>

      <ul class="navbar__nav">
        <li><a href="/lokalisation.html">Hvor sidder læsionen?</a></li>
        <li><a href="/undersoegelse.html">Neurologisk undersøgelse</a></li>
        <li><a href="/sygdomme.html">Sygdomme</a></li>
        <li><a href="/traen.html">Cases &amp; Quizzer</a></li>
        <li><a href="/basal-viden.html">Basal viden</a></li>
      </ul>

      <button class="navbar__hamburger" aria-label="Åbn menu" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <div class="navbar__mobile" id="mobileMenu">
      <a href="/lokalisation.html">Hvor sidder læsionen?</a>
      <a href="/undersoegelse.html">Neurologisk undersøgelse</a>
      <a href="/sygdomme.html">Sygdomme</a>
      <a href="/traen.html">Cases &amp; Quizzer</a>
      <a href="/basal-viden.html">Basal viden</a>
      <a href="/om-os.html">Om os</a>
      <a href="/kontakt.html">Kontakt</a>
    </div>
  </div>
</nav>
`;

/* -- FOOTER -- */
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">

      <div class="footer__brand">
        <img src="/assets/images/logo.svg" alt="Neuroportalen">
        <p>
          Gratis læringsportal i neurologi for medicinstuderende og yngre læger.
        </p>
      </div>

      <div class="footer__col">
        <h5>Indhold</h5>
        <ul>
          <li><a href="/lokalisation.html">Hvor sidder læsionen?</a></li>
          <li><a href="/undersoegelse.html">Neurologisk undersøgelse</a></li>
          <li><a href="/sygdomme.html">Sygdomme</a></li>
          <li><a href="/traen.html">Cases &amp; Quizzer</a></li>
          <li><a href="/basal-viden.html">Basal viden</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h5>Om</h5>
        <ul>
          <li><a href="/om-os.html">Om os</a></li>
          <li><a href="/kontakt.html">Kontakt</a></li>
        </ul>
      </div>

    </div>

    <div class="footer__bottom">
      <span>&copy; 2026 Neuroportalen &middot; Julius S. Schiller</span>
      <span>Neuroportalen er et undervisningsredskab – ikke en klinisk instruks</span>
    </div>
  </div>
</footer>
`;

/* -- INDSÆT KOMPONENTER -- */
document.addEventListener('DOMContentLoaded', () => {
  const topbarTarget = document.getElementById('topbar');
  if (topbarTarget) topbarTarget.innerHTML = topbarHTML;

  const navbarTarget = document.getElementById('navbar');
  if (navbarTarget) navbarTarget.innerHTML = navbarHTML;

  const footerTarget = document.getElementById('footer');
  if (footerTarget) footerTarget.innerHTML = footerHTML;

  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        currentPath.includes(link.getAttribute('href').replace('.html',''))) {
      link.classList.add('active');
    }
  });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }
});
