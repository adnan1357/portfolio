import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Database,
  Server,
  Cloud,
  GitBranch,
  FileText,
  Globe,
  Terminal,
  Layout,
  Box,  // Add this line
  Menu,  // Add Menu icon
  X       // Add X icon for close
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const projects = [
    {
      title: "NHS Trust Integration System",
      description: "Developed and integrated Intersystems health share health connect for seamless data flow between NHS Trusts and healthcare vendors",
      technologies: ["Python", "Java", "Healthcare APIs", "Integration"]
    },
    {
      title: "Cyber Essentials Implementation",
      description: "Led the implementation of cybersecurity best practices and assisted in qualifying the company for cyber essentials certification",
      technologies: ["Security", "Compliance", "Best Practices"]
    },
    {
      title: "Service Cloud Management",
      description: "Managed company IT systems including Google Cloud and backend databases with Service Cloud ticketing system",
      technologies: ["Service Cloud", "Google Cloud", "Database Management"]
    }
  ];

  const skills = [
    { name: "Python", level: 90, icon: Code },
    { name: "Java", level: 85, icon: Server },
    { name: "Docker", level: 75, icon: Box },
    { name: "Git", level: 80, icon: GitBranch },
    { name: "Kubernetes", level: 70, icon: Cloud },
    { name: "SQL", level: 85, icon: Database },
    { name: "Elastic Cloud", level: 65, icon: Globe },
    { name: "Dreamfactory", level: 60, icon: Terminal },
    { name: "HTML", level: 75, icon: Layout },
    { name: "CSS", level: 70, icon: FileText },
    { name: "PHP", level: 65, icon: Code }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: "0%",
      transition: {
        duration: 0.3
      }
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-700"
      >
        <div className="container mx-auto p-6 flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Adnan Habib
            <span className="block text-sm font-light text-gray-400 mt-1">Junior Integration Developer</span>
          </motion.h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {['about', 'projects', 'experience', 'skills', 'education'].map(section => (
              <motion.button 
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-all border ${
                  activeSection === section 
                    ? 'border-purple-500 bg-purple-500/20 text-purple-300' 
                    : 'border-gray-700 hover:border-purple-400 hover:bg-purple-500/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-300 hover:text-purple-400"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg z-50"
            >
              <nav className="flex flex-col items-center py-6 space-y-4">
                {['about', 'projects', 'experience', 'skills', 'education'].map(section => (
                  <motion.button 
                    key={section}
                    onClick={() => handleSectionChange(section)}
                    className={`w-full py-3 text-center transition-all ${
                      activeSection === section 
                        ? 'bg-purple-500/20 text-purple-300' 
                        : 'text-gray-300 hover:bg-purple-500/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <div className="h-24"></div>

      <motion.main 
        className="container mx-auto px-6 py-12 flex-grow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {activeSection === 'about' && (
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700"
          >
            <motion.h2 
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.02 }}
            >
              Building Tomorrow's Healthcare Integration
            </motion.h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Final year Computer Science student at City St Georges University of London with hands-on experience as a Junior Integration Developer. 
              Specializing in healthcare systems integration, Python programming, and Java development. Currently maintaining an impressive 80% average in my final year, 
              I combine academic excellence with practical industry experience to deliver innovative solutions in healthcare technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a href="mailto:hello@adnanhabib.co.uk" className="text-purple-300 hover:text-purple-400 transition-colors">
                hello@adnanhabib.co.uk
              </a>
              <span className="text-gray-400">|</span>
              <span className="text-purple-300">London, England</span>
            </div>
          </motion.section>
        )}

        {activeSection === 'projects' && (
          <motion.section 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 shadow-2xl"
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.section>
        )}

        {activeSection === 'skills' && (
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-900 rounded-xl p-4 shadow-lg flex items-center space-x-4"
                  >
                    <SkillIcon className="text-purple-400 w-8 h-8" />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-2">
                        <span className="text-purple-300 font-semibold">{skill.name}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {activeSection === 'education' && (
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
              Educational Journey
            </h2>
            <div className="space-y-8">
              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-purple-300">BSc Computer Science</h3>
                <p className="text-gray-400">City St Georges University of London | September 2021 — July 2025</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Expected First Class Degree</li>
                  <li>Year 1 Average: 77%</li>
                  <li>Year 2 Average: 69%</li>
                  <li>Year 3 Current Average: 80%</li>
                  <li>Key Modules: C++, Java, Theory of Computation, Data Visualization, Project Management</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-purple-500 pl-6">
                <h3 className="text-xl font-bold text-purple-300">A-Levels</h3>
                <p className="text-gray-400">Leyton Sixth Form College | September 2019 — August 2021</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Subjects: Maths (B), Computer Science (B), Physics (C)</li>
                </ul>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === 'experience' && (
          <motion.section 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6">
              Professional Journey
            </h2>
            <div className="space-y-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="border-l-2 border-purple-500 pl-6"
              >
                <h3 className="text-xl font-bold text-purple-300">Junior Integration Developer</h3>
                <p className="text-gray-400">Integrella | June 2022 - November 2024</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Led system integration for NHS Trusts using Intersystems health share</li>
                  <li>Contributed to company's Cyber Essentials certification</li>
                  <li>Managed IT systems and backend databases</li>
                  <li>Mentored junior team members on best practices</li>
                </ul>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="border-l-2 border-purple-500 pl-6"
              >
                <h3 className="text-xl font-bold text-purple-300">Sales Assistant</h3>
                <p className="text-gray-400">Swiss Watch Buyer, London | August 2020 - May 2022</p>
                <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2">
                  <li>Increased shop foot traffic by 50% through marketing campaigns</li>
                  <li>Built and maintained strong client relationships</li>
                  <li>Provided expert product recommendations</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
        )}
      </motion.main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full bg-black/30 backdrop-blur-md border-t border-gray-700 py-6 mt-12"
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-8 mb-4">
            <motion.a
              href="https://www.linkedin.com/in/adnanhabib03"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:hello@adnanhabib.co.uk"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Adnan Habib. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Portfolio;