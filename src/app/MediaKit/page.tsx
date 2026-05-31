'use client';

import Image from 'next/image';
import { toast, Toaster } from 'react-hot-toast';
import { ArrowIcon, PageCTA, PageHero, PageShell, SectionHeading } from '../components/SiteChrome';

const colors = [
  { name: 'Kanari Lime', hex: '#C8F43D', text: '#111B18' },
  { name: 'Network Purple', hex: '#CABDFF', text: '#111B18' },
  { name: 'Deep Ink', hex: '#111B18', text: '#FFFFFF' },
  { name: 'Warm Paper', hex: '#FFFDF7', text: '#111B18' },
];

export default function MediaKit() {
  const copy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied ${hex}`);
  };
  const download = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || '';
    link.click();
  };

  return (
    <PageShell>
      <Toaster />
      <PageHero kicker="Media kit" title="A brand made" accent="to move." description="Official Kanari logos, colors, and visual resources for community members, partners, and the press." />
      <section className="subpage-section section-wrap">
        <SectionHeading kicker="01 / Palette" title="Color with a point of view." description="Click any color to copy its hex value." />
        <div className="resource-grid">
          {colors.map((color) => (
            <button className="color-chip" style={{ background: color.hex, color: color.text }} onClick={() => copy(color.hex)} key={color.hex}>
              <span>{color.hex}</span>
              <div><strong>{color.name}</strong><small>Click to copy</small></div>
            </button>
          ))}
        </div>
      </section>
      <section className="subpage-section subpage-section--tint">
        <div className="section-wrap">
          <SectionHeading kicker="02 / Logos" title="The Kanari mark." description="Download production-ready raster or vector assets." />
          <div className="resource-grid">
            <article className="resource-card">
              <div className="logo-preview logo-preview--light"><Image src="/images/logo-dark.png" width={300} height={100} alt="Kanari logo for light backgrounds" /></div>
              <h3>For light backgrounds</h3>
              <p>Use this version on paper, cream, and other bright surfaces.</p>
              <button onClick={() => download('/images/logo-dark.svg')}>Download SVG <ArrowIcon /></button>
            </article>
            <article className="resource-card dark-card">
              <div className="logo-preview logo-preview--dark"><Image src="/images/logo-light.png" width={300} height={100} alt="Kanari logo for dark backgrounds" /></div>
              <h3>For dark backgrounds</h3>
              <p>Use this version where the light mark needs room to stand out.</p>
              <button onClick={() => download('/images/logo-light.svg')}>Download SVG <ArrowIcon /></button>
            </article>
          </div>
        </div>
      </section>
      <PageCTA kicker="Brand support" title="Need something specific?" description="Reach out for additional formats, partnership materials, or guidance on using the Kanari brand." href="mailto:hello@kanarinetwork.site?subject=Kanari%20Brand%20Support" label="Contact the team" />
    </PageShell>
  );
}
