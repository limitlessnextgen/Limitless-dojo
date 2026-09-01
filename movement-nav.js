document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const YOUTUBE_URL = 'https://www.youtube.com/@limitless_dojo';

    const primaryLinks = [
      ['classes.html', 'Train'],
      ['timetable.html', 'Timetable'],
      ['pricing.html', 'Pricing'],
      ['movement.html', 'Story'],
      ['nextgen.html', 'Community']
    ];

    const isCurrent = (href, label) => {
      if (path.endsWith(`/${href}`)) return true;
      if (label === 'Story' && path.endsWith('/founder.html')) return true;
      return false;
    };

    document.querySelectorAll('.nav-links').forEach((nav) => {
      nav.innerHTML = primaryLinks.map(([href, label]) =>
        `<a href="${href}"${isCurrent(href, label) ? ' aria-current="page"' : ''}>${label}</a>`
      ).join('');
    });

    document.querySelectorAll('.footer-links').forEach((footer) => {
      footer.innerHTML = '';
      [
        ['classes.html', 'Train'],
        ['timetable.html', 'Timetable'],
        ['pricing.html', 'Pricing'],
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
            <div><p class="lead">We welcome practical support, collaboration and introductions that help strengthen real community work in Tamraght and across Morocco.</p><div class="actions"><a class="btn gold" href="media-partnerships.html">Support or collaborate</a><a class="btn light" href="${YOUTUBE_URL}" target="_blank" rel="noopener noreferrer">Watch the work ↗</a></div></div>
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

    if (path.endsWith('/movement.html')) {
      const actions = document.querySelector('.page-hero .actions');
      if (actions && !actions.querySelector(`a[href="${YOUTUBE_URL}"]`)) {
        const link = document.createElement('a');
        link.className = 'btn light';
        link.href = YOUTUBE_URL;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Watch the movement ↗';
        link.setAttribute('aria-label', 'Watch Go Limitless on YouTube');
        actions.appendChild(link);
      }
    }
  }, 0);
});
