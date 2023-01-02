import { Suspense, useState } from 'react';

import Container from 'components/Container';
import ProjectsPost from 'components/ProjectPost';
import { InferGetStaticPropsType } from 'next';
import { indexProjectQuery, indexQuery } from 'lib/queries';
import { getClient } from 'lib/sanity-server';
import { Post } from 'lib/types';

export default function Projects({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Projects – Ryan Ma"
      description="A collection of my projects"
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Projects
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {`These are some of the projects I've worked on, both personal and for school or other companies. 
          I've tried to include a brief description, screenshots, and pictures of each.`}
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search projects"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search projects"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <Suspense fallback={null}>
          <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
            All Projects
          </h3>
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No projects
            </p>
          )}
          {filteredBlogPosts.map((post) => (
            <ProjectsPost
              key={post.title}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </Suspense>
      </div>
    </Container>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexProjectQuery);

  return { props: { posts } };
}
