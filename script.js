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
