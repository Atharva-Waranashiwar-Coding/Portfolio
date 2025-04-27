import { blogs } from "../data/blogsData";
import { Link } from "react-router-dom";

function Blogs() {
  // Sort blogs by date (latest first)
  const sortedBlogs = [...blogs].sort((a, b) => parseInt(b.date) - parseInt(a.date));

  return (
    <div className="bg-[#100001] text-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Insights & Blogs</h1>
          <p className="text-gray-400 text-md">
            Thoughts, experiences, and little pieces of my journey — both technical and personal.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex flex-col gap-10 animate-fade-in">
          {sortedBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.slug}`}
              className="bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors w-full p-8 rounded-2xl shadow-md cursor-pointer flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <p className="text-xs text-gray-400">{blog.date}</p>
                <h3 className="text-3xl font-bold">{blog.title}</h3>
                <p className="text-gray-400 text-sm">{blog.brief}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#CA0000] text-white text-xs px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Blogs;