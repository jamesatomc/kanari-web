import Image from 'next/image';
import { ArrowIcon, SectionHeading } from '../components/SiteChrome';

const channels = [
  ['Bluesky', 'Network updates, announcements, and notes from the Kanari community.', 'https://bsky.app/profile/kanarinetwork.bsky.social', 'bluesky'],
  ['GitHub', 'Open-source code, SDK development, and places to contribute.', 'https://github.com/kanari-network', 'github'],
  ['Community hub', 'Find the right place to learn, build, test, and share feedback.', '/connect/community', 'community'],
];

function ChannelIcon({ type }: { type: string }) {
  if (type === 'bluesky') return <Image src="/Bluesky_Logo.svg" alt="" width={25} height={25} />;
  if (type === 'github') return <svg aria-hidden="true" viewBox="0 0 24 24"><path fill="currentColor" d="M12 .7A11.3 11.3 0 0 0 8.4 22.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" /></svg>;
  return <span>+</span>;
}

export function OfficialChannels() {
  return (
    <section className="home-section section-wrap" id="channels">
      <SectionHeading kicker="Official channels" title="Stay close to the work." description="Follow progress and find the place where you want to participate." />
      <div className="channel-grid">
        {channels.map(([name, description, href, icon]) => (
          <a className="channel-card" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} key={name}>
            <div className="channel-card__icon"><ChannelIcon type={icon} /></div>
            <h3>{name}</h3>
            <p>{description}</p>
            <strong>Connect <ArrowIcon /></strong>
          </a>
        ))}
      </div>
    </section>
  );
}
