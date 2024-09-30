'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';


// Handling Newsletter Submission
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const email = form.email.value;

  // email submission logic
  console.log(`Newsletter email submitted: ${email}`);

  form.reset();
};

// Landing Page Section
  const LandingPage: React.FC = () => {
    return (
    <main className="flex min-h-screen h-fit flex-col items-center relative">
      {/* Navbar */}
       <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="relative flex flex-col-reverse md:flex-row w-full h-screen mt-16 max-w-8xl items-center justify-evenly bg-cover bg-center"
        style={{ backgroundImage: "url('/LandingPage_Images/BackgroundImage.jpeg')" }}
      >
        {/*Displaying  background effect */}
        <div className="absolute inset-0 bg-black opacity-60 z-10 backdrop-blur-lg"></div>

        {/* Right Section with Text */}
        <div className="relative z-20 w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-start text-center md:text-right gap-6 p-4 md:p-8 md:ml-auto md:mr-10">
          <div className="flex flex-col gap-3 text-white">
            <h4 className="text-3xl font-black mr-8 md:text-5xl">Start Connecting today!</h4>
          </div>

          <p className="max-w-md text-xs md:text-base text-gray-300">
            Medigeek is a social media platform that provides assistance and various job opportunities.
          </p>

          {/* Offers Provided */}
          <h2 className="text-white text-[1.5rem] md:text-[1.8rem] capitalize">We Offer</h2>
          <span className="block text-white text-[1.5rem] md:text-[1.8rem] capitalize">
            <Typewriter
              words={['Posting', 'Exploring', 'Connecting Friends', 'Sharing Experiences', 'Job Opportunities', ' And Much More...']}
              loop
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
              cursor
              cursorStyle="|"
              cursorBlinking={true}
            />
          </span>

          {/* New to Medigeek Section */}
          <div className="w-full flex items-center mt-6 justify-center md:justify-start gap-3">
            <h3 className="text-lg font-bold text-white">New to Medigeek?</h3>
            <Link href="#explore" className="inline-block">
              <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition text-sm md:text-base">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Why Medigeek Section */}
      <section className="features-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Medigeek?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="feature-item text-center">
              <Image src="/LandingPage_Images/community_icon.png" alt="Community" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4">Explore Communities</h3>
              <p className="text-gray-600 mt-4">Join groups and clubs based on your interests and meet like-minded peers.</p>
        </div>
          <div className="feature-item text-center">
              <Image src="/LandingPage_Images/job_icon.png" alt="Jobs" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4">Job Opportunities</h3>
              <p className="text-gray-600 mt-4">Find internships and jobs curated specifically for undergraduates.</p>
            </div>
            <div className="feature-item text-center">
              <Image src="/LandingPage_Images/assessment_icon.png" alt="Assessments" width={80} height={80} />
              <h3 className="text-xl font-semibold mt-4">Assessments</h3>
              <p className="text-gray-600 mt-4">Take assessments to evaluate your skills and improve your qualifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  );
};

// Navbar Component
  const Navbar: React.FC = () => {
   return (
    <div className="absolute top-0 w-full bg-white h-16 bg-opacity-80 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Image
          src="/LandingPage_Images/Logo.png"
          alt="logo"
          height={50}
          width={150}
          className="-mt-4"
          style={{ objectFit: 'contain' }}
        />

        <ul className="hidden md:flex gap-8">
          <li>
            <Link className="text-black hover:text-red-400 transition-colors text-xs sm:text-base" href="#home">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-red-400 transition-colors text-xs sm:text-base" href="#signIn">
              Sign in
            </Link>
          </li>
          <li>
            <Link className="text-black hover:text-red-400 transition-colors text-xs sm:text-base" href="#signUp">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button onClick={handleToggle} className="block cursor-pointer text-red-800">
        <Image src="/LandingPage_Images/hamburger_icon.png" alt="menu" width={80} height={60} className="-mt-3" />
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute right-0 mt-2 w-40 bg-red-400 rounded-md shadow-lg z-20 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="text-white text-sm">
          <li className="pl-2 hover:bg-red-400">
            <Link href="#home">Home</Link>
          </li>
          <li className="pl-2 hover:bg-red-400">
            <Link href="#signIn">Sign in</Link>
          </li>
          <li className="pl-2 pt-1 hover:bg-red-400">
            <Link href="#signUp">Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-gray-300 py-10">
      <div className="w-full px-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Footer Column 1: Logo and About */}
          <div className="footer-about max-w-md md:max-w-sm lg:max-w-md">
            <Image
              src="/LandingPage_Images/Logo.png"
              alt="Medigeek Logo"
              height={50}
              width={150}
            />
            <p className="mt-4 ml-5 text-gray-400 break-words">
              Medigeek is your go-to platform for connecting with peers, sharing experiences, and finding the best job opportunities.
            </p>
          </div>

          {/* Footer Column 2: Newsletter */}
          <div className="footer-newsletter mt-8 md:mt-0">
            <h3 className="font-semibold text-lg mr-3 mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates directly in your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-white text-black rounded-l-md p-2 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-red-600 text-white rounded-r-md p-2 hover:bg-red-700"
              >
                Subscribe
              </button>
            </form>
          </div>
          </div>
        </div>
    </footer>
  );
};
{/*Exporting Landing Page */}
export default LandingPage;  
