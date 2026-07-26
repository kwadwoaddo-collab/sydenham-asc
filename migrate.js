const fs = require('fs');
const path = require('path');

const srcDir = '.astro_backup/src/pages';
const destDir = 'app';
const files = ['about.astro', 'tuition.astro', 'after-school-club.astro', 'join-us.astro', 'thankyou.astro'];

const icons = {
  bus: '🚌', clock: '⏰', shield: '🛡️', book: '📚', star: '⭐', pound: '£', smile: '😊',
  check: '✅', pin: '📍', mail: '✉️', phone: '📱', chat: '💬', sparkle: '✨', puzzle: '🧩', user: '👤'
};

for (const file of files) {
  const filePath = path.join(srcDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const titleMatch = content.match(/title="([^"]+)"/);
  const descMatch = content.match(/description="([^"]+)"/);
  
  const title = titleMatch ? titleMatch[1] : 'Sydenham After School Club';
  const desc = descMatch ? descMatch[1] : '';
  
  const bodyMatch = content.match(/<Layout[^>]*>([\s\S]*?)<\/Layout>/);
  let body = bodyMatch ? bodyMatch[1] : content;
  
  // Convert class to className
  body = body.replace(/class=/g, 'className=');
  
  // Replace Astro Icons
  body = body.replace(/<Icon name="([^"]+)"[^>]*\/>/g, (match, name) => {
    return `<span className="ic">${icons[name] || '•'}</span>`;
  });
  
  // Convert inline styles to objects
  body = body.replace(/style="([^"]+)"/g, (match, styleString) => {
    const parts = styleString.split(';').filter(Boolean);
    const styleObj = {};
    for (const part of parts) {
      if (part.indexOf(':') === -1) continue;
      let [k, ...vParts] = part.split(':');
      let v = vParts.join(':');
      if (k && v) {
        k = k.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
        styleObj[k] = v.trim();
      }
    }
    return `style={${JSON.stringify(styleObj)}}`;
  });
  
  // Fix unclosed tags (img, input, br, hr)
  body = body.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  // Specific fix for HTML attributes in React
  body = body.replace(/for=/g, 'htmlFor=');
  body = body.replace(/autocomplete=/g, 'autoComplete=');
  body = body.replace(/required/g, 'required={true}');
  body = body.replace(/disabled/g, 'disabled={true}');
  body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  if (file === 'thankyou.astro') {
    body += `
      <section className="section section-soft">
        <div className="container center">
          <h2>Next Steps</h2>
          <p style={{ marginTop: '16px', fontSize: '1.1rem' }}>
            While we review your enquiry, please take a moment to review our <br/><br/>
            <a href="/faq" className="btn btn-outline" style={{ marginRight: '12px' }}>FAQs</a> 
            <a href="/handbook.pdf" className="btn btn-outline">Parent Handbook</a>
          </p>
        </div>
      </section>
    `;
  }
  
  const pageName = file.replace('.astro', '');
  const dirPath = path.join(destDir, pageName);
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
  
  const out = `
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(desc)},
};

export default function Page() {
  return (
    <>
      ${body}
    </>
  );
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), out);
  console.log(`Migrated ${file}`);
}
