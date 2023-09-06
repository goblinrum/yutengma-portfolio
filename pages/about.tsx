import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Ryan Ma">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/goblinrum">@goblinrum</a>
            </li>
            <li>
              Linked
              <a href="http://linkedin.com/in/ryan-ma-30/">
                In
              </a>
            </li>
            <li>
              Email: <a href="mailto:ryan.ma3011@berkeley.edu">ryan.ma3011 (at) berkeley.edu</a>
            </li>
            {/* <li>
              Resume: <iframe src='/public/Ma, Ryan - Resume.pdf' />
            </li> TODO: Add route for backend to fetch resume*/}
          </ul>
          <h2>Bio</h2>
          <p>
          Hi! I'm Ryan. I like to dabble in all things technology. My interests include building computers, 
          web development (and security), and also reaches into the lower level systems and circuits. 
          While most of my experience has been in web development, I'm slowly working my way through 
          low level systems programming, digital logic and integrated circuits, computer architecture, 
          and even analog circuits. I love the feeling of building something with my own hands and making it work.
          </p>
          <h2>Industry Experience</h2>
          <h4>Systems Design Engineer Intern at {' '}
            <a href="https://www.amd.com/en.html">AMD</a>
          </h4>
          <h6 className='text-gray-500 dark:text-gray-300'><em>May 2023 - August 2023</em></h6>
          <p>My first foot in the door in terms of hardware and systems endeavors. This particular experienced allowed me to combine my 
             background in software to build and improve infrastructure for a hardware product. It also made me want to be more involved in
             the hardware world. Here are a few things that I did as part of the process:</p>
          <ul>
            <li>Developed an automated end-to-end testing for a FMEDA metrics analysis tool using Pytest and Github Actions</li>
            <li>Implemented concurrent processing and code optimizations to realize a 12x speedup versus previous code</li>
            <li>Worked on internal FMEDA process feature development with Synopsys PrimeTime and TCL, embedding self checks and enhancing netlist extraction capabilities</li>
          </ul>
          <h4>Software Engineer at {' '}
            <a href="https://tecmend.com">Tecmend</a>
          </h4>
          <h6 className='text-gray-500 dark:text-gray-300'><em>January 2021 - May 2023</em></h6>
          <p>Learning on the job. Fast paced startup environment. Designing custom backend solutions. 
            My work at Tecmend has been a mix of bug fixing/feature development and designing custom client API integrations. 
            I'm never sure what I'm up for and each case is different, but I'm always looking for new challenges. 
            Here's a quick list of my work:</p>
          <ul>
            <li>Senmonni, a MERN e-wallet application MVP and Android app for off-ramp customers in Belize</li>
            <li>On the Fly QuickBooks web connector, a React/Django application providing custom integrations between On The Fly's POS and QuickBooks, including SSO using QuickBooks OAuth login API</li>
            <li>Debugging and feature development for LearningRoom, a custom React/GraphQL LMS platform</li>
            <li>Debugging and feature development for DLM Sales Value Mapping, a lean manufacturing value calculator in React and Django.</li>
            <li>PDF Invoice reader, a PDF scraper automating invoice recording to Hubspot and QuickBooks, saving MSBs time and money</li>
            <li>Streamline the process of building custom API integrations for professional applications (HubSpot, QuickBooks, WordPress, Canvas, and customer-provided APIs) using Django and MySQL</li>
            <li>Manage automation and sysadmin tasks for the company's internal systems</li>
          </ul>
          <h4>Software Engineer Intern at {' '}
            <a href="https://instapathbio.com">Instapath</a> 
          </h4>
          <h6 className='text-gray-500 dark:text-gray-300'><em>June 2022 - May 2023</em></h6>
          <p>As an intern, I was given the task to help build a new webapp for clients to view pathology images. 
            The challenges? The images were often large (2-3 GB each!), and each image needs to be tiled and displayed as {''}
            <a href="https://en.wikipedia.org/wiki/Deep_Zoom">Deep Zoom</a> images.
            Here are a few things that I did as part of the process:</p>
          <ul>
            <li>Built a Django backend for the company’s webapp to view deep zoom pathology images. Includes features such as a custom authentication/permission management scheme, celery task queue, and image processing with libvips and histomicsTK.</li>
            <li>Incorporated a CPU intensive processing and image tiling process in Django with multithreading and a task queue. The results were uploaded to AWS S3 and served from there. Designed the backend with a more asynchronous architecture to reflect processing status on the frontend.</li>
            <li>Dockerized the deployment of the webapp and automated the deploy of the frontend, backend, Postgres, Let's Encrypt, Nginx, and Github Actions</li>
            <li>Learned how efficient algorithms and design apply to the medical fields</li>
          </ul>
          <h2>Activities</h2>
          <h4><a href='https://ieee.berkeley.edu/'>IEEE Berkeley</a>{' '}Student Branch - Director of Technical Operations</h4>
          <h6 className='text-gray-500 dark:text-gray-300'><em>September 2021 - Present</em></h6>
          <p>I started out as a website officer. I was tasked to do the following: </p>
            <ul>
              <li>Redesign a club-hosted startup fair website using the MERN stack. I worked on a team of three (and focused on backend)
                to build a website that would allow startups and students to register for one-on-one timeslots to talk about recruiting and internships.
                </li>
            </ul>
            I then was a Tech-Ops officer, where I was tasked to do the following:
            <ul>
              <li>Lead a student-facing project team to work on Berkeley Bias, a MERN stack forum site for Berkeley students.</li>
              <li>Teach the project team basic software engineering skills including Git, Unit/Integration testing, MERN, and Docker. </li>
              <li>Help with internal organization of a campus-wide hackathon for Spring 2023.</li>
            </ul>
            I now lead the Tech-Ops branch, where I manage the following:
            <ul>
              <li>Manage the Tech-Ops team and its projects, communicating with cross-club point of contacts</li>
              <li>Help run internal logistics and manage the office space</li>
              <li>Organize club-sponsored events such as hack days</li>
            </ul>
          
        </div>
      </div>
    </Container>
  );
}
