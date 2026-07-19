'use client';

import type { CSSProperties } from 'react';
import { useEffect, useId, useState } from 'react';

const protocolStats = [
  ['TX driven', 'Idle nodes do not create new checkpoints or height.'],
  ['Mysticeti DAG', 'Consensus metadata is stored, deduplicated, and synced.'],
  ['Move runtime', 'Object changes, gas, events, and state roots are deterministic.'],
  ['RPC gateway', 'Clients can spread traffic across readable nodes.'],
];

const architectureLayers = [
  ['01', 'Apps', 'Explorer, CLI, wallet SDK, Kanari Pay, and ecosystem frontends.'],
  ['02', 'RPC', 'Axum JSON-RPC server, shared API types, per-client safety controls.'],
  ['03', 'Node', 'libp2p gossip, checkpoint sync, validator backup, and runtime config.'],
  ['04', 'Core', 'Verified mempool, checkpoint builder, Mysticeti DAG integration, indexes.'],
  ['05', 'Execution', 'Move VM runtime, scheduler, native functions, framework modules.'],
  ['06', 'State', 'RocksDB stores, Sparse Merkle Tree roots, object and transaction history.'],
];

const mermaidDiagram = `flowchart TB
    subgraph L0["Application Layer"]
        EXPLORER["kanariexplorer"]
        CLI["kanari CLI"]
        PAY["sdk/kanari_pay"]
        WALLET["sdk/wallet"]
    end

    subgraph L1["RPC / API Layer"]
        RPC_CLIENT["kanari-rpc-client"]
        RPC_API["kanari-rpc-api<br/>methods + response types"]
        RPC_SERVER["kanari-rpc-server<br/>Axum JSON-RPC"]
    end

    subgraph L2["Node Layer"]
        NODE["kanari-node"]
        P2P["libp2p gossip<br/>transactions + checkpoints"]
        SYNC["checkpoint / DAG sync"]
        BACKUP["validator backup / restore"]
    end

    subgraph L3["Core Chain Layer"]
        ENGINE["kanari-core::BlockchainEngine"]
        MEMPOOL["verified mempool"]
        CHECKPOINT["checkpoint builder"]
        DAG["Mysticeti DAG metadata"]
        INDEX["transaction + object indexes"]
    end

    subgraph L4["Execution Layer"]
        RUNTIME["kanari-move-runtime-v1"]
        VM["Move VM"]
        SCHED["parallel scheduler"]
        NATIVE["kanari-system-natives"]
    end

    subgraph L5["Data / Crypto Layer"]
        TYPES["kanari-types<br/>tx, object, gas, event"]
        CRYPTO["kanari-crypto<br/>keys, signatures, hashing"]
        SMT["smt<br/>Sparse Merkle Tree"]
        DB["RocksDB / persistent stores"]
        FRAMEWORKS["kanari-frameworks<br/>0x1 + 0x2 Move modules"]
    end

    EXPLORER --> RPC_CLIENT
    CLI --> RPC_CLIENT
    PAY --> RPC_CLIENT
    WALLET --> RPC_CLIENT

    RPC_CLIENT --> RPC_API
    RPC_API --> RPC_SERVER
    RPC_SERVER --> ENGINE

    NODE --> RPC_SERVER
    NODE --> P2P
    P2P --> SYNC
    SYNC --> ENGINE

    ENGINE --> MEMPOOL
    MEMPOOL --> CHECKPOINT
    CHECKPOINT --> DAG
    CHECKPOINT --> INDEX
    ENGINE --> RUNTIME

    RUNTIME --> VM
    RUNTIME --> SCHED
    VM --> NATIVE
    VM --> FRAMEWORKS

    ENGINE --> TYPES
    ENGINE --> CRYPTO
    ENGINE --> SMT
    ENGINE --> DB
    RUNTIME --> DB
    DAG --> DB`;

type MermaidApi = {
  initialize: (config: Record<string, unknown>) => void;
  render: (id: string, source: string) => Promise<{ svg: string }>;
};

let mermaidLoader: Promise<MermaidApi> | null = null;

function loadMermaid(): Promise<MermaidApi> {
  if (!mermaidLoader) {
    mermaidLoader = import('mermaid').then((module) => module.default as MermaidApi);
  }

  return mermaidLoader;
}

