/* ============================================================
   NEUROPORTALEN — COMPONENTS.JS
   Globale komponenter: topbar, navigation, footer
   Disse indsættes automatisk på alle sider.
   Rediger tekst her for at ændre det på alle sider på én gang.
   ============================================================ */

/* ── TOPBAR ── */
const topbarHTML = `
<div class="topbar">
  <div class="topbar__inner">
    <!-- REDIGER: Links i topbar -->
    <a href="/om-os.html">Om os</a>
    <a href="/kontakt.html">Kontakt</a>
  </div>
</div>
`;

/* ── NAVIGATION ── */
const navbarHTML = `
<nav class="navbar">
  <div class="container">
    <div class="navbar__inner">

      <!-- LOGO: Udskift src med din logo-fil -->
      <a href="/index.html" class="navbar__logo">
        <img src="/assets/images/logo.svg" alt="Neuroportalen logo">
        <!-- Hvis logo-filen ikke er klar endnu, vis tekst i stedet: -->
        <!-- <span class="navbar__logo-text">Neuroportalen</span> -->
      </a>

      <!-- NAVIGATION LINKS -->
      <ul class="navbar__nav">
        <li><a href="/lokalisation.html">Lokalisation</a></li>
        <li><a href="/undersoegelse.html">Undersøgelse</a></li>
        <li><a href="/sygdomme.html">Sygdomme</a></li>
        <li><a href="/traen.html">Træn</a></li>
        <li><a href="/basal-viden.html">Basal viden</a></li>
      </ul>

      <!-- SØGEFELT -->
      <div class="navbar__search">
        <svg fill="none" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
        </svg>
        <input type="text" placeholder="Søg i Neuroportalen…" aria-label="Søg">
      </div>

      <!-- MOBILMENU KNAP -->
      <button class="navbar__hamburger" aria-label="Åbn menu" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- MOBILMENU DROPDOWN -->
    <div class="navbar__mobile" id="mobileMenu">
      <a href="/lokalisation.html">Lokalisation</a>
      <a href="/undersoegelse.html">Undersøgelse</a>
      <a href="/sygdomme.html">Sygdomme</a>
      <a href="/traen.html">Træn</a>
      <a href="/basal-viden.html">Basal viden</a>
      <a href="/om-os.html">Om os</a>
      <a href="/kontakt.html">Kontakt</a>
    </div>
  </div>
</nav>
`;

/* ── FOOTER ── */
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">

      <!-- KOLONNE 1: Brand -->
      <div class="footer__brand">
        <img src="/assets/images/logo.svg" alt="Neuroportalen">
        <div class="footer__brand-name">Neuroportalen</div>
        <!-- REDIGER: Kort om-os tekst i footer -->
        <p>
          Et gratis, dansk læringsuniversum i neurologi for medicinstuderende
          og yngre læger — skabt af Julius S. Schiller, stud.med.
        </p>
      </div>

      <!-- KOLONNE 2: Navigation -->
      <div class="footer__col">
        <h5>Indhold</h5>
        <ul>
          <li><a href="/lokalisation.html">Lokalisation</a></li>
          <li><a href="/undersoegelse.html">Neurologisk undersøgelse</a></li>
          <li><a href="/sygdomme.html">Sygdomme</a></li>
          <li><a href="/traen.html">Quizzer &amp; cases</a></li>
          <li><a href="/basal-viden.html">Basal viden</a></li>
        </ul>
      </div>

      <!-- KOLONNE 3: Om -->
      <div class="footer__col">
        <h5>Om</h5>
        <ul>
          <li><a href="/om-os.html">Om os</a></li>
          <li><a href="/kontakt.html">Kontakt</a></li>
        </ul>
      </div>

    </div>

    <div class="footer__bottom">
      <!-- REDIGER: Årstal opdateres manuelt -->
      <span>© 2026 Neuroportalen · Julius S. Schiller</span>
      <span>neuroportalen er et undervisningsredskab — ikke en klinisk instruks</span>
    </div>
  </div>
</footer>
`;

/* ── INDSÆT KOMPONENTER ── */
document.addEventListener('DOMContentLoaded', () => {

  // Indsæt topbar
  const topbarTarget = document.getElementById('topbar');
  if (topbarTarget) topbarTarget.innerHTML = topbarHTML;

  // Indsæt navbar
  const navbarTarget = document.getElementById('navbar');
  if (navbarTarget) navbarTarget.innerHTML = navbarHTML;

  // Indsæt footer
  const footerTarget = document.getElementById('footer');
  if (footerTarget) footerTarget.innerHTML = footerHTML;

  // Sæt aktiv nav-link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.navbar__nav a, .navbar__mobile a').forEach(link => {
    if (link.getAttribute('href') === currentPath ||
        currentPath.includes(link.getAttribute('href').replace('.html',''))) {
      link.classList.add('active');
    }
  });

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
  }

});
