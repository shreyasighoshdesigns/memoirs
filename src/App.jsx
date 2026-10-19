import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { themeVars } from './theme.js';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Problem from './sections/Problem.jsx';
import Benchmark from './sections/Benchmark.jsx';
import CoreProblem from './sections/CoreProblem.jsx';
import Personas from './sections/Personas.jsx';
import Journey from './sections/Journey.jsx';
import AskFlow from './sections/AskFlow.jsx';
import ShareFlow from './sections/ShareFlow.jsx';
import EdgeCases from './sections/EdgeCases.jsx';
import Tradeoffs from './sections/Tradeoffs.jsx';
import HowIUsedAI from './sections/HowIUsedAI.jsx';
import Footer from './sections/Footer.jsx';

// Section ids in page order, and the nav chapter each one belongs to.
const SECTIONS = [
  'overview',
  'problem',
  'benchmark',
  'core',
  'personas',
  'journey',
  'ask',
  'share',
  'edge',
  'tradeoffs',
  'ai',
];
const CHAPTER_OF = {
  overview: 'overview',
  problem: 'problem',
  benchmark: 'research',
  core: 'research',
  personas: 'users',
  journey: 'users',
  ask: 'design',
  share: 'design',
  edge: 'edge',
  tradeoffs: 'tradeoffs',
  ai: 'ai',
};
const CHAPTERS = ['overview', 'problem', 'research', 'users', 'design', 'edge', 'tradeoffs', 'ai'];
// Sections with a dark background switch the sticky header to its dark tone.
const DARK_SECTIONS = new Set(['overview', 'journey', 'tradeoffs']);
const RAILS = ['ask', 'share', 'edgeA', 'edgeB'];

const headerHeight = () => document.getElementById('cs-header')?.getBoundingClientRect().height ?? 64;
const scrollBehavior = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

// Keep the active nav pill visible when the nav scrolls sideways (mobile).
function revealPill(chapter) {
  const scroller = document.getElementById('cs-nav');
  const pill = document.getElementById('nav-' + chapter);
  if (!scroller || !pill || scroller.scrollWidth <= scroller.clientWidth + 1) return;
  const left = pill.offsetLeft - (scroller.clientWidth - pill.offsetWidth) / 2;
  scroller.scrollTo({ left: Math.max(0, left), behavior: scrollBehavior() });
}

export default function App() {
  const [active, setActive] = useState('overview');
  const [tone, setTone] = useState('dark');
  const activeRef = useRef('overview');
  const toneRef = useRef('dark');
  const auto = useRef(false); // true while a nav click is smooth-scrolling
  const idle = useRef(null);
  const raf = useRef(0);

  // Scroll-spy: highlight the chapter in view and match the header tone to the section under it.
  useEffect(() => {
    const sync = () => {
      const headerH = headerHeight();
      const probe = headerH + Math.min(240, window.innerHeight * 0.3);
      let under = SECTIONS[0];
      let current = SECTIONS[0];
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top <= headerH + 1) under = id;
        if (top <= probe) current = id;
      });
      const doc = document.documentElement;
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        current = SECTIONS[SECTIONS.length - 1];
      }
      const nextTone = DARK_SECTIONS.has(under) ? 'dark' : 'light';
      if (nextTone !== toneRef.current) {
        toneRef.current = nextTone;
        setTone(nextTone);
      }
      if (!auto.current && current !== activeRef.current) {
        activeRef.current = current;
        setActive(current);
        revealPill(CHAPTER_OF[current]);
      }
    };
    const onScroll = () => {
      if (auto.current) {
        clearTimeout(idle.current);
        idle.current = setTimeout(() => {
          auto.current = false;
        }, 160);
      }
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        sync();
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
      clearTimeout(idle.current);
    };
  }, []);

  // Smooth-scroll to a section, landing just under the sticky header.
  const goTo = useCallback((e, id) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      id === SECTIONS[0] ? 0 : Math.max(0, window.scrollY + el.getBoundingClientRect().top - headerHeight() + 1);
    auto.current = true;
    clearTimeout(idle.current);
    idle.current = setTimeout(() => {
      auto.current = false;
    }, 1000);
    window.scrollTo({ top, behavior: scrollBehavior() });
    activeRef.current = id;
    setActive(id);
    revealPill(CHAPTER_OF[id]);
  }, []);

  const go = useMemo(() => Object.fromEntries(SECTIONS.map((id) => [id, (e) => goTo(e, id)])), [goTo]);

  const rail = useMemo(() => {
    const scrollRail = (name, dir) => {
      const el = document.getElementById('rail-' + name);
      if (!el) return;
      el.scrollBy({ left: dir * Math.max(200, el.clientWidth * 0.9), behavior: scrollBehavior() });
    };
    return Object.fromEntries(
      RAILS.map((name) => [name, { prev: () => scrollRail(name, -1), next: () => scrollRail(name, 1) }]),
    );
  }, []);

  const chapter = CHAPTER_OF[active] ?? 'overview';
  const cur = Object.fromEntries(CHAPTERS.map((c) => [c, c === chapter ? 'location' : undefined]));

  return (
    <div className="cs" style={themeVars}>
      <Header cur={cur} go={go} tone={tone} />
      <main>
        <Hero go={go} />
        <Problem />
        <Benchmark />
        <CoreProblem />
        <Personas />
        <Journey go={go} />
        <AskFlow rail={rail} />
        <ShareFlow rail={rail} />
        <EdgeCases rail={rail} />
        <Tradeoffs />
        <HowIUsedAI />
      </main>
      <Footer go={go} />
    </div>
  );
}
