import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogsData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState<string>("");

  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (blog) {
      fetch(blog.file)
        .then((res) => res.text())
        .then((text) => setMarkdown(text));
    }
  }, [blog]);

  if (!blog) return <div className="text-white p-8">Blog not found!</div>;

  return (
    <div className="bg-[#100001] text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-[#CA0000] hover:underline font-semibold"
        >
          ← Back to Blogs
        </button>

        {/* Title and Info */}
        <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
        <p className="text-gray-400 mb-8">
          By {blog.author} | {blog.date}
        </p>

        {/* Markdown Content */}
        <article className="prose prose-invert max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>

      </div>
    </div>
  );
}

export default BlogDetail;