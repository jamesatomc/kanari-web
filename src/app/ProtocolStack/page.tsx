import { ArrowIcon, PageHero, PageShell } from '../components/SiteChrome';
import { ProtocolStackExplorer } from '../components/ProtocolStackExplorer';

export default function ProtocolStackPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Protocol stack"
        title="Kanari layers"
        accent="at a glance."
        description="Explore the layered architecture behind Kanari SDK: apps, JSON-RPC, validator nodes, core checkpoints, Move execution, Mysticeti DAG metadata, and persistent state roots."
      >
        <a className="button button--dark" href="https://docs.kanarinetwork.site/" target="_blank" rel="noreferrer">
          Read the docs <ArrowIcon />
        </a>
      </PageHero>
      <ProtocolStackExplorer />
    </PageShell>
  );
}
