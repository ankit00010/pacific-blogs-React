import { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Creates = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setauthor] = useState("scientist");
const[isPending,setIsPending]=useState(false);
const history=useHistory();
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    const blog={title,body,author}
    fetch('http://localhost:8000/blogs',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(blog
            )
    })
    .then(()=>{
        console.log('New Blog added');
        setIsPending(true);
       history.push('/');
    })
    .catch((err)=>{
        console.log(err);
    })

    
  }
  return (
    <div className="create">
      <h2>Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author :</label>
        <select
          value={author}
          onChange={(e) => {
            setauthor(e.target.value);
          }}
        >
          <option value="scientist">scientist</option>
          <option value="programmer">programmer</option>
          <option value="artist">artist</option>
          <option value="writer">writer</option>
          <option value="designer">designer</option>
        </select>

        {isPending && <button>Adding Blog...</button>}
        {!isPending && <button>Add Blog</button>} 
        
      </form>
      {/* <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
    </div>
  );
};

export default Creates;
