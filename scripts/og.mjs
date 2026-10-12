// Renders public/og.png (1200x630 social card). Run: bun scripts/og.mjs
import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#07090d"/>
  <g stroke="#1b212b" stroke-width="1">
    ${Array.from({ length: 19 }, (_, i) => `<path d="M${(i + 1) * 60} 0V630"/>`).join("")}
    ${Array.from({ length: 10 }, (_, i) => `<path d="M0 ${(i + 1) * 60}H1200"/>`).join("")}
  </g>
  <g font-family="Menlo,ui-monospace,monospace">
    <text x="80" y="120" font-size="28" fill="#c6ff3d">~/hishivam.com</text>
    <text x="80" y="300" font-family="Helvetica Neue,Arial,sans-serif" font-size="150" font-weight="700" fill="#f2f5f9" letter-spacing="-6">Hi, I'm Shivam<tspan fill="#c6ff3d">.</tspan></text>
    <text x="80" y="400" font-family="Helvetica Neue,Arial,sans-serif" font-size="56" font-weight="600" fill="#f2f5f9">Shivam Shukla</text>
    <text x="80" y="470" font-size="32" fill="#8b95a5">Backend &amp; AI Engineer · REST APIs · LLMs · Cloud</text>
    <text x="80" y="560" font-size="26" fill="#c6ff3d">[200 OK] <tspan fill="#8b95a5">available for new projects</tspan></text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
