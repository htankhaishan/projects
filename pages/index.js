import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import NavBar from '../components/NavBar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import ProjectsInProgress from '@/components/ProjectsInProgress';
import EmailSection from '../components/EmailSection.jsx';
import Footer from '../components/Footer';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <Head>
          <link rel="icon" href="/logo.png" />
          <title>Space INU</title>
        </Head>
        <main>
        <NavBar />
        <HeroSection />
        <Projects />
        <ProjectsInProgress />
        <AboutMe / >
        <EmailSection />
        </main>
        <Footer />
    </div>
  );
}