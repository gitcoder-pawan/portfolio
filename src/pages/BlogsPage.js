import React from 'react'
import Title from "../Components/about/Title";
import blogs from "../Components/allblogs";
const BlogsPage = () => {
    return (
        <>
        <div className="BlogsPage">
            <div className="b-title">
                <Title title={'Recent Blogs'} />
            </div>
            <div className="blogs-container">
                {blogs.map((blog) => {
                    return (
                        <>
                            <div className="blog-container">
                                <div className="blog-img">
                                    <img src={blog.image} alt="" />
                                </div>
                                <div className="blog-details">
                                    <a href={blog.link}>{blog.title}</a>
                                    
                                </div>
                            </div>
                            
                        </>
                    );

                })}
            </div>
        </div>
        </>
    )
}

export default BlogsPage
