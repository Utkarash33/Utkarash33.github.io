// Menu show function
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  showMenu('nav-toggle', 'nav-menu');
  
  // Resume button click event listeners
  const resumeButton1 = document.getElementById('resume-button-1');
  const resumeButton2 = document.getElementById('resume-button-2');
  
  resumeButton1.addEventListener('click', openResume);
   resumeButton2.addEventListener('click', openResume);

  
    // resumeButton2.addEventListener('click', ()=>
    // {
    // const downloadLink = document.createElement('a');
    // downloadLink.href = 'https://drive.google.com/uc?id=1wsIkYOtQDPosKaJSgCdIqgqOMdNi8xPl&export=download';
    // downloadLink.download = 'Utkarash-Thakur-Resume.pdf';
    // downloadLink.click();
    // window.open('assets/Utkarash-Thakur-Resume.pdf', '_blank');
    // });

  function openResume() {
    // Open the resume in a new tab
    window.open('assets/Utkarash-Thakur-Resume.pdf', '_blank');
  
    // Download the resume as a PDF
    const downloadLink = document.createElement('a');
    downloadLink.href = 'assets/Utkarash-Thakur-Resume.pdf';
    downloadLink.download = 'Utkarash-Thakur-Resume.pdf';
    downloadLink.click();
  }
  
  // Remove menu on mobile
  const navLink = document.querySelectorAll('.nav__link');
  
  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
  }
  navLink.forEach((n) => n.addEventListener('click', linkAction));
  
  // Scroll sections active link
  const sections = document.querySelectorAll('section[id]');
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
      } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);
  
  // Scroll reveal animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    delay: 200,
    reset: false
  });
  sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
  sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img, .about__details', { delay: 300 });
  sr.reveal('.home__social-icon', { interval: 200 });
  sr.reveal('.skills__data', { interval: 200 });
  