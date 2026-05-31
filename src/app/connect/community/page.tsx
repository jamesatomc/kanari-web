import { ArrowIcon, PageCTA, PageHero, PageShell, SectionHeading } from '../../components/SiteChrome';

const channels = [
  ['01', 'GitHub', 'Follow the code, open issues, and contribute to the SDK.', 'https://github.com/kanari-network'],
  ['02', 'Bluesky', 'Keep up with network notes, updates, and community news.', 'https://bsky.app/profile/kanarinetwork.bsky.social'],
  ['03', 'Developer docs', 'Explore technical guides and start building on Kanari.', 'https://docs.kanarinetwork.site/'],
];

export default function CommunityHub() {
  return (
    <PageShell>
      <PageHero kicker="Community" title="An open network" accent="needs open doors." description="Follow the work, share an idea, or start building. Kanari grows through the people who participate in it." />
      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Find your place" title="Connect where it matters." description="Choose the channel that matches what you want to do next." />
        <div className="resource-grid">
          {channels.map(([index, title, description, href], cardIndex) => (
            <article className={`resource-card ${cardIndex === 1 ? 'dark-card' : ''}`} key={title}>
              <span className="resource-card__index">{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={href} target="_blank" rel="noreferrer">Visit channel <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="subpage-section subpage-section--tint">
        <div className="section-wrap">
          <SectionHeading kicker="02 / Participate" title="There is more than one way in." description="Contribute code, improve documentation, test a feature, or simply ask a useful question." />
          <div className="stat-grid">
            {[['Build', 'With the SDK'], ['Learn', 'From the docs'], ['Test', 'On testnet'], ['Share', 'Your feedback']].map(([value, label]) => (
              <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA kicker="Start building" title="Your next contribution can start small." description="Explore the documentation and bring your first project to Kanari testnet." href="https://docs.kanarinetwork.site/" label="Read the docs" />
    </PageShell>
  );
}
