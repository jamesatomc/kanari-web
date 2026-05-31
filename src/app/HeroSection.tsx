'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useEffect } from 'react';
import { ArrowIcon, SiteFooter, SiteHeader } from './components/SiteChrome';
import LatestUpdates from './Section/LatestUpdates';
import { NewsletterSection } from './Section/NewsletterSection';
import { OfficialChannels } from './Section/OfficialChannels';
import { RoadmapSection } from './Section/RoadmapSection';
import { VCSection } from './Section/VCSection';

const features = [
  {
    index: '01',
    title: 'Own your digital assets.',
    description: 'Move-powered ownership gives every asset a clear, verifiable history without hidden intermediaries.',
    className: 'feature-card--lime',
    graphic: 'ownership',
    href: '/connect/ecosystem',
  },
  {
    index: '02',
    title: 'Build with confidence.',
    description: 'A developer-first SDK and secure smart contracts make shipping on Kanari fast, clear, and composable.',
    className: 'feature-card--dark',
    graphic: 'build',
    href: '/DeveloperPortal',
  },
  {
    index: '03',
    title: 'Connect without limits.',
    description: 'Create products that move naturally across an open network designed for people, teams, and ideas.',
    className: 'feature-card--lavender',
    graphic: 'connect',
    href: '/connect/community',
  },
];

const steps = [
  ['01', 'Explore', 'Read the docs and find the building blocks for your idea.', '/connect/ecosystem'],
  ['02', 'Create', 'Use Move and the Kanari SDK to shape your product.', '/DeveloperPortal'],
  ['03', 'Launch', 'Join testnet and bring your next project on-chain.', 'https://gg1ycocxact.typeform.com/to/ITdq2wel'],
];

