'use client';

import { useState } from 'react';
import { ArrowIcon, PageCTA, PageHero, PageShell, SectionHeading } from '../../components/SiteChrome';

type Category = 'all' | 'network' | 'developer' | 'community';
const projects = [
  ['Kanari SDK', 'Developer tools and examples for building with the Kanari network.', 'developer', 'https://github.com/kanari-network/kanari-sdk'],
  ['Move guides', 'Practical documentation for writing and understanding Move modules.', 'developer', 'https://movekanari.netlify.app/'],
  ['Network docs', 'Core concepts, API references, and getting-started material.', 'network', 'https://docs.kanarinetwork.site/'],
  ['Whitepaper', 'The ideas and technical direction behind the Kanari network.', 'network', 'https://whitepaperkanari.netlify.app/'],
  ['Community hub', 'Find updates and ways to contribute to the project.', 'community', '/connect/community'],
] as const;

export default function EcosystemHub() {
  const [active, setActive] = useState<Category>('all');
  const filtered = active === 'all' ? projects : projects.filter((project) => project[2] === active);

  return (
    <PageShell>
      <PageHero kicker="Ecosystem" title="Explore the tools." accent="Find your way in." description="Kanari is an evolving collection of open resources, network tools, and community touchpoints for people building what comes next." />
      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Directory" title="A network you can explore." description="Filter by area and open the resource that helps with your next step." />
        <div className="filter-bar">
          {(['all', 'network', 'developer', 'community'] as Category[]).map((filter) => (
            <button className={`filter-pill ${active === filter ? 'filter-pill--active' : ''}`} onClick={() => setActive(filter)} key={filter}>{filter}</button>
          ))}
        </div>
        <div className="resource-grid">
          {filtered.map(([title, description, category, href], index) => (
            <article className={`resource-card ${index === 1 ? 'dark-card' : ''}`} key={title}>
              <span className="resource-card__index">{category}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>Open resource <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="subpage-section subpage-section--tint">
        <div className="section-wrap">
          <SectionHeading kicker="02 / Build" title="Start with the foundation." description="The network is designed to make the path from exploration to implementation feel direct." />
          <div className="stat-grid">
            {[['Move', 'Smart contracts'], ['Open', 'Source code'], ['Clear', 'Documentation'], ['Ready', 'For testnet']].map(([value, label]) => (
              <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA kicker="Your project" title="Add something new to the network." description="Use the docs and SDK to turn an idea into your first Kanari project." href="https://docs.kanarinetwork.site/" label="Start building" />
    </PageShell>
  );
}
