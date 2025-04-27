import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  date: string;
  slug: string;
}

function BlogCard({ title, date, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="block border rounded p-4 hover:bg-gray-100">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{date}</p>
    </Link>
  );
}

export default BlogCard;