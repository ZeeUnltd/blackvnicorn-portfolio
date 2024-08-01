import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';
import { projectsData } from '@/lib/data';
import { Hero } from '@/components/home';

const Home = async () => {
  // const starsCount = await Promise.all(
  //   projectsData.map(async ({ links }) => {
  //     const res = await fetch(links.githubApi, { cache: 'no-store' });
  //     const data = await res.json();
  //     return data.stargazers_count;
  //   })
  // );

  return (
    <>
      <div className='w-full home-header'>
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
