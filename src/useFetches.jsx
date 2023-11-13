
import {useState,useEffect} from 'react';
const useFetches = (url) => {
     
         const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const[error,setError]=useState(null);
  
    // Define an async function to fetch data
  const fetchData = () => {
    const abortContent=new AbortController();
    setTimeout(() => {
        fetch(url,{signal:abortContent.signal})
        .then((response) => {
            if (!response.ok) {
                throw  Error('Network response was not ok');
              }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError(null);
        })
        .catch(err => {

            if (err.name="AbortError") {
                console.log('Fetch aborted');
            } else {
                setError(err.message);
                setisLoading(false);
            }

          // Handle the error, e.g., set an error state or display an error message.
        })
    }, 1000);
   
  };
  
  useEffect(() => {
    // Fetch data initially when the component mounts
    fetchData();
  }, [url]);
    
    
    return {data,isLoading,error};
};

 
export default useFetches;