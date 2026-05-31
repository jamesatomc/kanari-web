'use client';

import { Icons } from '../components/IconLibrary';
import { ArrowIcon, PageCTA, PageHero, PageShell, SectionHeading } from '../components/SiteChrome';
import { getResourcesByCategory } from '../data/developerResources';

export default function DeveloperPortal() {
  const quickStart = getResourcesByCategory('quick-start');
  const popular = getResourcesByCategory('popular');

  return (
    <PageShell>
      <PageHero
        kicker="Developer portal"
        title="Tools for ideas"
        accent="that move."
        description="Build secure digital assets with Move, Kanari SDKs, and practical guides designed to get you from first commit to testnet."
      >
        <a className="button button--dark" href="https://docs.kanarinetwork.site/" target="_blank" rel="noreferrer">Read the docs <ArrowIcon /></a>
        <a className="button button--ghost" href="https://github.com/kanari-network" target="_blank" rel="noreferrer">Explore GitHub <ArrowIcon /></a>
      </PageHero>

      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Start here" title="Build your first project." description="The essentials for exploring the network and setting up your workspace." />
        <div className="resource-grid">
          {quickStart.map((resource, index) => {
            const Icon = Icons[resource.icon as keyof typeof Icons] || Icons.document;
            return (
              <article className="resource-card" key={resource.id}>
                <span className="resource-card__index">0{index + 1}</span>
                <div className="resource-card__icon"><Icon /></div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.url} target="_blank" rel="noreferrer">Open resource <ArrowIcon /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="subpage-section subpage-section--tint">
        <div className="section-wrap">
          <SectionHeading kicker="02 / Keep building" title="Go deeper with the network." description="Technical references for your next integration." />
          <div className="resource-grid">
            {popular.map((resource, index) => {
              const Icon = Icons[resource.icon as keyof typeof Icons] || Icons.document;
              return (
                <article className={`resource-card ${index === 0 ? 'dark-card' : ''}`} key={resource.id}>
                  <span className="resource-card__index">0{index + 1}</span>
                  <div className="resource-card__icon"><Icon /></div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <a href={resource.url} target="_blank" rel="noreferrer">Open resource <ArrowIcon /></a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PageCTA kicker="Developer community" title="Bring your next idea on-chain." description="Join testnet, explore the SDK, and start building with the Kanari community." href="https://gg1ycocxact.typeform.com/to/ITdq2wel" label="Join testnet" />
    </PageShell>
  );
}
