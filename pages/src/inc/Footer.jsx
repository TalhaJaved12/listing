import React from 'react'

function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="comm-footer-navs">
                                    <a href="#" class="brand-footer"><img src="./imgs/LOGO.png" alt="..."/></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet fermentum enim.
                                        Sed lorem eros, sollicitudin nec nisl sit amet, iaculis mollis ligula.</p>
                                    <div class="footer-social-icons d-none">
                                        <a href="#" class="ico-anchor"><img src="" alt="..."/></a>
                                        <a href="#" class="ico-anchor"><img src="" alt="..."/></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="comm-footer-navs">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Blog</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Developers</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="comm-footer-navs">
                                    <h4>Languages</h4>
                                    <ul>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                    <h4 class="mt-2">Countries</h4>
                                    <ul>
                                        <li><a href="#">United States</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="comm-footer-navs">
                                    <h4>Contact</h4>
                                    <ul>
                                        <li><a href="#">1 Sleepy Hollow Drive Wilkes Barre PA 18702</a></li>
                                        <li><a href="#">info@newlogo.net</a></li>
                                        <li><a href="#">+1-202-555-0189</a></li>
                                        <li><a href="#">+1-202-555-0116</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lower-footer">
                    © 2023 newlogo. All Rights Reserved
                </div>
            </footer>
        </>
    )
}

export default Footer