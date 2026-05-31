import { ArrowIcon, SectionHeading } from '../components/SiteChrome';
import './VCSection.css';

const partnershipAreas = [
  {
    index: '01',
    title: 'Long-term capital',
    description: 'For partners who see open digital ownership as infrastructure worth building with patience.',
  },
  {
    index: '02',
    title: 'Ecosystem reach',
    description: 'For teams that can connect builders, products, and communities around useful on-chain experiences.',
  },
  {
    index: '03',
    title: 'Technical perspective',
    description: 'For collaborators who bring grounded feedback on protocols, tooling, security, and adoption.',
  },
];

export function VCSection() {
  return (
    <section className="vc-section section-wrap" id="partnerships">
      <div className="vc-section__heading">
        <SectionHeading
          kicker="Venture & partnerships"
          title="Build the ownership layer with us."
          description="Kanari welcomes conversations with investors and strategic partners who share a long-term view of open infrastructure."
        />
        <a className="button button--dark" href="mailto:hello@kanarinetwork.site?subject=Kanari%20Partnership" target="_blank" rel="noreferrer">
          Start a conversation <ArrowIcon />
        </a>
      </div>

      <div className="vc-panel">
        <div className="vc-panel__statement">
          <span>PARTNER WITH KANARI</span>
          <h3>More than capital.<br /><em>Shared direction.</em></h3>
          <p>Strong networks are shaped by people who contribute more than a logo. We are looking for partners who can help Kanari grow with clarity.</p>
          <a href="https://whitepaperkanari.netlify.app/" target="_blank" rel="noreferrer">Read the whitepaper <ArrowIcon /></a>
        </div>
        <div className="vc-panel__visual" aria-hidden="true">
          <i className="vc-orbit vc-orbit--outer" />
          <i className="vc-orbit vc-orbit--inner" />
          <span className="vc-core">K</span>
          <span className="vc-point vc-point--one">+</span>
          <span className="vc-point vc-point--two">01</span>
          <span className="vc-point vc-point--three">M</span>
        </div>
      </div>

      <div className="vc-area-grid">
        {partnershipAreas.map((area) => (
          <article className="vc-area-card" key={area.index}>
            <span>{area.index}</span>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VCSection;
