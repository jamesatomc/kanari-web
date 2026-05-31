import Link from 'next/link';
import { ArrowIcon, PageCTA, PageHero, PageShell, SectionHeading } from '../components/SiteChrome';

const pillars = [
  ['01', 'Education', 'Make digital ownership and open technology easier to understand, learn, and teach.', '/DeveloperPortal'],
  ['02', 'Innovation', 'Support practical experiments that turn decentralized technology into useful products.', '/connect/ecosystem'],
  ['03', 'Community', 'Create space for builders and contributors to shape the network together.', '/connect/community'],
];

export default function KanariFoundation() {
  return (
    <PageShell>
      <PageHero kicker="Kanari Foundation" title="Open technology." accent="Shared progress." description="The Kanari Foundation supports education, experimentation, and community-led work around open digital infrastructure.">
        <a className="button button--dark" href="mailto:hello@kanarinetwork.site?subject=Kanari%20Foundation%20Inquiry" target="_blank" rel="noreferrer">Start a conversation <ArrowIcon /></a>
      </PageHero>
      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Our focus" title="Progress that includes people." description="The foundation concentrates on the parts of the ecosystem that make long-term participation possible." />
        <div className="resource-grid">
          {pillars.map(([index, title, description, href], cardIndex) => (
            <Link className={`resource-card ${cardIndex === 1 ? 'dark-card' : ''}`} href={href} key={index}>
              <span className="resource-card__index">{index}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="text-link">Learn more <ArrowIcon /></span>
            </Link>
          ))}
        </div>
      </section>
      <section className="subpage-section subpage-section--tint">
        <div className="section-wrap">
          <SectionHeading kicker="02 / Direction" title="Built for the long term." description="Healthy infrastructure grows through clear principles and steady collaboration." />
          <div className="stat-grid">
            {[['Open', 'Participation'], ['Useful', 'Experiments'], ['Clear', 'Education'], ['Shared', 'Direction']].map(([value, label]) => (
              <div className="stat-card" key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </div>
      </section>
      <PageCTA kicker="Collaborate" title="Have an idea worth exploring?" description="Talk with the foundation about education, events, or community initiatives around Kanari." href="mailto:hello@kanarinetwork.site?subject=Kanari%20Foundation%20Inquiry" label="Contact the foundation" />
    </PageShell>
  );
}
