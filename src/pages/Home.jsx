import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import {CustomCursor } from '../components/CustomCursor'
import { Navbar } from '../components/Navbar'
import {HeroSection} from '../components/HeroSection'
import { AboutSection } from '../components/AboutSection'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'


export const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme Toggle  */}
      <ThemeToggle/>
     
     {/* Custom Cursor  */}
     <CustomCursor/>

      {/* Navbar  */}
      <Navbar />

      {/* Main Content  */}
      <main>
        {/* hero section  */}
        <HeroSection/>
        
        {/* about section  */}
        <AboutSection />

        {/* SkillsSection */}
       <SkillsSection/>

       {/* Projects Section */}
       <ProjectsSection/>

       {/* Contact Section  */}
       <ContactSection />

      </main>

      {/* Footer  */}
      <Footer />
    </div>
  )
}


