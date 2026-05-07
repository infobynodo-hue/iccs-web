import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Pillars from '@/components/sections/Pillars';
import Membership from '@/components/sections/Membership';
import Library from '@/components/sections/Library';
import Testimonial from '@/components/sections/Testimonial';
import Team from '@/components/sections/Team';
import Knowledge from '@/components/sections/Knowledge';
import B2BBanner from '@/components/sections/B2BBanner';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Pillars />
        <Library />
        <Membership />
        <Testimonial />
        <Team />
        <Knowledge />
        <B2BBanner />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
