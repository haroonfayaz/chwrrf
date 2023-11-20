import React, { useEffect } from 'react';
import Blog from '../Components/Blog';
import Footer from '../Components/Footer';


const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Blog/>
    <Footer/>
    </>
  )
}

export default BlogPost
