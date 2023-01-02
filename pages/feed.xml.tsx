import RSS from 'rss';
import { sanityClient } from 'lib/sanity-server';
import { indexQuery, indexProjectQuery } from 'lib/queries';

export async function getServerSideProps({ res }) {
  const feed = new RSS({
    title: 'Ryan Ma',
    site_url: 'https://yutengma.me',
    feed_url: 'https://yutengma.me/feed.xml'
  });

  const allPosts = await sanityClient.fetch(indexQuery);
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://yutengma.me/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt
    });
  });

  const allProjects = await sanityClient.fetch(indexProjectQuery);
  allProjects.map((project) => {
    feed.item({
      title: project.title,
      url: `https://yutengma.me/projects/${project.slug}`,
      date: project.date,
      description: project.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
