import BlogList from "./BlogList";
import useFetches from './useFetches';
const Home = () => {

 
  
const { data:blogs,isLoading,error}=useFetches('http://localhost:8000/blogs');

  return (
    <div className="home">
        {
            error && <div>{error}</div>
        }
        {
            isLoading &&  <div>Loading...</div>
        }
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
     
    </div>
  );
}

export default Home;
