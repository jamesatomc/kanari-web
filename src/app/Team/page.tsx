import Image from 'next/image';
import { PageCTA, PageHero, PageShell, SectionHeading } from '../components/SiteChrome';

export default function Team() {
  return (
    <PageShell>
      <PageHero kicker="Our team" title="Small team." accent="Big direction." description="Kanari is built by people who believe open infrastructure should feel understandable, useful, and genuinely yours." />
      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Core team" title="Building with intention." description="The people shaping the network and its developer experience." />
        <article className="person-card">
          <div className="person-card__image"><Image src="/jamesatomc.png" alt="James Atomc" fill sizes="(max-width: 540px) 100vw, 250px" /></div>
          <div className="person-card__copy">
            <h3>James Atomc</h3>
            <h4>Co-Founder & Lead Developer</h4>
            <p>Blockchain builder and software architect focused on practical decentralized systems. James leads the technical direction of Kanari and the tools developers use to build on it.</p>
            <div className="tag-list">
              {['Blockchain', 'Move', 'Smart contracts', 'Full stack'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
            </div>
            <div className="social-list">
              <a href="https://github.com/jamesatomc" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://twitter.com/jamesatomc" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://linkedin.com/in/jamesatomc" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </article>
      </section>
      <PageCTA kicker="Work with us" title="Help shape what comes next." description="We are building an open network with a clear point of view. Say hello if that sounds like your kind of work." href="mailto:hello@kanarinetwork.site?subject=Kanari%20Team%20Inquiry" label="Contact us" />
    </PageShell>
  );
}
