import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    const prevBlogId = BlogDetails?.id-1
    
    const PBlogDetails = blogs.find(item => item.id == prevBlogId)
    const findPreviousBlog = async (id) => {
        let prevId = id - 1;
        let prevBlog = blogs.find(item => item.id === prevId);

        return prevBlog;
    };
    const nextBlogId = prevBlogId + 2
    const NBlogDetails = blogs.find(item => item.id == nextBlogId)



    return (
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={BlogDetails?.title} pagesub="blog" />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                        <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails?.screens} alt={BlogDetails?.title} />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi ti-user"></i> By <Link href="/">{BlogDetails?.author}</Link> </li>
                                            {/* <li><i className="fi ti-comment-alt"></i> Comments {PBlogDetails?.title}</li> */}
                                            {/* <li><i className="fi ti-comment-alt"></i> Comments {BlogDetails?.comment}</li> */}
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>{BlogDetails?.text}</p>
                                    {BlogDetails?.quote && (
                                        <blockquote>
                                            {BlogDetails.quote}
                                        </blockquote>
                                    )}

                                    <p>{BlogDetails?.text2}</p>
                                    <br></br>
                                    {/* {BlogDetails?.souce && (
                                        <p>
                                            Știre preluată de pe: <Link href={BlogDetails?.sourceLink}>{BlogDetails?.source}</Link>
                                        </p>
                                    )}  */}
                                    {BlogDetails?.source && (
                                        <p>Știre preluată de pe: <Link style={{ color: 'darkblue' }} href={BlogDetails?.sourceLink ?? '/blog'} target="_blank">{BlogDetails?.source ?? ' '}</Link></p>
                                    )}


                                    <Link href='/blog' style={{ color: 'darkblue' }}>Vezi toate blogurile</Link>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
            
        </Fragment>
    )
};
export default BlogSingle;
