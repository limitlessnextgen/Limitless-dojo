document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const isHome = path === '/' || path.endsWith('/index.html');
    const YOUTUBE_URL = 'https://www.youtube.com/@limitless_dojo';

    const primaryLinks = [
      ['classes.html', 'Train'],
      ['movement.html', 'Story'],
      ['nextgen.html', 'Community']
    ];

    const storyItems = [
      { href: 'movement.html', label: 'I Am Limitless Story', path: '/movement.html' },
      { href: 'founder.html', label: 'Founder · Danielle Askari', path: '/founder.html' },
      { href: 'nextgen.html', label: 'Community Impact', path: '/nextgen.html' }
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

      nav.innerHTML = primaryLinks.map(([href, label]) => {
        const current = path.endsWith(`/${href}`) || (label === 'Story' && path.endsWith('/founder.html'));
        return `<a href="${href}"${current ? ' aria-current="page"' : ''}>${label}</a>`;
      }).join('');
    });

    document.querySelectorAll('.footer-links').forEach((footer) => {
      footer.innerHTML = '';
      [
        ['classes.html', 'Train'],
        ['movement.html', 'Story'],
        ['nextgen.html', 'Community'],
        ['events.html', 'Events'],
        ['media-partnerships.html', 'Support & Contact']
      ].forEach(([href, label]) => {
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        footer.appendChild(link);
      });

      const youtube = document.createElement('a');
      youtube.href = YOUTUBE_URL;
      youtube.target = '_blank';
      youtube.rel = 'noopener noreferrer';
      youtube.textContent = 'YouTube ↗';
      youtube.setAttribute('aria-label', 'Watch Go Limitless on YouTube');
      footer.appendChild(youtube);
    });

    if (isHome) {
      const choosePath = document.querySelector('#choose-path');
      const heading = choosePath?.querySelector('.section-head');
      const grid = choosePath?.querySelector('.pathway-grid');

      if (heading) {
        heading.innerHTML = `
          <div><p class="eyebrow">Start here</p><h2 class="display section-title">Three simple ways into Go Limitless.</h2></div>
          <p class="lead">Train with us, understand the story or see the community work.</p>
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
            <div class="pathway-card-body"><span class="tag">Story</span><h3>Discover I Am Limitless</h3><p>See how a personal reminder and a rooftop became a locally built sport community in Tamraght.</p><a class="card-link" href="movement.html">Read the story</a></div>
          </article>
          <article class="pathway-card">
            <img loading="lazy" decoding="async" src="assets/youth-outdoor-movement.webp" alt="Community movement through Limitless Next Gen">
            <div class="pathway-card-body"><span class="tag">Community</span><h3>See the local impact</h3><p>Youth access, women’s opportunity, athlete support and community events rooted in Morocco.</p><a class="card-link" href="nextgen.html">Explore the community work</a></div>
          </article>
        `;
      }

      const sections = Array.from(document.querySelectorAll('main .section'));
      const movementSection = sections.find((section) =>
        ['The movement in action', 'How it works'].includes(section.querySelector('.eyebrow')?.textContent.trim())
      );
      const movementHead = movementSection?.querySelector('.section-head');
      const pillarGrid = movementSection?.querySelector('.pillar-grid');

      if (movementHead) {
        movementHead.innerHTML = `
          <div><p class="eyebrow">Built locally</p><h2 class="display section-title">Training, community and opportunity.</h2></div>
          <p class="lead">Go Limitless grows through real work in Tamraght: people training, communities connecting and athletes being given a stage.</p>
        `;
      }

      if (pillarGrid) {
        pillarGrid.innerHTML = `
          <article class="pillar"><div class="pillar-number">01</div><h3>Train</h3><p>Martial arts, strength and coaching create the daily community and commercial base.</p><a class="card-link" href="classes.html">Explore training</a></article>
          <article class="pillar"><div class="pillar-number">02</div><h3>Build Community</h3><p>Grassroots opportunities support women, young people and local participation.</p><a class="card-link" href="nextgen.html">See the community work</a></article>
          <article class="pillar"><div class="pillar-number">03</div><h3>Create Opportunity</h3><p>Events and athlete support help local effort become visible across Morocco.</p><a class="card-link" href="events.html">Explore events</a></article>
        `;
      }

      const closingBand = document.querySelector('main .partnership-band:last-of-type');
      if (closingBand) {
        closingBand.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">Built locally in Tamraght</p><h2 class="display section-title">Train with us. Follow the story. Support the community.</h2></div>
            <div><p class="lead">Go Limitless is growing carefully through training, events and community work in Morocco.</p><div class="actions"><a class="btn gold" href="timetable.html">Start training</a><a class="btn light" href="nextgen.html">See the community work</a></div></div>
          </div>
        `;
      }
    }

    if (path.endsWith('/nextgen.html')) {
      const heroActions = document.querySelector('.page-hero .actions');
      const secondAction = heroActions?.querySelector('a:nth-child(2)');
      if (secondAction) {
        secondAction.href = '#programmes';
        secondAction.textContent = 'See the community work';
      }

      document.getElementById('flagship-programme')?.remove();

      const closingBand = document.querySelector('main .partnership-band:last-of-type');
      if (closingBand) {
        closingBand.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">Help the work grow carefully</p><h2 class="display section-title">Local impact first.</h2></div>
            <div><p class="lead">We welcome practical support, collaboration and introductions that help strengthen real community work in Tamraght and across Morocco.</p><div class="actions"><a class="btn gold" href="media-partnerships.html">Support or collaborate</a><a class="btn light" href="https://www.youtube.com/@limitless_dojo" target="_blank" rel="noopener noreferrer">Watch the work ↗</a></div></div>
          </div>
        `;
      }
    }

    if (path.endsWith('/founder.html')) {
      document.querySelector('.impact-band')?.remove();

      const speaking = document.querySelector('#speaking');
      if (speaking) {
        speaking.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">Selected interviews and speaking</p><h2 class="display section-title">Available when the fit is right.</h2></div>
            <div><p class="lead">Danielle is open to thoughtful opportunities connected to sport, women, injury, community building and Morocco.</p><div class="actions"><a class="btn gold" href="media-partnerships.html#media">Media contact</a></div></div>
          </div>
        `;
      }

      const closingBand = document.querySelector('main .partnership-band:last-of-type');
      if (closingBand) {
        closingBand.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">Built locally</p><h2 class="display section-title">Rooted in Tamraght. Growing through real work.</h2></div>
            <div><p class="lead">Danielle’s focus is to strengthen Go Limitless in Morocco through training, community, events and carefully chosen collaborations.</p><div class="actions"><a class="btn gold" href="movement.html">Read the story</a><a class="btn light" href="coaching.html">Work with Danielle</a></div></div>
          </div>
        `;
      }
    }

    const addYouTubeButton = (container, className = 'btn light') => {
      if (!container || container.querySelector(`a[href="${YOUTUBE_URL}"]`)) return;
      const link = document.createElement('a');
      link.className = className;
      link.href = YOUTUBE_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Watch the movement ↗';
      link.setAttribute('aria-label', 'Watch Go Limitless on YouTube');
      container.appendChild(link);
    };

    if (path.endsWith('/movement.html')) {
      addYouTubeButton(document.querySelector('.page-hero .actions'));
    }
  }, 0);
});
