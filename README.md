# Neuroportalen

Gratis, dansk læringsplatform i neurologi for medicinstuderende og yngre læger.

## Struktur

```
neuroportalen/
├── index.html              ← Forside
├── lokalisation.html       ← Lokalisation (første indhold)
├── undersoegelse.html      ← Neurologisk undersøgelse
├── sygdomme.html           ← Sygdomsgrupper
├── traen.html              ← Quizzer & cases
├── basal-viden.html        ← Basal viden
├── om-os.html              ← Om os
├── kontakt.html            ← Kontakt
├── artikel-skabelon.html   ← Skabelon til nye artikler (kopier denne!)
├── netlify.toml            ← Netlify konfiguration
├── css/
│   └── style.css           ← Alt styling — rediger farver og fonte øverst under :root
├── js/
│   └── components.js       ← Topbar, navigation og footer — rediger her for alle sider
└── assets/
    ├── images/             ← Læg billeder her
    │   ├── logo.svg        ← Logo (SVG anbefales)
    │   ├── hero.jpg        ← Forsidebillede
    │   ├── julius.jpg      ← Profilbillede
    │   ├── lokalisation.jpg
    │   └── undersoegelse.jpg
    └── fonts/              ← Lokale fonte (valgfrit — Google Fonts bruges som standard)
```

## Sådan tilføjer du en ny artikel

1. Kopiér `artikel-skabelon.html` og giv den et nyt navn (fx `apopleksi.html`)
2. Åbn filen og redigér alle steder der er markeret `<!-- REDIGER: -->`
3. Opdatér `<title>` og `<meta name="description">` øverst
4. Tilføj et link til artiklen fra den relevante sektionsside (fx `lokalisation.html`)
5. Push til GitHub — Netlify deployer automatisk

## Sådan udskifter du billeder

Alle billeder ligger i `/assets/images/`. Filnavnene er sat i HTML-filerne.
Udskift blot billedfilen med samme navn, eller opdatér `src`-attributten i HTML.

## Globale ændringer

- **Navigation, topbar, footer**: Redigér `/js/components.js`
- **Farver og fonte**: Redigér `:root`-variablerne øverst i `/css/style.css`
- **Alle sider på én gang**: Ændringer i components.js og style.css slår igennem overalt

## Deploy til Netlify

1. Opret repository på GitHub og push dette projekt
2. Log ind på netlify.com → "Add new site" → "Import from Git"
3. Vælg dit GitHub-repository
4. Build command: *(tom — intet build-trin nødvendigt)*
5. Publish directory: `/` (eller `.`)
6. Klik "Deploy site"

Fra nu af: push til GitHub → Netlify deployer automatisk inden for ~30 sekunder.

## Fonte

Siden bruger Google Fonts:
- **Fraunces** — store overskrifter (display)
- **Hanken Grotesk** — al anden tekst (body, navigation, kickers)

Begge hentes automatisk fra Google Fonts. Ingen installation nødvendig.
