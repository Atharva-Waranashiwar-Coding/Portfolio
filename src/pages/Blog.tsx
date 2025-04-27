import { Buffer } from 'buffer';

// This sets Buffer globally for gray-matter to use
(window as any).Buffer = Buffer;

import { useEffect, useState } from 'react';
import matter from 'gray-matter';
import BlogCard from '../components/BlogCard';

interface PostData {
  slug: string;
  title: string;
  date: string;
}

function Blog() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const files = import.meta.glob('../posts/*.md', { as: 'raw' });

        const postsData: PostData[] = [];

        for (const path in files) {
          const content = await files[path]();
          const meta = matter(content);
          const slug = path.split('/').pop()?.replace('.md', '') ?? 'no-slug';

          postsData.push({
            slug,
            title: meta.data.title || "Untitled Post",
            date: meta.data.date || "Unknown Date",
          });
        }

        // Sort posts by date (latest first)
        postsData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setPosts(postsData);
      } catch (err) {
        console.error("Error loading blog posts", err);
        setError('Failed to load blogs.');
      }
    };

    loadPosts();
  }, []);

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available yet.</p>
        ) : (
          posts.map((post) => (
            <BlogCard key={post.slug} title={post.title} date={post.date} slug={post.slug} />
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;