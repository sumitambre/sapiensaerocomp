import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProblemSolution from '@/components/ProblemSolution';
import Products from '@/components/Products';
import Performance from '@/components/Performance';
import Capabilities from '@/components/Capabilities';
import Qualifiers from '@/components/Qualifiers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SeoJsonLd from '@/components/SeoJsonLd';

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.sapiensaerocomp.com';

  return (
    <>
      <SeoJsonLd siteUrl={siteUrl} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <Products />
        <Performance />
        <Capabilities />
        <Qualifiers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

