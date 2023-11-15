import React from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {

  return (
    <>
    <div className="pager-header" id='blog'>
        <div className="container">
            <div className="page-content">
                <h2>Blog Single</h2>
                <p>Help today because tomorrow you may be the one who <br/>needs more helping!</p>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active">Blog</li>
                </ol>
            </div>
        </div>
    </div>
    <section className="blog-section bg-grey padding">
        <div className="container">
        <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-lg-9 sm-padding">
                    <div className="blog-items single-post row">
                        <h2>Standard single blog post with image.</h2>
                        <div className="meta-info">
                            <span>
                                <i className="ti-user"></i> Written By <Link href="#">David Cameroon</Link>
                            </span>
                            <span>
                                <i className="ti-bookmark"></i> Tagged As <Link href="#">Wordpress Development</Link>
                            </span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only centuries, but also the electronic more typesetting, remaining essentially unchanged.Nullam id dolor ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.This time is more Cras justo dapibus ac facilisis not only centuriemen, business type but also the in typesetting industry.</p>
                          
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Nullam id dolor ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                        
                        
                        
                       
                    </div>
                </div>
                <div className="col-lg-3 sm-padding">
                    <div className="sidebar-wrap">
                     
                      
                        <div className="sidebar-widget m-80">
                            <h4>Recent Posts</h4>
                            <ul className="recent-posts">
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/images/rel-post-1.jpg"} alt="blog post"/>
                                    <div>
                                        <h4><Link href="#">Standard post</Link></h4>
                                        <span className="date"><i className="fa fa-clock-o"></i> January 01.2018</span>   
                                    </div>                 
                                </li>
                                <li>
                                    <img src="images/rel-post-2.jpg" alt="blog post"/>
                                    <div>
                                        <h4><Link href="#">Post with small image</Link></h4>
                                        <span className="date"><i className="fa fa-clock-o"></i> January 01.2018</span>   
                                    </div>                 
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/images/rel-post-3.jpg"} alt="blog post"/>
                                    <div>
                                        <h4><Link href="#">Quote post</Link></h4>
                                        <span className="date"><i className="fa fa-clock-o"></i> January 01.2018</span>   
                                    </div>                 
                                </li>
                                <li>
                                    <img src="images/rel-post-4.jpg" alt="blog post"/>
                                    <div>
                                        <h4><Link href="#">Standard video post</Link></h4>
                                        <span className="date"><i className="fa fa-clock-o"></i> January 01.2018</span>   
                                    </div>                 
                                </li>
                                <li>
                                    <img src={process.env.PUBLIC_URL + "/images/rel-post-5.jpg"} alt="blog post"/>
                                    <div>
                                        <h4><Link href="#">gallery post</Link></h4>
                                        <span className="date"><i className="fa fa-clock-o"></i> January 01.2018</span>   
                                    </div>                 
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
</>
  )
}

export default Blog
