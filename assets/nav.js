/* nav.js — shared sidebar navigation */
/* Inkludér med: <script src="/assets/nav.js"></script> */
/* Sæt data-active="sektionsnavn" på <body> */

(function() {
  const sections = [
    {
      label: null,
      links: [
        { href: '/index.html', text: 'Dashboard', dot: '#1D9E75' },
      ]
    },
    {
      label: 'Grundlag',
      links: [
        { href: '/grundlag/begreber.html',       text: 'Begreber og klassifikation', dot: '#1D9E75' },
        { href: '/grundlag/patofysiologi-iskæmisk.html', text: 'Patofysiologi — iskæmisk', dot: '#1D9E75' },
        { href: '/grundlag/patofysiologi-ich.html', text: 'Patofysiologi — ICH', dot: '#1D9E75' },
        { href: '/grundlag/anatomi.html',         text: 'Anatomi og kargebeter', dot: '#1D9E75' },
        { href: '/grundlag/quiz.html',            text: 'Quiz: grundlag', dot: '#1D9E75' },
      ]
    },
    {
      label: 'Klinisk genkendelse',
      links: [
        { href: '/klinisk/fast.html',             text: 'FAST / BEFAST', dot: '#534AB7' },
        { href: '/klinisk/syndromer.html',         text: 'Lokalisationssyndromer', dot: '#534AB7' },
        { href: '/klinisk/tia.html',              text: 'TIA — udredning', dot: '#534AB7' },
        { href: '/klinisk/differentialdiagnoser.html', text: 'Differentialdiagnoser', dot: '#534AB7' },
      ]
    },
    {
      label: 'Akut udredning og behandling',
      links: [
        { href: '/akut/diagnostik.html',          text: 'Akut diagnostik', dot: '#A32D2D' },
        { href: '/akut/tpa.html',                 text: 'IV trombolyse (tPA)', dot: '#A32D2D' },
        { href: '/akut/trombektomi.html',         text: 'Mekanisk trombektomi', dot: '#A32D2D' },
        { href: '/akut/ich.html',                 text: 'Akut ICH', dot: '#A32D2D' },
        { href: '/akut/sah.html',                 text: 'SAH og sjældne årsager', dot: '#A32D2D' },
      ]
    },
    {
      label: 'Strokeafsnittet',
      links: [
        { href: '/strokeafsnittet/monitorering.html', text: 'Fysiologisk monitorering', dot: '#854F0B' },
        { href: '/strokeafsnittet/komplikationer.html', text: 'Komplikationer', dot: '#854F0B' },
        { href: '/strokeafsnittet/tvaerfaglig.html', text: 'Tværfaglig plan', dot: '#854F0B' },
        { href: '/strokeafsnittet/faerdigheder.html', text: 'Kliniske færdigheder', dot: '#854F0B' },
      ]
    },
    {
      label: 'Forebyggelse og rehabilitering',
      links: [
        { href: '/forebyggelse/sekundaer.html',   text: 'Sekundær profylakse', dot: '#3B6D11' },
        { href: '/forebyggelse/rehabilitering.html', text: 'Rehabilitering', dot: '#3B6D11' },
        { href: '/forebyggelse/primær.html',      text: 'Primær forebyggelse', dot: '#3B6D11' },
      ]
    },
    {
      label: 'Eksamenszone',
      links: [
        { href: '/eksamen/cases.html',            text: 'Kliniske cases', dot: '#5F5E5A' },
        { href: '/eksamen/quiz.html',             text: 'Stor quiz', dot: '#5F5E5A' },
        { href: '/eksamen/reference.html',        text: 'Quick reference', dot: '#5F5E5A' },
      ]
    },
  ];

  function buildNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    const currentPath = window.location.pathname.replace(/^\//, '');

    sections.forEach(section => {
      if (section.label) {
        const sec = document.createElement('div');
        sec.className = 'nav-section';
        sec.textContent = section.label;
        nav.appendChild(sec);
      }
      section.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        const dot = document.createElement('span');
        dot.className = 'nav-dot';
        dot.style.background = link.dot;
        dot.style.opacity = '0.7';
        a.appendChild(dot);
        a.appendChild(document.createTextNode(link.text));
        const href = link.href.replace(/^\//, '');
        if (currentPath === href || currentPath.endsWith(href.split('/').pop())) {
          a.classList.add('active');
        }
        nav.appendChild(a);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildNav);
  } else {
    buildNav();
  }
})();
