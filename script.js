(() => {
  const utilityStyles = document.createElement('style');
  utilityStyles.textContent = `
    .whatsapp-float,
    .discord-float,
    .back-to-top {
      position: fixed;
      z-index: 220;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      box-shadow: 0 12px 34px rgba(0,0,0,.32);
      font: 800 .72rem/1 "Manrope", Arial, sans-serif;
      letter-spacing: .08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: transform .2s ease, box-shadow .2s ease, opacity .2s ease, visibility .2s ease;
    }
    .whatsapp-float,
    .discord-float {
      right: max(18px, env(safe-area-inset-right));
      gap: 10px;
      min-height: 54px;
      padding: 0 17px;
      border: 1px solid rgba(255,255,255,.35);
    }
    .whatsapp-float {
      bottom: max(18px, env(safe-area-inset-bottom));
      border: 1px solid rgba(255,255,255,.35);
      background: #25d366;
      color: #07150c;
      cursor: pointer;
    }
    .discord-float {
      bottom: calc(82px + env(safe-area-inset-bottom));
      background: #5865f2;
      color: #fff;
    }
    .back-to-top {
      left: max(18px, env(safe-area-inset-left));
      bottom: max(18px, env(safe-area-inset-bottom));
      gap: 8px;
      min-height: 50px;
      padding: 0 16px;
      border: 1px solid rgba(211,183,126,.7);
      background: rgba(13,11,12,.95);
      color: #f1e7d5;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transform: translateY(12px);
    }
    .back-to-top.is-visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    .whatsapp-float:hover,
    .whatsapp-float:focus-visible,
    .discord-float:hover,
    .discord-float:focus-visible,
    .back-to-top:hover,
    .back-to-top:focus-visible {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(0,0,0,.38);
      outline: none;
    }
    .whatsapp-float svg,
    .discord-float svg,
    .back-to-top svg {
      width: 24px;
      height: 24px;
      flex: 0 0 auto;
      fill: currentColor;
    }
    .back-to-top svg { width: 20px; height: 20px; }

    .whatsapp-greeting {
      position: fixed;
      right: max(18px, env(safe-area-inset-right));
      bottom: calc(86px + env(safe-area-inset-bottom));
      z-index: 225;
      width: min(360px, calc(100vw - 36px));
      padding: 18px;
      border: 1px solid rgba(176,138,82,.5);
      border-radius: 16px;
      background: #fffaf0;
      color: #171316;
      box-shadow: 0 20px 58px rgba(0,0,0,.34);
      font-family: "Manrope", Arial, sans-serif;
      opacity: 0;
      visibility: hidden;
      transform: translateY(14px) scale(.98);
      transform-origin: bottom right;
      transition: opacity .24s ease, visibility .24s ease, transform .24s ease;
    }
    .whatsapp-greeting::after {
      content: "";
      position: absolute;
      right: 24px;
      bottom: -9px;
      width: 18px;
      height: 18px;
      border-right: 1px solid rgba(176,138,82,.5);
      border-bottom: 1px solid rgba(176,138,82,.5);
      background: #fffaf0;
      transform: rotate(45deg);
    }
    .whatsapp-greeting.is-visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0) scale(1);
    }
    .whatsapp-greeting-head {
      display: grid;
      grid-template-columns: 42px 1fr 32px;
      gap: 11px;
      align-items: center;
      margin-bottom: 12px;
    }
    .whatsapp-greeting-mark {
      display: grid;
      width: 42px;
      height: 42px;
      place-items: center;
      border-radius: 50%;
      background: #171316;
      color: #d3b77e;
      font: 900 .75rem/1 "Manrope", Arial, sans-serif;
      letter-spacing: .06em;
    }
    .whatsapp-greeting-name {
      display: block;
      margin: 0 0 3px;
      font-size: .95rem;
      line-height: 1.1;
    }
    .whatsapp-greeting-brand {
      display: block;
      color: #6d6258;
      font-size: .76rem;
      line-height: 1.2;
    }
    .whatsapp-greeting-close {
      display: grid;
      width: 32px;
      height: 32px;
      place-items: center;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: transparent;
      color: #5e554d;
      font-size: 1.45rem;
      line-height: 1;
      cursor: pointer;
    }
    .whatsapp-greeting-close:hover,
    .whatsapp-greeting-close:focus-visible {
      background: rgba(23,19,22,.08);
      color: #171316;
      outline: none;
    }
    .whatsapp-greeting-message {
      margin: 0 0 15px;
      font-size: .93rem;
      line-height: 1.55;
    }
    .whatsapp-greeting-cta {
      position: relative;
      z-index: 1;
      display: flex;
      min-height: 44px;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background: #25d366;
      color: #07150c;
      font: 900 .72rem/1 "Manrope", Arial, sans-serif;
      letter-spacing: .07em;
      text-transform: uppercase;
      text-decoration: none;
    }
    .whatsapp-greeting-cta:hover,
    .whatsapp-greeting-cta:focus-visible {
      background: #1fc25a;
      outline: 2px solid #171316;
      outline-offset: 2px;
    }
    body.has-discord-float .whatsapp-greeting {
      bottom: calc(150px + env(safe-area-inset-bottom));
    }

    .nav-group {
      position: relative;
      display: flex;
      align-items: center;
    }
    .nav-group-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      min-height: 40px;
      padding: 8px 2px;
      border: 0;
      border-bottom: 1px solid transparent;
      background: transparent;
      color: inherit;
      font: 900 .67rem/1.2 "Manrope", Arial, sans-serif;
      letter-spacing: .1em;
      text-transform: uppercase;
      white-space: nowrap;
      cursor: pointer;
    }
    .nav-group-toggle::after {
      content: "⌄";
      display: inline-block;
      color: #d3b77e;
      font-size: .9rem;
      line-height: 1;
      transform: translateY(-1px);
      transition: transform .2s ease;
    }
    .nav-group.open .nav-group-toggle::after {
      transform: rotate(180deg) translateY(1px);
    }
    .nav-group-toggle:hover,
    .nav-group-toggle:focus-visible,
    .nav-group-toggle.is-active {
      color: #d3b77e;
      border-color: currentColor;
      outline: none;
    }
    .nav-group-primary .nav-group-toggle {
      min-height: 40px;
      padding: 0 14px;
      border: 1px solid #b08a52;
      background: #b08a52;
      color: #0d0b0c;
    }
    .nav-group-primary .nav-group-toggle::after { color: #0d0b0c; }
    .nav-submenu {
      position: absolute;
      top: calc(100% + 10px);
      left: 0;
      z-index: 260;
      display: none;
      width: max-content;
      min-width: 230px;
      padding: 9px;
      border: 1px solid rgba(176,138,82,.48);
      background: rgba(13,11,12,.99);
      box-shadow: 0 18px 48px rgba(0,0,0,.42);
    }
    .nav-group:hover .nav-submenu,
    .nav-group:focus-within .nav-submenu,
    .nav-group.open .nav-submenu { display: block; }
    .nav-submenu a {
      display: block !important;
      width: 100% !important;
      padding: 11px 12px !important;
      border: 0 !important;
      border-bottom: 1px solid rgba(241,231,213,.12) !important;
      color: #f1e7d5 !important;
      font-size: .65rem !important;
      line-height: 1.35;
      text-align: left;
      white-space: normal;
    }
    .nav-submenu a:last-child { border-bottom: 0 !important; }
    .nav-submenu a:hover,
    .nav-submenu a:focus-visible,
    .nav-submenu a[aria-current="page"] {
      background: rgba(176,138,82,.16);
      color: #d3b77e !important;
      outline: none;
    }

    @media (max-width: 1040px) {
      .nav-group { display: block; width: 100%; }
      .nav-group-toggle,
      .nav-group-primary .nav-group-toggle {
        width: 100%;
        min-height: 48px;
        justify-content: space-between;
        padding: 13px 6px;
        border: 0;
        border-bottom: 1px solid rgba(241,231,213,.15);
        background: transparent;
        color: #f1e7d5;
        text-align: left;
      }
      .nav-group-primary .nav-group-toggle::after { color: #d3b77e; }
      .nav-group .nav-submenu {
        position: static;
        display: none !important;
        width: 100%;
        min-width: 0;
        padding: 2px 0 8px 14px;
        border: 0;
        background: #171316;
        box-shadow: none;
      }
      .nav-group.open .nav-submenu { display: block !important; }
      .nav-submenu a {
        min-height: 44px;
        display: flex !important;
        align-items: center;
        padding: 10px 12px !important;
        font-size: .68rem !important;
      }
    }

    @media (max-width: 560px) {
      .whatsapp-float,
      .back-to-top {
        width: 46px;
        height: 46px;
        min-height: 46px;
        padding: 0;
        bottom: max(10px, env(safe-area-inset-bottom));
      }
      .whatsapp-float { right: max(9px, env(safe-area-inset-right)); }
      .back-to-top { left: max(9px, env(safe-area-inset-left)); }
      .whatsapp-float span,
      .back-to-top span { display: none; }
      .whatsapp-greeting {
        right: max(9px, env(safe-area-inset-right));
        bottom: calc(66px + env(safe-area-inset-bottom));
        width: min(340px, calc(100vw - 18px));
        padding: 16px;
      }
      body.has-discord-float .whatsapp-greeting {
        bottom: calc(120px + env(safe-area-inset-bottom));
      }
      body.has-mobile-times .whatsapp-greeting {
        bottom: calc(124px + env(safe-area-inset-bottom));
      }
      body.has-mobile-times.has-discord-float .whatsapp-greeting {
        bottom: calc(178px + env(safe-area-inset-bottom));
      }
      .discord-float {
        right: max(9px, env(safe-area-inset-right));
        bottom: calc(64px + env(safe-area-inset-bottom));
        min-height: 46px;
        padding: 0 13px;
        font-size: .64rem;
      }
      .discord-float svg { width: 21px; height: 21px; }
      body.has-mobile-times .whatsapp-float,
      body.has-mobile-times .back-to-top {
        bottom: calc(68px + env(safe-area-inset-bottom));
      }
      body.has-mobile-times .discord-float {
        bottom: calc(122px + env(safe-area-inset-bottom));
      }
      .whatsapp-float svg { width: 21px; height: 21px; }
      .back-to-top svg { width: 18px; height: 18px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .whatsapp-float,
      .whatsapp-greeting,
      .discord-float,
      .back-to-top,
      .nav-group-toggle::after { transition: none; }
    }
  `;
  document.head.appendChild(utilityStyles);
})();

