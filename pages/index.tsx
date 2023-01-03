import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import ProjectPostCard from '../components/ProjectPostCard';
import VideoCard from '../components/VideoCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                Ryan Ma
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Computer Science Student at UC Berkeley
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
              Developing away at backends, databases and life. 
              Exploring the world of systems, computer architecture, and microelectronics.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-5 sm:mb-0 mr-auto">
              <Image
                alt="Ryan Ma"
                height={176}
                width={80}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full w-full h-full"
              />
            </div>
          </div>
          {/* short summary section about my current interests and classes */}
          <h6 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-4 text-black dark:text-white">
            A bit about me:
          </h6>
          <div className="text-gray-600 dark:text-gray-400 mb-8">
            <li>I am currently a Lab ASE for 
              <a href="https://eecs16b.org" className='text-blue-600'> EECS16B: Designing Information Devices and Systems II</a>
            </li>
            <li>Most of my experience is in backend development, specifically in <em>Django, Express/Node and RESTful APIs</em>. I am also 
                interested in lower-level systems, security, and VLSI.</li>
            <li>Currently taking: CS152: Advanced Computer Architecture, CS186: Databases, and EE120: Signals and Systems</li>
          </div>
          {/* Quick links section for LinkedIn, Github, and resume */}
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <ProjectPostCard
              title="Three-Stage Pipelined RISC-V CPU"
              slug="cpu"
              gradient="from-[#D8B48E] to-[#819CF8]"
            />
            <BlogPostCard
              title="Development Timeline for this Website"
              slug="timeline"
              gradient="from-[#6E27B7] via-[#3B92F6] to-[#9393EA]"
            />
            {/* <BlogPostCard
              title="Past, Present, and Future of React State Management"
              slug="react-state-management"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            /> */}
          </div>
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Quick Links
          </h3>
          <br></br>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
              <Link
                href="https://www.linkedin.com/in/ryan-ma-30/"
                className="flex items-center justify-center w-full sm:w-auto h-12 px-6 mb-4 sm:mb-0 sm:mr-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/goblinrum"
                className="flex items-center justify-center w-full sm:w-auto h-12 px-6 mb-4 sm:mb-0 sm:mr-4 text-lg font-medium rounded-lg text:black dark:text-white bg-gray-600 dark:bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
              >
                GitHub
              </Link>
              <Link
                href="/Ma, Ryan - Resume.pdf"
                className="flex items-center justify-center w-full sm:w-auto h-12 px-6 mb-4 sm:mb-0 sm:mr-4 text-lg font-medium rounded-lg text:black dark:text-white bg-gray-600 dark:bg-gray-800 hover:bg-gray-900 transition-colors duration-200"
              >
                Resume
              </Link>
            </div>
          </div>
          <p className="text-red-600 mb-8"> This site is still a heavy work in progress. I know the links to my projects don't work (yet). Also, if you think this looks like leerob.io, then you'd
            be right. Thanks Lee for the inspiration! I have tons of ideas for this site, so I'm only using this base template is only being deployed for the time being. </p>
          {/* <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Read all posts'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link> */}

          {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Learn React & Next.js
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Build and deploy a modern SaaS application using the most popular
            open-source software. This course is 12 hours long and is completely
            live streamed.
          </p>
          <VideoCard
            index="01"
            href="https://www.youtube.com/watch?v=MxR5I5_hOKk&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=2"
            length="1:02:45"
            title="Introduction to React 2025"
          />
          <VideoCard
            index="02"
            href="https://www.youtube.com/watch?v=AGl52moyISU&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=3"
            length="54:22"
            title="Firestore, Chakra UI, Absolute Imports"
          />
          <VideoCard
            index="03"
            href="https://www.youtube.com/watch?v=3g6-v3_BNbM&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=4"
            length="1:08:30"
            title="Designing & Building the Dashboard"
          />
          <VideoCard
            index="04"
            href="https://www.youtube.com/watch?v=u8iv_yhSRI8&list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1&index=5"
            length="1:13:45"
            title="Firebase Admin with Next.js + SWR"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
          <span className="h-16" /> */}
        </div>
      </Container>
    </Suspense>
  );
}
