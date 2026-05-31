import Image from 'next/image';
import { ArrowIcon, SectionHeading } from '../components/SiteChrome';

const updates = [
  {
    category: 'SDK DESIGN',
    title: 'Kanari SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
    description: 'A closer look at the thinking behind Kanari developer tools and secure digital assets.',
    date: '27 JAN 2024',
    image: 'https://raw.githubusercontent.com/kanari-network/about/main/kari1.png',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Design',
  },
  {
    category: 'SDK DESIGN',
    title: 'Kanari SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
    description: 'A closer look at the thinking behind Kanari developer tools and secure digital assets.',
    date: '27 JAN 2024',
    image: 'https://raw.githubusercontent.com/kanari-network/about/main/kari1.png',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Design',
  },
  {
    category: 'SDK DESIGN',
    title: 'Kanari SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
    description: 'A closer look at the thinking behind Kanari developer tools and secure digital assets.',
    date: '27 JAN 2024',
    image: 'https://raw.githubusercontent.com/kanari-network/about/main/kari1.png',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Design',
  },
  {
    category: 'SDK DESIGN',
    title: 'Kanari SDK Design: A New Era for Blockchain Interoperability and Digital Asset Security',
    description: 'A closer look at the thinking behind Kanari developer tools and secure digital assets.',
    date: '27 JAN 2024',
    image: 'https://raw.githubusercontent.com/kanari-network/about/main/kari1.png',
    href: 'https://blog.kanarinetwork.site/Kanari_SDK_Design',
  },
];

export function LatestUpdates() {
  const [featuredUpdate, ...moreUpdates] = updates.slice(0, 4);

  return (
    <section className="home-section home-section--tint" id="updates">
      <div className="section-wrap">
        <div className="updates-heading">
          <SectionHeading kicker="Latest updates" title="Notes from the network." description="Follow product thinking, technical progress, and ideas from the Kanari ecosystem." />
          <a className="text-link" href="https://blog.kanarinetwork.site/" target="_blank" rel="noreferrer">View all updates <ArrowIcon /></a>
        </div>
        <div className="updates-layout">
          <a className="update-featured" href={featuredUpdate.href} target="_blank" rel="noreferrer">
            <div className="update-featured__image">
              <Image src={featuredUpdate.image} alt="" fill sizes="(max-width: 900px) 100vw, 62vw" />
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
              <a className="update-compact" href={update.href} target="_blank" rel="noreferrer" key={`${update.href}-${index}`}>
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
