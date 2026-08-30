from pathlib import Path
import re

ROOT = Path.cwd()
CSS_LINKS = (
    '<link rel="stylesheet" href="styles.css">'
    '<link rel="stylesheet" href="responsive.css">'
    '<link rel="stylesheet" href="design-system.css">'
)

changed = []
html_pages = sorted(ROOT.glob('*.html'))

for page in html_pages:
    original = page.read_text(encoding='utf-8')
    text = original

    # Remove any existing duplicate secondary stylesheet tags, then insert the
    # complete design stack directly after styles.css.
    text = re.sub(
        r'\s*<link\s+rel=["\']stylesheet["\']\s+href=["\'](?:responsive|design-system)\.css["\']\s*/?>',
        '',
        text,
        flags=re.IGNORECASE,
    )

    base_link = '<link rel="stylesheet" href="styles.css">'
    if base_link in text:
        text = text.replace(base_link, CSS_LINKS, 1)
    elif '</head>' in text:
        text = text.replace('</head>', f'  {CSS_LINKS}\n</head>', 1)

    if text != original:
        page.write_text(text, encoding='utf-8')
        changed.append(str(page))

script_path = ROOT / 'script.js'
script = script_path.read_text(encoding='utf-8')
script_original = script

# Core CSS is now loaded by HTML, so JavaScript should only manage behaviour.
script, removed = re.subn(
    r'\n  const stylesheets = \[.*?\n  \}\);\n\n(?=  const utilityStyles)',
    '\n',
    script,
    count=1,
    flags=re.DOTALL,
)

# Identify pages that have the sticky mobile class-times bar.
dom_marker = "document.addEventListener('DOMContentLoaded', () => {\n"
body_class_line = "  if (document.querySelector('.mobile-times')) document.body.classList.add('has-mobile-times');\n\n"
if body_class_line not in script:
    script = script.replace(dom_marker, dom_marker + body_class_line, 1)

# Keep the back-to-top control out of the way until the visitor has moved
# further down the page.
script = script.replace('window.scrollY > 500', 'window.scrollY > 700')

# Mobile utility overrides are inserted after the original mobile rules so
# they win without changing the desktop controls.
mobile_override = '''
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
      body.has-mobile-times .whatsapp-float,
      body.has-mobile-times .back-to-top {
        bottom: calc(68px + env(safe-area-inset-bottom));
      }
      .whatsapp-float svg { width: 21px; height: 21px; }
      .back-to-top svg { width: 18px; height: 18px; }
    }
'''
if 'body.has-mobile-times .whatsapp-float' not in script:
    script = script.replace(
        '    @media (prefers-reduced-motion: reduce) {',
        mobile_override + '    @media (prefers-reduced-motion: reduce) {',
        1,
    )

if script != script_original:
    script_path.write_text(script, encoding='utf-8')
    changed.append('script.js')

design_path = ROOT / 'design-system.css'
design = design_path.read_text(encoding='utf-8')
phase1_marker = '/* Phase 1: mobile usability and readable long-form text */'
phase1_css = r'''

/* Phase 1: mobile usability and readable long-form text */
.review blockquote {
  font-family: "Manrope", Arial, sans-serif;
  font-size: 1.02rem;
  font-weight: 500;
  line-height: 1.65;
  letter-spacing: 0;
  text-transform: none;
}

.section p,
.hero-lead,
.lead,
.card p,
.image-card p,
.faq p,
.enquiry-panel p,
.contact-grid p {
  font-family: "Manrope", Arial, sans-serif;
  text-transform: none;
}

@media (max-width: 760px) {
  .site-footer {
    padding-bottom: calc(112px + env(safe-area-inset-bottom));
  }

  body.has-mobile-times .site-footer {
    padding-bottom: calc(150px + env(safe-area-inset-bottom));
  }

  .review blockquote {
    font-size: .98rem;
    line-height: 1.62;
  }
}

@media (max-width: 430px) {
  .section-title {
    font-size: clamp(1.78rem, 8.3vw, 2.25rem);
    line-height: 1.04;
    letter-spacing: -.025em;
  }

  .home-hero .display {
    font-size: clamp(2.8rem, 13vw, 4.6rem);
    line-height: .95;
  }
}
'''
if phase1_marker not in design:
    design_path.write_text(design.rstrip() + phase1_css + '\n', encoding='utf-8')
    changed.append('design-system.css')

# QA checks: all rendered pages use the direct design stack in order.
errors = []
for page in html_pages:
    text = page.read_text(encoding='utf-8')
    positions = [
        text.find('href="styles.css"'),
        text.find('href="responsive.css"'),
        text.find('href="design-system.css"'),
    ]
    if any(position < 0 for position in positions):
        errors.append(f'{page}: missing direct stylesheet link')
    elif positions != sorted(positions):
        errors.append(f'{page}: stylesheet order is incorrect')
    for stylesheet in ('styles.css', 'responsive.css', 'design-system.css'):
        if text.count(f'href="{stylesheet}"') != 1:
            errors.append(f'{page}: expected one {stylesheet} link')

script_check = script_path.read_text(encoding='utf-8')
if 'const stylesheets = [' in script_check:
    errors.append('script.js still injects core stylesheets')
for required in ('menu-toggle', 'class-enquiry-form', 'whatsapp-float', 'back-to-top'):
    if required not in script_check:
        errors.append(f'script.js lost required behaviour: {required}')

for file_path in [*html_pages, ROOT / 'script.js', ROOT / 'styles.css', ROOT / 'responsive.css', ROOT / 'design-system.css']:
    if 'http://' in file_path.read_text(encoding='utf-8', errors='ignore'):
        errors.append(f'{file_path}: insecure http:// resource found')

if errors:
    raise SystemExit('\n'.join(errors))

print(f'Updated {len(changed)} files:')
for item in changed:
    print(f'  - {item}')
print(f'Validated {len(html_pages)} HTML pages and required JavaScript behaviours.')

# Remove one-time automation files from the final website commit.
workflow_path = ROOT / '.github/workflows/phase1-website.yml'
helper_path = ROOT / '.github/scripts/phase1_update.py'
if workflow_path.exists():
    workflow_path.unlink()
if helper_path.exists():
    helper_path.unlink()
