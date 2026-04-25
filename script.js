

  const themeBtn = document.getElementById('themeBtn');
  const html = document.documentElement;
  let dark = true;
  themeBtn.addEventListener('click', () => {
    dark = !dark;
    html.setAttribute('data-theme', dark ? 'dark' : 'light');
    themeBtn.innerHTML = dark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
  });


  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  mob.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', () => {
    ham.classList.remove('open'); mob.classList.remove('open');
  }));

 
  const phrases = ['Frontend Developer', 'B.Tech Student', 'UI Enthusiast', 'Problem Solver', 'Open Source Fan'];
  let pi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typeTarget');
  function type() {
    const cur = phrases[pi];
    el.textContent = deleting ? cur.slice(0, ci--) : cur.slice(0, ci++);
    if (!deleting && ci > cur.length) { deleting = true; setTimeout(type, 1200); return; }
    if (deleting && ci < 0)  { deleting = false; pi = (pi + 1) % phrases.length; }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      
        const fill = e.target.querySelector('.skill-fill');
        if (fill) fill.style.width = e.target.dataset.fill + '%';
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
    e.target.reset();
  });

 
  document.getElementById('resumeBtn').addEventListener('click', e => {
    e.preventDefault();
    const a = document.createElement('a');
    a.href = 'data:text/plain;charset=utf-8,Sunil%20Gupta%20-%20Resume%20(placeholder)';
    a.download = 'Sunil_Gupta_Resume.txt';
    a.click();
  });

 
  window.addEventListener('scroll', () => {
    document.querySelector('nav').style.boxShadow =
      window.scrollY > 40 ? '0 4px 24px rgba(0,0,0,0.4)' : 'none';
  });
