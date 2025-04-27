import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    import(`../posts/${slug}.md?raw`)
      .then((res) => setContent(res.default))
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="p-8">
      <div className="prose max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogDetails;