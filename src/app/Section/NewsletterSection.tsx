'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="newsletter-section section-wrap" data-reveal>
      <div>
        <p className="section-kicker">Newsletter</p>
        <h2>Keep up with<br /><span>what is moving.</span></h2>
        <p>Occasional updates from the Kanari network. No clutter, just the useful parts.</p>
      </div>
      {submitted ? (
        <div className="newsletter-success"><strong>You are on the list.</strong><span>Thanks for following the network.</span></div>
      ) : (
        <form onSubmit={submit}>
          <label htmlFor="newsletter-email">Email address</label>
          <div>
            <input id="newsletter-email" type="email" placeholder="you@example.com" required />
            <button type="submit">Subscribe</button>
          </div>
          <small>By subscribing, you agree to our <Link href="/PrivacyPolicy">privacy policy</Link>.</small>
        </form>
      )}
    </section>
  );
}

export default NewsletterSection;
