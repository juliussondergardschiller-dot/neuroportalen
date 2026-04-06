/* neuroportalen.dk — fælles JavaScript */

/* ── NAVIGATION ── */
function initNav() {
  const toggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  if (!toggle || !sidebar) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && e.target !== toggle) {
      sidebar.classList.remove('open');
    }
  });

  /* Mark active nav link */
  const path = window.location.pathname;
  document.querySelectorAll('.nav a').forEach(a => {
    if (a.getAttribute('href') === path || path.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });
}

/* ── QUIZ ENGINE ── */
function initQuiz() {
  const questions = document.querySelectorAll('.quiz-q');
  if (!questions.length) return;

  let score = 0;
  let answered = 0;
  const total = questions.length;

  questions.forEach((q, qi) => {
    const opts = q.querySelectorAll('.quiz-opt');
    const feedback = q.querySelector('.quiz-feedback');
    const correct = q.dataset.correct;

    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (q.dataset.done) return;
        q.dataset.done = true;
        answered++;

        const chosen = opt.dataset.val;
        const isCorrect = chosen === correct;

        if (isCorrect) {
          opt.classList.add('correct');
          score++;
        } else {
          opt.classList.add('wrong');
          opts.forEach(o => { if (o.dataset.val === correct) o.classList.add('correct'); });
        }

        opts.forEach(o => { if (o !== opt && o.dataset.val !== correct) o.classList.add('reveal'); });

        if (feedback) {
          feedback.classList.add('show');
          feedback.classList.add(isCorrect ? 'ok' : 'fail');
        }

        if (answered === total) {
          setTimeout(() => showScore(score, total), 600);
        }
      });
    });
  });

  function showScore(s, t) {
    const scoreEl = document.querySelector('.quiz-score');
    if (!scoreEl) return;
    scoreEl.classList.add('show');
    scoreEl.querySelector('.score-num').textContent = s + '/' + t;
    const pct = Math.round((s / t) * 100);
    const label = scoreEl.querySelector('.score-label');
    if (pct >= 80) label.textContent = 'Godt klaret! Du behersker dette emne.';
    else if (pct >= 60) label.textContent = 'Fornuftigt resultat — gennemgå de forkerte svar.';
    else label.textContent = 'Gennemgå modulet igen og prøv på ny.';
    saveProgress(window.location.pathname, pct);
  }
}

/* ── PROGRESS ── */
function saveProgress(page, pct) {
  try {
    const data = JSON.parse(localStorage.getItem('np_progress') || '{}');
    data[page] = { pct, ts: Date.now() };
    localStorage.setItem('np_progress', JSON.stringify(data));
    updateProgressBar();
  } catch(e) {}
}

function updateProgressBar() {
  try {
    const data = JSON.parse(localStorage.getItem('np_progress') || '{}');
    const pages = Object.keys(data);
    const done = pages.filter(p => data[p].pct >= 60).length;
    const totalPages = 30; /* opdateres efterhånden */
    const pct = Math.round((done / totalPages) * 100);
    const bar = document.querySelector('.progress-fill');
    const label = document.querySelector('.progress-label');
    if (bar) bar.style.width = pct + '%';
    if (label) label.textContent = 'Fremgang: ' + pct + '%';
  } catch(e) {}
}

/* ── COLLAPSIBLE ── */
function initCollapsible() {
  document.querySelectorAll('[data-collapse]').forEach(trigger => {
    trigger.style.cursor = 'pointer';
    const target = document.getElementById(trigger.dataset.collapse);
    if (!target) return;
    target.style.display = 'none';
    trigger.addEventListener('click', () => {
      const open = target.style.display !== 'none';
      target.style.display = open ? 'none' : 'block';
      trigger.dataset.open = open ? '' : 'true';
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initQuiz();
  initCollapsible();
  updateProgressBar();
});
