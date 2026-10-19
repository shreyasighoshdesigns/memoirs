// Brand accent. Change ACCENT and every derived tint, glow and SVG mark follows.
export const ACCENT = '#4A3FA2';

function mix(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const channel = (n, shift) => (n >> shift) & 255;
  const blend = (shift) => Math.round(channel(pa, shift) * t + channel(pb, shift) * (1 - t));
  const toHex = (n) => n.toString(16).padStart(2, '0');
  return '#' + toHex(blend(16)) + toHex(blend(8)) + toHex(blend(0));
}

function rgba(hex, alpha) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

const glow = (alpha) => `radial-gradient(closest-side, ${rgba(ACCENT, alpha)}, ${rgba(ACCENT, 0)})`;

export const theme = {
  accent: ACCENT,
  accentSoft: mix(ACCENT, '#FFFFFF', 0.1),
  accentLight: mix(ACCENT, '#FFFFFF', 0.5),
  glowA: glow(0.62),
  glowB: glow(0.34),
  glowL: glow(0.16),
};

// CSS custom properties set on the page root (read by styles.css).
export const themeVars = {
  '--accent': theme.accent,
  '--accent-soft': theme.accentSoft,
  '--accent-light': theme.accentLight,
  '--glow-a': theme.glowA,
  '--glow-b': theme.glowB,
  '--glow-l': theme.glowL,
};
