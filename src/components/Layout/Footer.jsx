import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 widget-footer">
                            <h5>About Store</h5>
                            <img src="" className="img-responsive space10" alt="" />
                            <p>
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat facere possimus
                            </p>
                            <div className="clearfix" />
                            <ul className="f-social">
                                <li>
                                    <a href="https://www.facebook.com" className="fa fa-facebook" />
                                </li>
                                <li>
                                    <a href="https://www.twitter.com" className="fa fa-twitter" />
                                </li>
                                <li>
                                    <a href="https://feedburner.google.com" className="fa fa-rss" />
                                </li>
                                <li>
                                    <a href="mailto:email@website.com" className="fa fa-envelope" />
                                </li>
                                <li>
                                    <a href="https://www.pinterest.com" className="fa fa-pinterest" />
                                </li>
                                <li>
                                    <a href="https://www.instagram.com" className="fa fa-instagram" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 widget-footer">
                            <h5>Latest Tweets</h5>
                            <div className="tweet-info">
                                <div id="twitterfeed" />
                            </div>
                        </div>
                        <div className="col-md-3 widget-footer">
                            <h5>Product tags</h5>
                            <ul className="widget-tags">
                                <li>
                                    <a href="./categories-grid.html">fashion</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">sports</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">business</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">news</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">night</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">freedom</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">design</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">miracle</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">gallery</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">collection</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">pen</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">pants</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">jeans</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">photos</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">oscar</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">smile</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">love</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">sunshine</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">luxury</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">forever</a>
                                </li>
                                <li>
                                    <a href="./categories-grid.html">inlove</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 widget-footer">
                            <h5>Newsletter</h5>
                            <p>Sign up for our newsletter and promotions</p>
                            <form className="newsletter">
                                <input type="text" placeholder="Enter your email address here." />
                                <button type="submit">Subscribe !</button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
  )
}

export default Footer