'use client';

import ReactMarkdown from 'react-markdown';
import { PageCTA, PageHero, PageShell } from '../components/SiteChrome';
import { privacyPolicyContent } from '../data/privacy-policy';

export default function PrivacyPolicy() {
  return (
    <PageShell>
      <PageHero kicker="Privacy policy" title="Clear by design." accent="Privacy explained." description="Effective May 31, 2026. Learn how Kanari Network handles information across its website, documentation, and public resources." />
      <section className="subpage-section section-wrap">
        <article className="prose-card privacy-prose"><ReactMarkdown>{privacyPolicyContent}</ReactMarkdown></article>
      </section>
      <PageCTA kicker="Privacy support" title="Still have a question?" description="Contact us for help understanding the policy or how your information is handled." href="mailto:privacy@kanarinetwork.site?subject=Kanari%20Privacy%20Question" label="Contact privacy team" />
    </PageShell>
  );
}
