import { About } from '@/components/pages/about';
import { Contact } from '@/components/pages/contact';
import { Experience } from '@/components/pages/experience';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { Hero } from '@/components/pages/home';
import { Intro } from '@/components/pages/intro';
import { Projects } from '@/components/pages/projects';
import { SectionDivider } from '@/components/ui/section-divider';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const Home = async () => {

  return (
    <>
      <div className="home-header w-full">
        <Hero />
      </div>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        {/* starsCount={starsCount} */}
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="fixed bottom-5 right-5 hidden sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default Home;
