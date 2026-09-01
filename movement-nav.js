document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    const path = window.location.pathname;
    const movementItems = [
      { href: 'movement.html', label: 'I Am Limitless Movement', path: '/movement.html' },
      { href: 'founder.html', label: 'Founder · Danielle Askari', path: '/founder.html' },
      { href: 'nextgen.html', label: 'Limitless Next Gen · Impact', path: '/nextgen.html' },
      { href: 'media-partnerships.html', label: 'Media & Partnerships', path: '/media-partnerships.html' }
    ];

    document.querySelectorAll('.nav-links').forEach((nav) => {
      const storyMenu = nav.querySelector('#submenu-our-story');
      if (storyMenu) {
        storyMenu.innerHTML = '';
        movementItems.forEach((item) => {
          const link = document.createElement('a');
          link.href = item.href;
          link.textContent = item.label;
          if (path.endsWith(item.path)) link.setAttribute('aria-current', 'page');
          storyMenu.appendChild(link);
        });
        const group = storyMenu.closest('.nav-group');
        const toggle = group?.querySelector('.nav-group-toggle');
        if (toggle && movementItems.some((item) => path.endsWith(item.path))) toggle.classList.add('is-active');
      } else {
        movementItems.forEach((item) => {
          if (nav.querySelector(`a[href="${item.href}"]`)) return;
          const link = document.createElement('a');
          link.href = item.href;
          link.textContent = item.label.replace(' · Danielle Askari', '').replace(' · Impact', '');
          if (path.endsWith(item.path)) link.setAttribute('aria-current', 'page');
          nav.appendChild(link);
        });
      }
    });

    document.querySelectorAll('.footer-links').forEach((footer) => {
      [
        ['movement.html', 'I Am Limitless'],
        ['founder.html', 'Founder'],
        ['nextgen.html', 'Impact'],
        ['media-partnerships.html', 'Media & Partnerships']
      ].forEach(([href, label]) => {
        if (footer.querySelector(`a[href="${href}"]`)) return;
        const link = document.createElement('a');
        link.href = href;
        link.textContent = label;
        footer.insertBefore(link, footer.firstChild);
      });
    });
  }, 0);
});
