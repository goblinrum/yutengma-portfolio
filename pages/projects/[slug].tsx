import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/blog';
import Tweet from 'components/Tweet';
import components from 'components/MDXComponents';
import { projectQuery, projectSlugsQuery } from 'lib/queries';
import { getTweets } from 'lib/twitter';
import { sanityClient, getClient } from 'lib/sanity-server';
import { mdxToHtml } from 'lib/mdx';
import { Post } from 'lib/types';

export default function ProjectPage({ post }: { post: Post }) {
  const StaticTweet = ({ id }) => {
    const tweet = post.tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout post={post}>
      <MDXRemote
        {...post.content}
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(projectSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { project } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug
  });
  
  if (!project) {
    return { notFound: true };
  }

  const { html, tweetIDs, readingTime } = await mdxToHtml(project.content);
  const tweets = await getTweets(tweetIDs);

  return {
    props: {
      post: {
        ...project,
        content: html,
        tweets,
        readingTime
      }
    }
  };
}
