import { useEffect } from 'react';
import { InvitationProvider } from './lib/invitation';
import { setupReveal } from './lib/reveal';
import { NAV } from './content/site';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Hero } from './components/Hero';
import { ThemeOfYear } from './components/ThemeOfYear';
import { Meetings } from './components/Meetings';
import { Circle } from './components/Circle';
import { Manifest } from './components/Manifest';
import { Hosts } from './components/Hosts';
import { Editorial } from './components/Editorial';
import { Invitation } from './components/Invitation';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => setupReveal(), []);

  return (
    <InvitationProvider>
      <a className="skip-link" href="#tresc">
        {NAV.skip}
      </a>
      <Intro />
      <Header />
      <main id="tresc" tabIndex={-1}>
        <Hero />
        <ThemeOfYear />
        <Meetings />
        <Circle />
        <Manifest />
        <Hosts />
        <Editorial />
        <Invitation />
      </main>
      <Footer />
    </InvitationProvider>
  );
}
