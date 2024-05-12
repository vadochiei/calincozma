import React , { useState }  from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import VideoModal from '../ModalVideo/VideoModal'
import ReactPaginate from 'react-paginate';
import blogs from '../../api/blogs'
import Image from 'next/image.js';


const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const BlogList = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const blogsPerPage = 3;
    const offset = currentPage * blogsPerPage;
    const currentBlogs = blogs.slice(offset, offset + blogsPerPage);
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    return(
        <section className="wpo-blog-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="wpo-blog-content">
            {currentBlogs.map((blog, index) => (
              <div className={`post ${blog.blClass}`} key={index}>
                <div className="entry-media">
                                         <Image src={blog.screens} alt=""/>
                                     </div>
                                     <div className="entry-meta">
                                         <ul>
                                             <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.author}</Link> </li>
                                         </ul>
                                     </div>
                                     <div className="entry-details">
                                         <h3><Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.title}</Link></h3>
                                         <p>{blog.description}.</p>
                                         <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`} className="read-more">Află mai multe...</Link>
                                     </div>
              </div>
            ))}

            <div className="pagination-wrapper pagination-wrapper-left">
              <ReactPaginate
                previousLabel={<i className="fi ti-angle-left"></i>}
                nextLabel={<i className="fi ti-angle-right"></i>}
                breakLabel={'...'}
                pageCount={Math.ceil(blogs.length / blogsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'pg-pagination'}
                activeClassName={'active'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

     )
        
}

export default BlogList;

// import React from 'react';
// import Link from 'next/link'
// import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
// import VideoModal from '../ModalVideo/VideoModal'

// import blogs from '../../api/blogs'
// import Image from 'next/image.js';


// const ClickHandler = () =>{
//     window.scrollTo(10, 0);
//  }

// const BlogList = (props) => {
    
//     return(
//         <section className="wpo-blog-pg-section section-padding">
//             <div className="container">
//                 <div className="row">
//                         <div className="wpo-blog-content">
//                             {blogs.map((blog, bitem) => (
//                                 <div className={`post  ${blog.blClass}`}key={bitem}>
//                                     <div className="entry-media">
//                                         <Image src={blog.screens} alt=""/>
//                                     </div>
//                                     <div className="entry-meta">
//                                         <ul>
//                                             <li><i className="fi flaticon-user"></i> By <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.author}</Link> </li>
//                                         </ul>
//                                     </div>
//                                     <div className="entry-details">
//                                         <h3><Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`}>{blog.title}</Link></h3>
//                                         <p>{blog.description}.</p>
//                                         <Link onClick={ClickHandler} href={'/blog-single-fullwidth/[slug]'} as={`/blog-single-fullwidth/${blog.slug}`} className="read-more">Află mai multe...</Link>
//                                     </div>
//                                 </div>
//                             ))}

//                             <div className="pagination-wrapper pagination-wrapper-left">
//                                 <ul className="pg-pagination">
//                                     <li>
//                                         <Link href="/blog-left-sidebar" aria-label="Previous">
//                                             <i className="fi ti-angle-left"></i>
//                                         </Link>
//                                     </li>
//                                     <li className="active"><Link href="/blog-left-sidebar">1</Link></li>
//                                     <li><Link href="/blog-left-sidebar">2</Link></li>
//                                     <li><Link href="/blog-left-sidebar">3</Link></li>
//                                     <li>
//                                         <Link href="/blog-left-sidebar" aria-label="Next">
//                                             <i className="fi ti-angle-right"></i>
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                 </div>
//             </div>
//         </section>

//      )
        
// }

// export default BlogList;
