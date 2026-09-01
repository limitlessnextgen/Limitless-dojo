document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const isHome = path === '/' || path.endsWith('/index.html');
    const YOUTUBE_URL = 'https://www.youtube.com/@limitless_dojo';

    const storyItems = [
      { href: 'movement.html', label: 'I Am Limitless Story', path: '/movement.html' },
      { href: 'founder.html', label: 'Founder · Danielle Askari', path: '/founder.html' },
      { href: 'nextgen.html', label: 'Limitless Next Gen · Impact', path: '/nextgen.html' },
      { href: 'media-partnerships.html', label: 'Media & Partnerships', path: '/media-partnerships.html' }
    ];

    const makeLink = (item) => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if (path.endsWith(item.path)) link.setAttribute('aria-current', 'page');
      return link;
    };

    document.querySelectorAll('.nav-links').forEach((nav) => {
      const storyMenu = nav.querySelector('#submenu-our-story');

      if (storyMenu) {
        storyMenu.innerHTML = '';
        storyItems.forEach((item) => storyMenu.appendChild(makeLink(item)));
        const group = storyMenu.closest('.nav-group');
        const toggle = group?.querySelector('.nav-group-toggle');
        if (toggle && storyItems.some((item) => path.endsWith(item.path))) {
          toggle.classList.add('is-active');
        }
        return;
      }

      if (isHome) {
        nav.innerHTML = `
          <a href="classes.html">Train</a>
          <a href="movement.html">Story</a>
          <a href="media-partnerships.html">Partner</a>
        `;
      }
    });

    document.querySelectorAll('.footer-links').forEach((footer) => {
      [
        ['classes.html', 'Train'],
        ['movement.html', 'Story'],
        ['nextgen.html', 'Impact'],
        ['media-partnerships.html', 'Partner'],
        ['programme-2027.html', '2027 Programme'],
        ['press-kit.html', 'Press Kit']
      ].forEach(([href, label]) => {
        if (footer.querySelector(`a[href="${href}"]`)) return;
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        footer.appendChild(link);
      });

      if (!footer.querySelector(`a[href="${YOUTUBE_URL}"]`)) {
        const youtube = document.createElement('a');
        youtube.href = YOUTUBE_URL;
        youtube.target = '_blank';
        youtube.rel = 'noopener noreferrer';
        youtube.textContent = 'YouTube ↗';
        youtube.setAttribute('aria-label', 'Watch I Am Limitless on YouTube');
        footer.appendChild(youtube);
      }
    });

    if (isHome) {
      const choosePath = document.querySelector('#choose-path');
      const heading = choosePath?.querySelector('.section-head');
      const grid = choosePath?.querySelector('.pathway-grid');

      if (heading) {
        heading.innerHTML = `
          <div><p class="eyebrow">Start here</p><h2 class="display section-title">Three clear ways into Go Limitless.</h2></div>
          <p class="lead">Train with us, understand the story or explore a serious partnership.</p>
        `;
      }

      if (grid) {
        grid.innerHTML = `
          <article class="pathway-card">
            <img loading="lazy" decoding="async" src="assets/class-jujutsu-grappling.jpg" alt="Brazilian Jiu-Jitsu at Limitless Dojo">
            <div class="pathway-card-body"><span class="tag">Train</span><h3>Join the training community</h3><p>BJJ, Muay Thai, strength and coaching for beginners, residents, visitors and athletes.</p><a class="card-link" href="timetable.html">See timetable and prices</a></div>
          </article>
          <article class="pathway-card">
            <img loading="lazy" decoding="async" src="assets/founder-danielle-askari.jpg" alt="Danielle Askari, founder of Go Limitless">
            <div class="pathway-card-body"><span class="tag">Story</span><h3>Discover I Am Limitless</h3><p>Read how a personal message and a rooftop became a growing sport and community platform.</p><a class="card-link" href="movement.html">Read the story</a></div>
          </article>
          <article class="pathway-card">
            <img loading="lazy" decoding="async" src="assets/event-beach-wrestling.jpg" alt="A Go Limitless beach wrestling event">
            <div class="pathway-card-body"><span class="tag">Partner</span><h3>Help create opportunity</h3><p>Support practical access, athlete visibility, events or responsible organisational growth.</p><a class="card-link" href="media-partnerships.html">Explore partnerships</a></div>
          </article>
        `;
      }

      const sections = Array.from(document.querySelectorAll('main .section'));
      const movementSection = sections.find((section) =>
        section.querySelector('.eyebrow')?.textContent.trim() === 'The movement in action'
      );
      const movementHead = movementSection?.querySelector('.section-head');
      const pillarGrid = movementSection?.querySelector('.pillar-grid');

      if (movementHead) {
        movementHead.innerHTML = `
          <div><p class="eyebrow">How it works</p><h2 class="display section-title">Training supports impact. Partnerships extend it.</h2></div>
          <p class="lead">A simple model connecting sustainable services with carefully developed community opportunity.</p>
        `;
      }

      if (pillarGrid) {
        pillarGrid.innerHTML = `
          <article class="pillar"><div class="pillar-number">01</div><h3>Train</h3><p>Martial arts, strength and coaching create the commercial base and daily community.</p><a class="card-link" href="classes.html">Explore training</a></article>
          <article class="pillar"><div class="pillar-number">02</div><h3>Create Access</h3><p>Limitless Next Gen develops grassroots opportunities for women, young people and emerging athletes.</p><a class="card-link" href="nextgen.html">See the impact work</a></article>
          <article class="pillar"><div class="pillar-number">03</div><h3>Build Opportunity</h3><p>Events, athlete support, media and partners help real work reach further.</p><a class="card-link" href="media-partnerships.html">Partner with us</a></article>
        `;
      }
    }

    if (path.endsWith('/nextgen.html')) {
      const heroActions = document.querySelector('.page-hero .actions');
      const fundingLink = heroActions?.querySelector('a[href="media-partnerships.html#opportunities"]');
      if (fundingLink) {
        fundingLink.href = 'programme-2027.html';
        fundingLink.textContent = 'View the proposed 2027 programme';
      }

      if (!document.getElementById('flagship-programme')) {
        const impactBand = document.querySelector('.impact-band');
        const flagship = document.createElement('section');
        flagship.className = 'section paper-deep';
        flagship.id = 'flagship-programme';
        flagship.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">The proposed 2027 priority</p><h2 class="display section-title">One structured programme to develop with the right partner.</h2></div>
            <div>
              <p class="lead">The I Am Limitless Access Programme brings women’s access, youth development and athlete opportunity into one proposed delivery and reporting framework.</p>
              <p>It remains a proposal until funding, targets, budget, dates and responsibilities are formally agreed.</p>
              <div class="actions"><a class="btn primary" href="programme-2027.html">View the programme</a><a class="btn" href="media-partnerships.html">Explore partnership routes</a></div>
            </div>
          </div>
        `;
        if (impactBand?.parentNode) impactBand.parentNode.insertBefore(flagship, impactBand.nextSibling);
      }
    }

    const addYouTubeButton = (container, className = 'btn light') => {
      if (!container || container.querySelector(`a[href="${YOUTUBE_URL}"]`)) return;
      const link = document.createElement('a');
      link.className = className;
      link.href = YOUTUBE_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Watch I Am Limitless ↗';
      link.setAttribute('aria-label', 'Watch I Am Limitless on YouTube');
      container.appendChild(link);
    };

    if (path.endsWith('/movement.html')) {
      addYouTubeButton(document.querySelector('.page-hero .actions'));
    }

    if (path.endsWith('/media-partnerships.html')) {
      addYouTubeButton(document.querySelector('#media .actions'), 'btn');
    }

    if (path.endsWith('/press-kit.html')) {
      addYouTubeButton(document.querySelector('.page-hero .actions'));
    }
  }, 0);
});