function ScrollMotionController() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    let animationFrame = 0;
    const updateScrollVars = () => {
      const heroProgress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 1);
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY.toFixed(2)}px`);
      document.documentElement.style.setProperty('--hero-progress', heroProgress.toFixed(3));
      animationFrame = 0;
    };

    const onScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateScrollVars);
      }
    };

    updateScrollVars();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return null;
}

function NetworkGraphic() {
  return (
    <div className="network-graphic" aria-hidden="true">
      <div className="network-orbit network-orbit--one" />
      <div className="network-orbit network-orbit--two" />
      <div className="network-orbit network-orbit--three" />
      <div className="network-core">
        <Image src="/kariicon1.png" alt="" width={92} height={92} priority />
      </div>
      <span className="network-node network-node--one">01</span>
      <span className="network-node network-node--two">K</span>
      <span className="network-node network-node--three">+</span>
      <span className="network-node network-node--four">M</span>
      <span className="network-spark network-spark--one" />
      <span className="network-spark network-spark--two" />
      <span className="network-spark network-spark--three" />
    </div>
  );
}

function FeatureGraphic({ type }: { type: string }) {
  if (type === 'ownership') {
    return (
      <div className="ownership-graphic" aria-hidden="true">
        <span className="ownership-ring ownership-ring--outer" />
        <span className="ownership-ring ownership-ring--inner" />
        <span className="ownership-dot ownership-dot--one" />
        <span className="ownership-dot ownership-dot--two" />
        <span className="ownership-dot ownership-dot--three" />
        <span className="ownership-letter">K</span>
      </div>
    );
  }

  if (type === 'build') {
    return (
      <div className="build-graphic" aria-hidden="true">
        <span>{'module kanari::future {'}</span>
        <span className="build-indent">use move::ideas;</span>
        <span className="build-indent build-accent">public fun create() {'{'}</span>
        <span className="build-indent-two">launch(network);</span>
        <span className="build-indent">{'}'}</span>
        <span>{'}'}</span>
      </div>
    );
  }

  return (
    <div className="connect-graphic" aria-hidden="true">
      <span className="connect-line connect-line--one" />
      <span className="connect-line connect-line--two" />
      <span className="connect-line connect-line--three" />
      <span className="connect-dot connect-dot--one">K</span>
      <span className="connect-dot connect-dot--two" />
      <span className="connect-dot connect-dot--three" />
      <span className="connect-dot connect-dot--four" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <main className="site-shell">
      <ScrollMotionController />
      <div className="site-noise" />
      <SiteHeader />

      <section className="hero-section">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow"><span /> A network for what&apos;s next</p>
          <h1>
            Build freely.<br />
            <span>Own everything.</span>
          </h1>
          <p className="hero-description">
            Kanari is a community-powered blockchain for the next generation of digital ownership.
            Simple to build on. Open to everyone.
          </p>
          <div className="hero-actions">
            <a className="button button--dark" href="https://gg1ycocxact.typeform.com/to/ITdq2wel" target="_blank" rel="noreferrer">
              Join testnet <ArrowIcon />
            </a>
            <Link className="button button--ghost" href="/DeveloperPortal">
              Start building <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="hero-visual" data-reveal style={{ '--reveal-delay': '110ms' } as CSSProperties}>
          <div className="hero-sticker hero-sticker--top">MOVE<br />POWERED</div>
          <NetworkGraphic />
          <div className="hero-sticker hero-sticker--bottom">OPEN<br />NETWORK</div>
        </div>
      </section>

      <section className="ticker" aria-label="Kanari highlights">
        <div className="ticker-track">
          <span>COMMUNITY POWERED</span><b>+</b>
          <span>MOVE SECURED</span><b>+</b>
          <span>OPEN BY DESIGN</span><b>+</b>
          <span>BUILD WHAT&apos;S NEXT</span><b>+</b>
          <span>COMMUNITY POWERED</span><b>+</b>
          <span>MOVE SECURED</span><b>+</b>
        </div>
      </section>

      <section className="intro-section section-wrap" id="network" data-reveal>
        <p className="section-kicker">WHY KANARI</p>
        <div>
          <h2>A more open way<br />to move forward.</h2>
          <p>
            The internet should give people more control, not less. Kanari combines transparent
            infrastructure with an approachable developer experience so ownership stays where it belongs.
          </p>
        </div>
      </section>

      <section className="feature-grid section-wrap" data-reveal>
        {features.map((feature, index) => (
          <Link
            className={`feature-card ${feature.className}`}
            href={feature.href}
            key={feature.index}
            data-reveal
            style={{ '--reveal-delay': `${index * 85}ms` } as CSSProperties}
          >
            <div className="feature-card__top">
              <span>{feature.index}</span>
              <span>+</span>
            </div>
            <FeatureGraphic type={feature.graphic} />
            <div className="feature-card__copy">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="developer-section section-wrap" id="developers" data-reveal>
        <div className="developer-panel">
          <div className="developer-copy">
            <p className="section-kicker">FOR DEVELOPERS</p>
            <h2>Ideas move<br />faster here.</h2>
            <p>
              Start with familiar tools, clear documentation, and a Move-powered foundation built for
              secure digital assets.
            </p>
            <Link className="button button--light" href="/DeveloperPortal">Explore developer portal <ArrowIcon /></Link>
          </div>
          <div className="developer-terminal" aria-label="Move code example">
            <div className="terminal-top"><i /><i /><i /><span>kanari.move</span></div>
            <pre><code><em>module</em> kanari::hello {'{'}{'\n'}
              <em>public fun</em> build_future() {'{'}{'\n'}
              <strong>move_to</strong>(community, idea);{'\n'}
              {'}'}{'\n'}
              {'}'}</code></pre>
            <div className="terminal-status"><span /> ready to build</div>
          </div>
        </div>
      </section>

      <section className="steps-section section-wrap" id="start" data-reveal>
        <div className="steps-heading">
          <p className="section-kicker">GET STARTED</p>
          <h2>From idea to<br />network in three.</h2>
        </div>
        <div className="steps-list">
          {steps.map(([number, title, description, href], index) => (
            <a
              className="step-row"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              key={number}
              data-reveal
              style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
            >
              <span className="step-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="step-arrow"><ArrowIcon /></span>
            </a>
          ))}
        </div>
      </section>

      <RoadmapSection />
      <VCSection />
      <LatestUpdates />
      <OfficialChannels />
      <NewsletterSection />

      <section className="cta-section section-wrap" data-reveal>
        <div className="cta-card">
          <p className="section-kicker">KANARI NETWORK</p>
          <h2>Ready to build<br /><span>something yours?</span></h2>
          <a className="button button--dark" href="https://gg1ycocxact.typeform.com/to/ITdq2wel" target="_blank" rel="noreferrer">
            Join the testnet <ArrowIcon />
          </a>
          <div className="cta-orb cta-orb--one" />
          <div className="cta-orb cta-orb--two" />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
