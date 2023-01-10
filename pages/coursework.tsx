import Container from 'components/Container';

export default function Coursework() {
  return (
    <Container title="Academics – Ryan Ma">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Academics
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
            <h2>Coursework</h2>
            <h4>Spring 2023</h4>
            <ul>
                <li>CS 152: Computer Architecture and Engineering</li>
                <li>EE 120: Signals and Systems</li>
                <li>CS 186: Introduction to Database Systems</li>
            </ul>
            <h4>Fall 2022</h4>
            <ul>
                <li>EECS 151: Introduction to Digital Design and Integrated Circuits</li>
                <li>EECS 151LB: FPGA Lab</li>
                <li>EE 105: Microelectronic Devices</li>
                <li>CS 161: Computer Security</li>
            </ul>
            <h4>Summer 2022</h4>
            <ul>
                <li>CS 61C: Great Ideas in Computer Architecture</li>
            </ul>
            <h4>Spring 2022</h4>
            <ul>
                <li>EECS 16B: Designing Information Devices and Systems II</li>
                <li>CS 70: Discrete Math and Probability Theory</li>
                <li>CS 188: Introduction to Artificial Intelligence</li>
            </ul>
            <h4>Fall 2021</h4>
            <ul>
                <li>CS 61B: Data Structures</li>
                <li>Math 53: Multivariable Calculus</li>
                <li>EECS 16A: Designing Information Devices and Systems I</li>
            </ul>
            <h4>Summer 2021</h4>
            <ul>
                <li>CS 61A: Structure and Interpretation of Computer Programs</li>
            </ul>

          
        </div>
      </div>
    </Container>
  );
}
