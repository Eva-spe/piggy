import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
          <section className="colorlib-blog" data-section="blog">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Read</span>
              <h2 className="colorlib-heading">Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="blog-entry">
                <a href="blog.html" className="blog-img"><img src="images/xblog-1.jpg.pagespeed.ic.Vcb8V2nA_r.webp" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                <div className="desc">
                  <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                  <h3><a href="blog.html">Renovating National Gallery</a></h3>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
              <div className="blog-entry">
                <a href="blog.html" className="blog-img"><img src="images/xblog-2.jpg.pagespeed.ic.U7ixVyFoCL.webp" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                <div className="desc">
                  <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                  <h3><a href="blog.html">Wordpress for a Beginner</a></h3>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
              <div className="blog-entry">
                <a href="blog.html" className="blog-img"><img src="images/xblog-3.jpg.pagespeed.ic.3C_w-UtGyn.webp" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                <div className="desc">
                  <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3" /> 4</small></span>
                  <h3><a href="blog.html">Make website from scratch</a></h3>
                  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box">
              <p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
            </div>
          </div>
        </div>
      </section>
      </div>
      )
    }
  }