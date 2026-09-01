document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const movementItems = [
      { href: 'movement.html', label: 'I Am Limitless Movement', path: '/movement.html' },
      { href: 'founder.html', label: 'Founder · Danielle Askari', path: '/founder.html' },
      { href: 'nextgen.html', label: 'Limitless Next Gen · Impact', path: '/nextgen.html' },
      { href: 'programme-2027.html', label: '2027 Flagship Programme', path: '/programme-2027.html' },
      { href: 'media-partnerships.html', label: 'Media & Partnerships', path: '/media-partnerships.html' },
      { href: 'press-kit.html', label: 'Official Press Kit', path: '/press-kit.html' }
    ];

    const directNavigationItems = movementItems.filter((item) =>
      ['movement.html', 'founder.html', 'media-partnerships.html'].includes(item.href)
    );

    const makeLink = (item, compact = false) => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = compact
        ? item.label.replace(' · Danielle Askari', '').replace(' · Impact', '')
        : item.label;
      if (path.endsWith(item.path)) link.setAttribute('aria-current', 'page');
      return link;
    };

    const insertAfter = (reference, element) => {
      if (!reference?.parentNode) return;
      reference.parentNode.insertBefore(element, reference.nextSibling);
    };

    document.querySelectorAll('.nav-links').forEach((nav) => {
      const storyMenu = nav.querySelector('#submenu-our-story');
      if (storyMenu) {
        storyMenu.innerHTML = '';
        movementItems.forEach((item) => storyMenu.appendChild(makeLink(item)));
        const group = storyMenu.closest('.nav-group');
        const toggle = group?.querySelector('.nav-group-toggle');
        if (toggle && movementItems.some((item) => path.endsWith(item.path))) {
          toggle.classList.add('is-active');
        }
      } else {
        directNavigationItems.forEach((item) => {
          if (!nav.querySelector(`a[href="${item.href}"]`)) nav.appendChild(makeLink(item, true));
        });
      }
    });

    document.querySelectorAll('.footer-links').forEach((footer) => {
      [
        ['movement.html', 'I Am Limitless'],
        ['founder.html', 'Founder'],
        ['nextgen.html', 'Impact'],
        ['programme-2027.html', '2027 Programme'],
        ['media-partnerships.html', 'Media & Partnerships'],
        ['press-kit.html', 'Press Kit']
      ].forEach(([href, label]) => {
        if (footer.querySelector(`a[href="${href}"]`)) return;
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        footer.insertBefore(link, footer.firstChild);
      });
    });

    if (path.endsWith('/movement.html') && !document.getElementById('brand-system')) {
      const firstContentSection = document.querySelector('main .section');
      const brandSystem = document.createElement('section');
      brandSystem.className = 'section paper-deep';
      brandSystem.id = 'brand-system';
      brandSystem.innerHTML = `
        <div class="wrap section-head">
          <div><p class="eyebrow">One ecosystem. Clear roles.</p><h2 class="display section-title">How the Limitless system fits together.</h2></div>
          <p class="lead">The names are connected under one founder-led structure rather than competing as separate brands.</p>
        </div>
        <div class="wrap card-grid three">
          <article class="card"><div class="card-number">01</div><h3>Go Limitless</h3><p>The commercial and community umbrella connecting training, coaching, events and impact.</p></article>
          <article class="card"><div class="card-number">02</div><h3>I Am Limitless</h3><p>The founder-led movement and public philosophy: resilience, access, visibility and opportunity.</p></article>
          <article class="card"><div class="card-number">03</div><h3>Limitless Dojo</h3><p>The martial arts and local training home in Tamraght.</p></article>
          <article class="card"><div class="card-number">04</div><h3>Limitless Next Gen</h3><p>The grassroots impact initiative for youth, women and emerging athletes.</p></article>
          <article class="card"><div class="card-number">05</div><h3>Limitless Events</h3><p>The athlete visibility and competition platform.</p></article>
          <article class="card"><div class="card-number">06</div><h3>Danielle Askari</h3><p>The founder, coach and public voice connecting every part of the ecosystem.</p></article>
        </div>
      `;
      if (firstContentSection) insertAfter(firstContentSection, brandSystem);
    }

    if (path.endsWith('/media-partnerships.html')) {
      const mediaActions = document.querySelector('#media .actions');
      if (mediaActions && !mediaActions.querySelector('a[href="press-kit.html"]')) {
        const pressKit = document.createElement('a');
        pressKit.className = 'btn';
        pressKit.href = 'press-kit.html';
        pressKit.textContent = 'Open official press kit';
        mediaActions.appendChild(pressKit);
      }

      if (!document.getElementById('flagship-programme')) {
        const impactBand = document.querySelector('.impact-band');
        const flagship = document.createElement('section');
        flagship.className = 'section paper-deep';
        flagship.id = 'flagship-programme';
        flagship.innerHTML = `
          <div class="wrap founder-authority">
            <div>
              <p class="eyebrow">2027 flagship funding priority</p>
              <h2 class="display section-title">One programme partners can understand, fund and evaluate.</h2>
              <p class="lead">The proposed I Am Limitless Access Programme combines women’s access, youth development and athlete opportunity in one accountable twelve-month framework.</p>
              <p>It includes proposed delivery targets, evidence standards, budget categories, safeguarding development and quarterly partner reporting.</p>
              <div class="actions"><a class="btn primary" href="programme-2027.html">View the full programme</a><a class="btn" href="https://wa.me/212666664225?text=Hello%20Danielle%2C%20I%20would%20like%20to%20discuss%20the%20I%20Am%20Limitless%20Access%20Programme%202027.">Discuss partnership</a></div>
            </div>
            <figure class="photo-frame portrait-frame"><img loading="lazy" src="assets/youth-outdoor-movement.webp" alt="Outdoor movement through Limitless Next Gen"><figcaption>Proposed 12-month flagship programme · 2027</figcaption></figure>
          </div>
        `;
        if (impactBand) insertAfter(impactBand, flagship);
      }

      const closingBand = document.querySelector('main .partnership-band:last-of-type');
      if (closingBand && !closingBand.querySelector('.email-status-note')) {
        const note = document.createElement('div');
        note.className = 'institutional-note email-status-note';
        note.style.marginTop = '24px';
        note.innerHTML = '<strong>Professional email:</strong> A golimitless.ma partnership and media email address is being set up. Until it is active, WhatsApp is the verified direct founder contact and serious enquiries are handled personally by Danielle.';
        closingBand.querySelector('.wrap > div:last-child')?.appendChild(note);
      }
    }

    if (path.endsWith('/nextgen.html')) {
      const heroActions = document.querySelector('.page-hero .actions');
      const fundingLink = heroActions?.querySelector('a[href="media-partnerships.html#opportunities"]');
      if (fundingLink) {
        fundingLink.href = 'programme-2027.html';
        fundingLink.textContent = 'View the 2027 programme';
      }

      if (!document.getElementById('flagship-programme')) {
        const impactBand = document.querySelector('.impact-band');
        const flagship = document.createElement('section');
        flagship.className = 'section paper-deep';
        flagship.id = 'flagship-programme';
        flagship.innerHTML = `
          <div class="wrap next-grid">
            <div><p class="eyebrow">The 2027 funding priority</p><h2 class="display section-title">Turn grassroots proof into one structured programme.</h2></div>
            <div>
              <p class="lead">The proposed I Am Limitless Access Programme brings women’s access, youth development and athlete opportunity into one twelve-month delivery and reporting framework.</p>
              <p>Current community reach is kept separate from future funded programme participation, so partners receive clear and responsible evidence.</p>
              <div class="actions"><a class="btn primary" href="programme-2027.html">View the programme framework</a><a class="btn" href="media-partnerships.html">Explore partnership routes</a></div>
            </div>
          </div>
        `;
        if (impactBand) insertAfter(impactBand, flagship);
      }
    }
  }, 0);
});

document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const YOUTUBE_URL = 'https://www.youtube.com/@limitless_dojo';

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

    document.querySelectorAll('.footer-links').forEach((footer) => {
      if (footer.querySelector(`a[href="${YOUTUBE_URL}"]`)) return;
      const link = document.createElement('a');
      link.href = YOUTUBE_URL;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'YouTube ↗';
      link.setAttribute('aria-label', 'Watch I Am Limitless on YouTube');
      footer.appendChild(link);
    });

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
