import Link from 'next/link';

import Container from 'components/Container';
import Image from 'next/image';

import twr from '../public/twr.gif';

export default function NotFound() {
  return (
    <Container title="404 – Ryan Ma">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold mx-auto text-3xl text-center md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – Something is burning and that's not good
        </h1>
        <p className="text-gray-600 mx-auto dark:text-gray-400 mb-8">
          Enjoy a peaceful gif while you figure out where you were supposed to end up...
        </p>
        <div className="flex flex-col justify-center mx-auto">
            <Image className="object-cover" src={twr} alt="The Wind Rises"/>
        </div>
        <br></br>
        <Link
          href="/"
          className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-200 dark:bg-gray-800 text-center rounded-md text-black dark:text-white"
        >
          Return Home
        </Link>
      </div>
    </Container>
  );
}
