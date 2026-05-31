import type { CSSProperties } from 'react';
import { ArrowIcon, SectionHeading } from '../components/SiteChrome';

const updates = [
  {
    category: 'SDK DESIGN',
    title: 'Inside the Kanari SDK',
    description: 'A map of the Rust workspace, Move runtime, DAG engine, RPC layers, and developer entry points.',
    date: '31 MAY 2026',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Design',
  },
  {
    category: 'SDK GUIDE',
    title: 'Building with KanariClient',
    description: 'Use the Flutter and Dart facade for queries, signed transactions, and Move function calls.',
    date: '31 MAY 2026',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Implementation',
  },
  {
    category: 'ARCHITECTURE',
    title: 'Kanari DAG Architecture',
    description: 'Follow a signed transaction through DAG vertices, quorum decisions, checkpoints, canonical replay, and persistence.',
    date: '31 MAY 2026',
    href: 'https://blog.kanarinetwork.site/Architecture',
  },
  {
    category: 'CONSENSUS',
    title: 'DAG Consensus Layers',
    description: 'Understand how application logic, DAG execution, committee decisions, data availability, persistence, and sync fit together.',
    date: '31 MAY 2026',
    href: 'https://blog.kanarinetwork.site/DAG_Consensus_Layers',
  },
];

export function LatestUpdates() {
  const [featuredUpdate, ...moreUpdates] = updates.slice(0, 4);

  return (
    <section className="home-section home-section--tint" id="updates" data-reveal>
      <div className="section-wrap">
        <div className="updates-heading">
          <SectionHeading kicker="Latest updates" title="Notes from the network." description="Follow product thinking, technical progress, and ideas from the Kanari ecosystem." />
          <a className="text-link" href="https://blog.kanarinetwork.site/" target="_blank" rel="noreferrer">View all updates <ArrowIcon /></a>
        </div>
        <div className="updates-layout">
          <a className="update-featured" href={featuredUpdate.href} target="_blank" rel="noreferrer" data-reveal>
            <div className="update-featured__visual" aria-hidden="true">
              <span className="update-orbit update-orbit--one" />
              <span className="update-orbit update-orbit--two" />
              <span className="update-node update-node--core">K</span>
              <span className="update-node update-node--one">SDK</span>
              <span className="update-node update-node--two">DAG</span>
              <span className="update-node update-node--three">RPC</span>
              <span className="update-line update-line--one" />
              <span className="update-line update-line--two" />
              <span className="update-code update-code--one">move_to(owner, asset)</span>
              <span className="update-code update-code--two">quorum::commit(vertex)</span>
            </div>
            <div className="update-featured__copy">
              <span>{featuredUpdate.category} / {featuredUpdate.date}</span>
              <h3>{featuredUpdate.title}</h3>
              <p>{featuredUpdate.description}</p>
              <strong>Read article <ArrowIcon /></strong>
            </div>
          </a>
          <div className="updates-list">
            {moreUpdates.map((update, index) => (
              <a
                className="update-compact"
                href={update.href}
                target="_blank"
                rel="noreferrer"
                key={`${update.href}-${index}`}
                data-reveal
                style={{ '--reveal-delay': `${(index + 1) * 75}ms` } as CSSProperties}
              >
                <span>0{index + 2}</span>
                <div>
                  <small>{update.category} / {update.date}</small>
                  <h3>{update.title}</h3>
                </div>
                <strong><ArrowIcon /></strong>
              </a>
            ))}
            {moreUpdates.length === 0 && (
              <a className="updates-more" href="https://blog.kanarinetwork.site/" target="_blank" rel="noreferrer">
                More network notes are on the way. <strong>Visit the blog <ArrowIcon /></strong>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestUpdates;
