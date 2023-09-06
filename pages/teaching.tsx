import Container from 'components/Container';

export default function Teaching() {
    return (
        <Container title="Teaching – Ryan Ma">
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                    Teaching
                </h1>
                <div className="mb-8 prose dark:prose-dark leading-6">
                    <p>I love to teach! Here are some of my experiences. I might post some of my teaching materials as I polish them more.</p>
                    <h3><a href='https://eecs16b.org/' className='text-blue-600'>EECS16B: Designing Information Devices and Systems II</a></h3> 
                        <h6 className='text-gray-500 dark:text-gray-300'><em>January 2023 - Present</em></h6>
                        <p> I am now a Lab TA for the Fall 2023 semester. In addition to my previous duties, I also help develop content for the course. This involves improving the current
                            lab material, lab reports, and lab notes for students.
                        </p>
                        <p> I am a Lab ASE for EECS16B for the Spring 2023 semester. This lab involves building the S1XT33N Robot Car (as outlined in my post <a href='https://yutengma.me/projects/sixteen' className='text-blue-600'>here</a>), 
                            and I am excited to teach students how to build their own robot car! I will update this page as the semester progresses. 
                        </p>
                    <h3><a href='https://eecs16a.org/' className='text-blue-600'>EECS16A: Designing Information Devices and Systems I</a></h3> 
                        <h6 className='text-gray-500 dark:text-gray-300'><em>August 2022 - December 2022</em></h6>
                        <p> I was a Lab ASE for EECS16A, a course that teaches a combination of instroductory circuits and linear algebra. 
                            In the role of a Lab ASE, I </p>
                                <ul>
                                    <li>Taught lab sections for a lab of 20-30 students</li>
                                    <li>Checked off students for lab assignments</li>
                                    <li>Answered conceptual questions and helped students debug their circuits</li>
                                    <li>Developed and brought-up new lab material for future students</li>
                                </ul>
                        

                    <h3><a href='https://csmentors.berkeley.edu/#/' className='text-blue-600'>Computer Science Mentors</a></h3> 
                    <h6 className='text-gray-500 dark:text-gray-300'><em>August 2021 - Present</em></h6>
                        <p>I mentor for Computer Science Mentors, a student organization that tutors for 
                            lower-division electrical engineering and computer science courses. I've taught CS61A: 
                            Structure and Interpretation of Computer Programs for three semesters so far. 
                            Each semester, I</p>
                                <ul>
                                    <li>Hold two 1-hour tutoring sessions for a group of five students with little or no previous programming experience</li>
                                    <li>Prepare slideshows, worksheets, and programming exercises to supplement course content</li>
                                    <li>Attend pedagogy trainings to learn how to effectively teach computer science</li>
                                    </ul>
                    
                    <h3><a href='https://datastructur.es/' className='text-blue-600'>CS61B: Data Structures</a></h3> 
                    <h6 className='text-gray-500 dark:text-gray-300'><em>January 2022 - May 2022</em></h6>
                        <p>I was an academic intern for my Data Structures class. As an Academic Intern, I</p>
                                <ul>
                                    <li>Helped TAs during lab and office hours in assisting students with lab</li>
                                    <li>Offered conceptual help and debugging assistance for labs and projects</li>
                                    <li>Prepared lab and project materials for review and debugging purposes</li>
                                    </ul>
                    
                    <h3><a href='https://decal.ocf.berkeley.edu/' className='text-blue-600'>Linux Sysadmin Decal</a></h3> 
                    <h6 className='text-gray-500 dark:text-gray-300'><em>January 2022 - May 2022</em></h6>
                        <p>This is a student-run course that teaches the basics of Linux System Administration. As a facilitator for the course, 
                            I 
                        </p>
                                <ul>
                                    <li>Created quizzes and proofread assignments for students</li>
                                    <li>Gave short lectures and demos for different topics</li>
                                    <li>Graded lab assignments</li>
                                    </ul>
                </div>
            </div>
        </Container>
    );
}