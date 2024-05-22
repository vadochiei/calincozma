import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar2 from '../../components/Navbar2/Navbar2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
// import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
// import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
// import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
// import blog6 from '/public/images/blog-details/author.jpg'
// import gl1 from '/public/images/blog/Calin-Cozma-Sustinerea-mediului-antreprenorial-prin-festivaluri-si-expozitii.webp'
// import gl2 from '/public/images/blog/img-2.jpg'

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
                                        <Image src={BlogDetails?.screens} alt="" />
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
                                        <p>Știre preluată de pe: <Link href={BlogDetails?.sourceLink ?? '/blog'} target="_blank">{BlogDetails?.source ?? ' '}</Link></p>
                                    )}


                                    <Link href='/blog'>Vezi toate blogurile</Link>
                                    {/* <div className="gallery">
                                        <div>
                                            
                                            <Image src={gl1} alt="" />
                                        </div>
                                        <div>
                                            
                                            <Image src={gl2} alt="" />
                                        </div>
                                    </div> */}
                                </div>
                                
                                {/* <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href={PBlogDetails.slug ? PBlogDetails.slug : '/blog'}>

                                            <span className="post-control-link">Previous Post</span>
                                            <span className="post-name">{PBlogDetails.title ? PBlogDetails.title : 'Blog'}</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href={NBlogDetails.slug ? NBlogDetails.slug : '/blog'}>

                                            <span className="post-control-link">Next Post</span>
                                            <span className="post-name">{NBlogDetails.title ? NBlogDetails.title : 'Blog'}</span>

                                        </Link>
                                    </div>
                                </div> */}
                                    

                                {/* <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Comments</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1" id="comment-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>Lily Watson <span className="comments-date">January
                                                                            12,2022 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I will give you a complete account of the system,
                                                                            and expound the actual teachings of the great
                                                                            explorer of the truth, </p>
                                                                        <div className="comments-reply">
                                                                            <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li className="comment">
                                                                <div>
                                                                    <div className="comment-theme">
                                                                        <div className="comment-image"><Image src={blog5} alt="" /></div>
                                                                    </div>
                                                                    <div className="comment-main-area">
                                                                        <div className="comment-wrapper">
                                                                            <div className="comments-meta">
                                                                                <h4>John Abraham <span className="comments-date">January
                                                                                    12,2022 At 9.00am</span></h4>
                                                                            </div>
                                                                            <div className="comment-area">
                                                                                <p>I will give you a complete account of the
                                                                                    system, and expound the actual teachings
                                                                                    of the great explorer of the truth, </p>
                                                                                <div className="comments-reply">
                                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2022
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>I will give you a complete account of the system, and
                                                                    expound the actual teachings of the great explorer of
                                                                    the truth, </p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Post Comments</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Website" type="url" />
                                                <input placeholder="Name" type="text" />
                                                <input placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Post Comment" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
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