function MermaidDiagram({ source }: { source: string }) {
  const rawId = useId();
  const [svg, setSvg] = useState('');
  const [error, setError] = useState('');
  const [zoom, setZoom] = useState(0.9);
  const [expanded, setExpanded] = useState(false);
  const [themeRevision, setThemeRevision] = useState(0);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setThemeRevision((value) => value + 1);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function renderMermaid() {
      try {
        const mermaid = await loadMermaid();
        const isDark = document.documentElement.classList.contains('dark');
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'base',
          flowchart: {
            curve: 'monotoneY',
            htmlLabels: true,
            nodeSpacing: 34,
            rankSpacing: 54,
          },
          themeVariables: {
            background: isDark ? '#0d1512' : '#fffdf7',
            primaryColor: '#c8f43d',
            primaryTextColor: '#111b18',
            primaryBorderColor: isDark ? '#c8f43d' : '#111b18',
            lineColor: isDark ? '#c8f43d' : '#7868da',
            secondaryColor: '#cabdff',
            secondaryTextColor: '#111b18',
            secondaryBorderColor: isDark ? '#cabdff' : '#7868da',
            tertiaryColor: isDark ? '#24302c' : '#fffdf7',
            mainBkg: isDark ? '#17211e' : '#fffdf7',
            clusterBkg: isDark ? '#1f2d28' : '#f7f4eb',
            clusterBorder: isDark ? '#c8f43d' : 'rgba(17,27,24,.2)',
            edgeLabelBackground: isDark ? '#17211e' : '#fffdf7',
            nodeBorder: isDark ? '#c8f43d' : 'rgba(17,27,24,.32)',
            textColor: isDark ? '#f7f4eb' : '#111b18',
            titleColor: isDark ? '#f7f4eb' : '#111b18',
            labelTextColor: isDark ? '#f7f4eb' : '#111b18',
            edgeLabelTextColor: isDark ? '#f7f4eb' : '#111b18',
            nodeTextColor: '#111b18',
            fontFamily: 'Inter, Arial, sans-serif',
          },
        });

        const safeId = `kanari-mermaid-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;
        const result = await mermaid.render(safeId, source);
        if (!cancelled) {
          setSvg(result.svg);
          setError('');
        }
      } catch (renderError) {
        if (!cancelled) {
          setError(renderError instanceof Error ? renderError.message : 'Unable to render Mermaid diagram');
        }
      }
    }

    renderMermaid();

    return () => {
      cancelled = true;
    };
  }, [rawId, source, themeRevision]);

  if (error) {
    return (
      <div className="mermaid-fallback">
        <p>Mermaid renderer could not load. You can still copy the diagram source below.</p>
        <pre><code>{source}</code></pre>
      </div>
    );
  }

  if (!svg) {
    return <div className="mermaid-loading">Rendering Mermaid diagram...</div>;
  }

  return (
    <div className={`mermaid-viewer ${expanded ? 'mermaid-viewer--expanded' : ''}`}>
      <div className="mermaid-toolbar" aria-label="Diagram controls">
        <button type="button" onClick={() => setZoom((value) => Math.max(0.65, Number((value - 0.15).toFixed(2))))}>−</button>
        <span>{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => setZoom((value) => Math.min(1.8, Number((value + 0.15).toFixed(2))))}>+</button>
        <button type="button" onClick={() => setZoom(0.9)}>Reset</button>
        <button type="button" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Compact' : 'Wide'}</button>
      </div>
      <div className="mermaid-rendered">
        <div
          className="mermaid-zoom-surface"
          style={{
            '--diagram-zoom': zoom,
            '--diagram-canvas-scale': `${zoom * 100}%`,
            '--diagram-canvas-height': `${Math.round(980 * zoom)}px`,
          } as CSSProperties}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
}

export function ProtocolStackExplorer() {
  return (
    <section className="protocol-section section-wrap" id="protocol">
      <div className="protocol-heading">
        <p className="section-kicker">PROTOCOL STACK</p>
        <h2>Built in layers,<br />committed as one.</h2>
        <p>
          Kanari separates application APIs from node networking, deterministic Move execution,
          DAG metadata, and persistent state. The result is easier to audit, easier to operate,
          and easier to scale behind RPC gateways.
        </p>
      </div>

      <div className="protocol-metrics" aria-label="Kanari protocol highlights">
        {protocolStats.map(([title, description]) => (
          <article className="protocol-metric" key={title}>
            <strong>{title}</strong>
            <span>{description}</span>
          </article>
        ))}
      </div>

      <div className="protocol-layers">
        {architectureLayers.map(([number, title, description]) => (
          <article className="protocol-layer" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <div className="mermaid-panel" aria-label="Kanari Mermaid architecture diagram">
        <div className="mermaid-panel__top">
          <div>
            <span>mermaid</span>
            <strong>kanari-sdk layered flow</strong>
          </div>
          <p>Zoom, inspect, and copy the same architecture source used by the docs.</p>
        </div>
        <div className="mermaid-showcase">
          <MermaidDiagram source={mermaidDiagram} />
          <aside className="mermaid-notes">
            <p className="section-kicker">READING THE FLOW</p>
            <h3>One transaction, many layers.</h3>
            <ul>
              <li><span />Apps submit signed requests through JSON-RPC.</li>
              <li><span />The node routes work into core execution and DAG metadata.</li>
              <li><span />Move and Mysticeti converge into a checkpointed state root.</li>
            </ul>
          </aside>
        </div>
        <details className="mermaid-source">
          <summary>View Mermaid source</summary>
          <pre><code>{mermaidDiagram}</code></pre>
        </details>
      </div>
    </section>
  );
}
