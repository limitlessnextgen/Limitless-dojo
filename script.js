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
      background: #25d366;
      color: #07150c;
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
      .discord-float,
      .back-to-top { transition: none; }
    }
  `;
  document.head.appendChild(utilityStyles);
})();

document.addEventListener('DOMContentLoaded', () => {
  const DISCORD_URL = 'https://discord.gg/ZdepHuTgnm';
  const path = window.location.pathname;
  const isHomepage = path.endsWith('/') || path.endsWith('/index.html');
  const isPricingPage = path.endsWith('/pricing.html');
  const isCommunityPage = path.endsWith('/community.html');

  if (document.querySelector('.mobile-times')) {
    document.body.classList.add('has-mobile-times');
  }

  document.querySelectorAll('a[href="home.html"]').forEach((link) => {
    link.setAttribute('href', 'index.html');
  });

  document.querySelectorAll('.nav-links').forEach((nav) => {
    nav.querySelectorAll('.discord-nav-link, a[href^="https://discord.gg/"]').forEach((link) => link.remove());
    nav.querySelectorAll('a[href="coaches.html"]').forEach((link) => link.remove());

    const ensureLink = (href, label, className = '') => {
      let link = nav.querySelector(`a[href="${href}"]`);
      if (!link) {
        link = document.createElement('a');
        link.href = href;
        nav.appendChild(link);
      }
      link.textContent = label;
      if (className) link.classList.add(className);
      return link;
    };

    let tryClassLink = nav.querySelector('.nav-cta');
    if (!tryClassLink) {
      tryClassLink = document.createElement('a');
      tryClassLink.className = 'nav-cta';
      nav.appendChild(tryClassLink);
    }
    tryClassLink.href = 'classes.html#enquire';
    tryClassLink.textContent = 'Try a class';

    const trainLink = ensureLink('classes.html', 'Train');
    const timetableLink = ensureLink('timetable.html', 'Timetable');
    const pricingLink = ensureLink('pricing.html', 'Pricing');
    const coachingLink = ensureLink('coaching.html', 'Coaching');
    const eventsLink = ensureLink('events.html', 'Events');
    const communityLink = ensureLink('community.html', 'Community');
    const nextGenLink = ensureLink('nextgen.html', 'Next Gen');
    const founderLink = ensureLink('founder.html', 'Founder');

    if (isPricingPage) pricingLink.setAttribute('aria-current', 'page');

    [
      tryClassLink,
      trainLink,
      timetableLink,
      pricingLink,
      coachingLink,
      eventsLink,
      communityLink,
      nextGenLink,
      founderLink
    ].forEach((link) => nav.appendChild(link));
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
    if (introSection) {
      introSection.insertAdjacentElement('afterend', discordSection);
    } else {
      document.querySelector('main')?.appendChild(discordSection);
    }
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

  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    const closeMenu = () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
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

  const whatsappButton = document.createElement('a');
  whatsappButton.className = 'whatsapp-float';
  whatsappButton.href = `https://wa.me/212666664225?text=${encodeURIComponent('Hello Go Limitless, I would like some more information.')}`;
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener noreferrer';
  whatsappButton.setAttribute('aria-label', 'Chat with Go Limitless on WhatsApp');
  whatsappButton.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M19.11 17.37c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.83 1.02-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.29-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.41-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.46.07-.69.33-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z"/>
      <path d="M16.03 3.2c-7.05 0-12.79 5.73-12.79 12.78 0 2.25.59 4.45 1.71 6.38L3.14 28.8l6.59-1.73a12.75 12.75 0 0 0 6.29 1.6h.01c7.05 0 12.79-5.73 12.79-12.78S23.08 3.2 16.03 3.2zm0 23.31h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.91 1.03 1.04-3.81-.25-.39a10.57 10.57 0 0 1-1.63-5.64c0-5.82 4.73-10.55 10.56-10.55 5.82 0 10.55 4.73 10.55 10.55 0 5.82-4.73 10.55-10.56 10.55z"/>
    </svg>
    <span>WhatsApp us</span>
  `;
  document.body.appendChild(whatsappButton);

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