document.addEventListener('DOMContentLoaded', () => {
  const DISCORD_URL = 'https://discord.gg/ZdepHuTgnm';
  const WHATSAPP_URL = `https://wa.me/212666664225?text=${encodeURIComponent('Hello Go Limitless, I would like some more information.')}`;
  const path = window.location.pathname;
  const isHomepage = path.endsWith('/') || path.endsWith('/index.html');
  const isPricingPage = path.endsWith('/pricing.html');
  const isCommunityPage = path.endsWith('/community.html');

  if (document.querySelector('.mobile-times')) document.body.classList.add('has-mobile-times');
  if (isCommunityPage) document.body.classList.add('has-discord-float');

  document.querySelectorAll('a[href="home.html"]').forEach((link) => {
    link.setAttribute('href', 'index.html');
  });

  document.querySelectorAll('.nav-links').forEach((nav) => {
    nav.innerHTML = '';

    const createLink = (href, label, options = {}) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      if (options.external) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      if (options.current) link.setAttribute('aria-current', 'page');
      return link;
    };

    const closeGroups = (except = null) => {
      nav.querySelectorAll('.nav-group.open').forEach((group) => {
        if (group === except) return;
        group.classList.remove('open');
        group.querySelector('.nav-group-toggle')?.setAttribute('aria-expanded', 'false');
      });
    };

    const createGroup = (label, items, activePaths = [], primary = false) => {
      const group = document.createElement('div');
      group.className = `nav-group${primary ? ' nav-group-primary' : ''}`;
      const safeId = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const submenuId = `submenu-${safeId}`;
      const active = activePaths.some((itemPath) => path.endsWith(itemPath));

      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = `nav-group-toggle${active ? ' is-active' : ''}`;
      toggle.textContent = label;
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', submenuId);

      const submenu = document.createElement('div');
      submenu.className = 'nav-submenu';
      submenu.id = submenuId;

      items.forEach((item) => {
        const current = item.paths?.some((itemPath) => path.endsWith(itemPath)) || false;
        submenu.appendChild(createLink(item.href, item.label, {
          external: item.external,
          current
        }));
      });

      toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        const willOpen = !group.classList.contains('open');
        closeGroups(group);
        group.classList.toggle('open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));
      });

      group.append(toggle, submenu);
      return group;
    };

    const trainGroup = createGroup('Train', [
      { href: 'classes.html#enquire', label: 'Try a Class' },
      { href: 'classes.html', label: 'Classes', paths: ['/classes.html'] },
      { href: 'timetable.html', label: 'Timetable', paths: ['/timetable.html'] }
    ], ['/classes.html', '/timetable.html'], true);

    const pricingLink = createLink('pricing.html', 'Pricing', { current: isPricingPage });

    const teamGroup = createGroup('Meet the Team', [
      { href: 'coaches.html', label: 'Meet the Team', paths: ['/coaches.html'] },
      { href: 'coaching.html', label: 'Coaching', paths: ['/coaching.html'] }
    ], ['/coaches.html', '/coaching.html']);

    const communityGroup = createGroup('Community', [
      { href: 'community.html', label: 'Community', paths: ['/community.html'] },
      { href: 'events.html', label: 'Events', paths: ['/events.html'] },
      { href: DISCORD_URL, label: 'Discord Forum ↗', external: true }
    ], ['/community.html', '/events.html']);

    const storyGroup = createGroup('Our Story', [
      { href: 'founder.html', label: 'Founder', paths: ['/founder.html'] },
      { href: 'nextgen.html', label: 'Limitless Next Gen · Nonprofit', paths: ['/nextgen.html'] }
    ], ['/founder.html', '/nextgen.html']);

    [trainGroup, pricingLink, teamGroup, communityGroup, storyGroup]
      .forEach((item) => nav.appendChild(item));

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target)) closeGroups();
    });
  });

  document.querySelectorAll('.footer-links').forEach((footerLinks) => {
    if (!footerLinks.querySelector('a[href="pricing.html"]')) {
      const pricingLink = document.createElement('a');
      pricingLink.href = 'pricing.html';
      pricingLink.textContent = 'Pricing';
      const firstExternalLink = [...footerLinks.querySelectorAll('a')]
        .find((link) => link.href.startsWith('http'));
      footerLinks.insertBefore(pricingLink, firstExternalLink || null);
    }
    footerLinks.querySelectorAll(`a[href="${DISCORD_URL}"]`).forEach((link) => link.remove());
  });

  if (isCommunityPage) {
    const heroActions = document.querySelector('.page-hero .actions');
    if (heroActions && !heroActions.querySelector('a[href="events.html"]')) {
      const eventsLink = document.createElement('a');
      eventsLink.className = 'btn light';
      eventsLink.href = 'events.html';
      eventsLink.textContent = 'Explore Limitless Events';
      heroActions.appendChild(eventsLink);
    }
  }

  if (isCommunityPage && !document.getElementById('discord')) {
    const discordSection = document.createElement('section');
    discordSection.className = 'section dark';
    discordSection.id = 'discord';
    discordSection.innerHTML = `
      <div class="wrap intro-grid">
        <div>
          <p class="eyebrow">Free Discord community forum · Morocco</p>
          <h2 class="display section-title">The online home of the movement.</h2>
          <div class="rule"></div>
        </div>
        <div>
          <p class="lead">A meeting point for local members, travellers, nomads, coaches and athletes to discover Go Limitless events, join discussions, arrange meetups and stay connected across Morocco.</p>
          <div class="actions">
            <a class="btn gold" href="${DISCORD_URL}" target="_blank" rel="noopener noreferrer">Open Discord Community Forum ↗</a>
          </div>
        </div>
      </div>
    `;
    const hero = document.querySelector('.page-hero');
    const introSection = hero?.nextElementSibling;
    if (introSection) introSection.insertAdjacentElement('afterend', discordSection);
    else document.querySelector('main')?.appendChild(discordSection);
  }

  const reviewsTrack = document.querySelector('.reviews-track');
  if (reviewsTrack) {
    const reviewsSection = reviewsTrack.closest('section');
    const repeatedReviewIntro = reviewsSection?.querySelector('.section-head > .lead');
    if (repeatedReviewIntro) repeatedReviewIntro.remove();
    const reviewsButton = reviewsSection?.querySelector('.actions a');
    if (reviewsButton && isHomepage) {
      reviewsButton.textContent = 'Read all Google reviews';
      reviewsButton.setAttribute('href', 'community.html#reviews');
    }
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.querySelectorAll('.nav-group.open').forEach((group) => {
        group.classList.remove('open');
        group.querySelector('.nav-group-toggle')?.setAttribute('aria-expanded', 'false');
      });
    };
    menuToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (isCommunityPage) {
    const discordButton = document.createElement('a');
    discordButton.className = 'discord-float';
    discordButton.href = DISCORD_URL;
    discordButton.target = '_blank';
    discordButton.rel = 'noopener noreferrer';
    discordButton.setAttribute('aria-label', 'Open the Go Limitless Discord community forum');
    discordButton.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 4h16v12H8l-4 4V4zm4 5v2h2V9H8zm3 0v2h2V9h-2zm3 0v2h2V9h-2z"/>
      </svg>
      <span>Discord Forum</span>
    `;
    document.body.appendChild(discordButton);
  }

  const whatsappGreeting = document.createElement('aside');
  whatsappGreeting.className = 'whatsapp-greeting';
  whatsappGreeting.id = 'whatsapp-greeting';
  whatsappGreeting.setAttribute('role', 'dialog');
  whatsappGreeting.setAttribute('aria-label', 'Chat with Go Limitless on WhatsApp');
  whatsappGreeting.setAttribute('aria-hidden', 'true');
  whatsappGreeting.innerHTML = `
    <div class="whatsapp-greeting-head">
      <span class="whatsapp-greeting-mark" aria-hidden="true">GL</span>
      <span><strong class="whatsapp-greeting-name">Danielle</strong><small class="whatsapp-greeting-brand">Go Limitless</small></span>
      <button class="whatsapp-greeting-close" type="button" aria-label="Close WhatsApp message">×</button>
    </div>
    <p class="whatsapp-greeting-message">Hey 👋 Welcome to Go Limitless. Are you looking for martial arts, strength classes, coaching or events?</p>
    <a class="whatsapp-greeting-cta" href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
  `;

  const whatsappButton = document.createElement('button');
  whatsappButton.className = 'whatsapp-float';
  whatsappButton.type = 'button';
  whatsappButton.setAttribute('aria-label', 'Open WhatsApp chat options');
  whatsappButton.setAttribute('aria-controls', 'whatsapp-greeting');
  whatsappButton.setAttribute('aria-expanded', 'false');
  whatsappButton.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M19.11 17.37c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.29-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.41-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.69.33-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z"/>
      <path d="M16.03 3.2c-7.05 0-12.79 5.73-12.79 12.78 0 2.25.59 4.45 1.71 6.38L3.14 28.8l6.59-1.73a12.75 12.75 0 0 0 6.29 1.6h.01c7.05 0 12.79-5.73 12.79-12.78S23.08 3.2 16.03 3.2zm0 23.31h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.03 1.04-3.81-.25-.39a10.57 10.57 0 0 1-1.63-5.64c0-5.82 4.73-10.55 10.56-10.55 5.82 0 10.55 4.73 10.55 10.55 0 5.82-4.73 10.55-10.56 10.55z"/>
    </svg>
    <span>WhatsApp us</span>
  `;

  const setGreetingOpen = (open, rememberClose = false) => {
    whatsappGreeting.classList.toggle('is-visible', open);
    whatsappGreeting.setAttribute('aria-hidden', String(!open));
    whatsappButton.setAttribute('aria-expanded', String(open));
    if (!open && rememberClose) {
      try { sessionStorage.setItem('golimitless-whatsapp-closed', '1'); } catch (_) { /* Storage may be unavailable. */ }
    }
  };

  whatsappButton.addEventListener('click', () => {
    setGreetingOpen(!whatsappGreeting.classList.contains('is-visible'));
  });
  whatsappGreeting.querySelector('.whatsapp-greeting-close')?.addEventListener('click', () => {
    setGreetingOpen(false, true);
    whatsappButton.focus();
  });
  whatsappGreeting.querySelector('.whatsapp-greeting-cta')?.addEventListener('click', () => {
    setGreetingOpen(false, true);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && whatsappGreeting.classList.contains('is-visible')) {
      setGreetingOpen(false, true);
      whatsappButton.focus();
    }
  });

  document.body.append(whatsappGreeting, whatsappButton);

  let greetingWasClosed = false;
  try { greetingWasClosed = sessionStorage.getItem('golimitless-whatsapp-closed') === '1'; } catch (_) { /* Storage may be unavailable. */ }
  if (isHomepage && !greetingWasClosed) {
    window.setTimeout(() => setGreetingOpen(true), 1100);
  }

  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.type = 'button';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  backToTopButton.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 4.5 4.5 12l1.9 1.9 4.25-4.25V20h2.7V9.65l4.25 4.25 1.9-1.9z"/></svg>
    <span>Back to top</span>
  `;
  document.body.appendChild(backToTopButton);

  const updateBackToTopVisibility = () => {
    backToTopButton.classList.toggle('is-visible', window.scrollY > 700);
  };
  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();

  backToTopButton.addEventListener('click', () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  const form = document.getElementById('class-enquiry-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        'Hello Go Limitless, I am interested in trying a class.',
        '',
        `Name: ${data.get('name')}`,
        `My WhatsApp number: ${data.get('phone')}`,
        `Class: ${data.get('class')}`,
        `Experience: ${data.get('level')}`,
        `Preferred day/time: ${data.get('preferredTime')}`
      ];
      const extra = String(data.get('message') || '').trim();
      if (extra) lines.push(`Message: ${extra}`);
      window.location.href = `https://wa.me/212666664225?text=${encodeURIComponent(lines.join('\n'))}`;
    });
  }
});
