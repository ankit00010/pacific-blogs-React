import { useParams } from "react-router-dom";
import useFetches from "./useFetches";
import {
  Redirect,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetches("http://localhost:8000/blogs/" + id);
  const onDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {console.log("Hello")}
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={onDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
