import type { CSSProperties } from 'react';
import { ArrowIcon, SectionHeading } from '../components/SiteChrome';

const roadmap = [
  ['01', 'Foundation', 'Complete', 'Core protocol, Move foundations, and the first developer-facing tools.'],
  ['02', 'Testnet', 'In progress', 'Network testing, clearer documentation, and ecosystem feedback loops.'],
  ['03', 'Expansion', 'Next', 'Broader participation, deeper integrations, and community-led direction.'],
];

export function RoadmapSection() {
  return (
    <section className="home-section section-wrap" id="roadmap" data-reveal>
      <SectionHeading kicker="Roadmap" title="Built in clear steps." description="A practical path from strong foundations to a network shaped by its community." />
      <div className="home-roadmap">
        {roadmap.map(([number, title, status, description], index) => (
          <article className="home-roadmap__item" key={number} data-reveal style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}>
            <span>{number}</span>
            <small>{status}</small>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <a className="text-link" href="https://docs.kanarinetwork.site/" target="_blank" rel="noreferrer">Explore the docs <ArrowIcon /></a>
    </section>
  );
}

export default RoadmapSection;
