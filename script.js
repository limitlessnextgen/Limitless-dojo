(() => {
  const responsiveStylesheet = document.createElement('link');
  responsiveStylesheet.rel = 'stylesheet';
  responsiveStylesheet.href = 'responsive.css';
  responsiveStylesheet.dataset.siteResponsive = 'true';
  document.head.appendChild(responsiveStylesheet);

  const whatsappStyles = document.createElement('style');
  whatsappStyles.textContent = `
    .whatsapp-float {
      position: fixed;
      right: max(18px, env(safe-area-inset-right));
      bottom: max(18px, env(safe-area-inset-bottom));
      z-index: 220;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-height: 54px;
      padding: 0 17px;
      border: 1px solid rgba(255,255,255,.35);
      border-radius: 999px;
      background: #25d366;
      color: #07150c;
      box-shadow: 0 12px 34px rgba(0,0,0,.32);
      font: 900 .72rem/1 Inter, Arial, sans-serif;
      letter-spacing: .08em;
      text-transform: uppercase;
      text-decoration: none;
      transition: transform .2s ease, box-shadow .2s ease;
    }
    .whatsapp-float:hover,
    .whatsapp-float:focus-visible {
      transform: translateY(-3px);
      box-shadow: 0 16px 40px rgba(0,0,0,.38);
      outline: none;
    }
    .whatsapp-float svg {
      width: 24px;
      height: 24px;
      flex: 0 0 auto;
      fill: currentColor;
    }
    @media (max-width: 560px) {
      .whatsapp-float {
        width: 56px;
        height: 56px;
        min-height: 56px;
        padding: 0;
        justify-content: center;
      }
      .whatsapp-float span { display: none; }
    }
    @media (prefers-reduced-motion: reduce) {
      .whatsapp-float { transition: none; }
    }
  `;
  document.head.appendChild(whatsappStyles);
})();

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
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
