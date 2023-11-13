
import {Link} from 'react-router-dom';
const BlogList = ({blogs,title}) => {
    


    return (  


        <div className="blg-list">
            <br /><br />
                <p> {title}</p>
             {blogs.map((blog) => (
               
                
                <div className='blog-preview' key={blog.id}>
                   <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    </Link>

                </div>
            ))}
        </div>
    );
}
 
export default BlogList;