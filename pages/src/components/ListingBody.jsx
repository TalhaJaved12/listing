import Image from 'next/image';
import React from 'react'
import Map from './Map'
import filter from '/public/imgs/icons/filter.png';
import listingOne from '/public/imgs/listingOne.png';
import review from '/public/imgs/review.png';
import verify from '/public/imgs/verify.png';
import service from '/public/imgs/service.png';
import discount from '/public/imgs/discount.png';
import message from '/public/imgs/icons/message.png';
import graph from '/public/imgs/icons/search.png';
import Paginaton from './Paginaton';


function ListingBody() {
  return (
    <>
            <section className="listings">
        <div className="custom-listing-container">
            <div className="listing-content">
                <div className="row">
                    <div className="col-md-8">
                        <div className="filters-listing d-flex">
                            <p>Over 1,000 homes</p>
                            <button className="ms-auto"><Image src={filter} alt="..." width={14} height={14}/>Filters</button>
                        </div>
                        <div className="list-box d-flex">
                            <div className="list-box-thumb"><Image src={listingOne} alt="..." width={150} height={150}/></div>
                            <div className="list-text">
                                <div className="d-flex title-address">
                                    <div className="title-review-status">
                                        <h5>24-7 Rooter & Plumbing</h5>
                                        <div className="review-total">
                                            <p><Image src={review} alt="..." width="14" height={14}/> 5.0 ·&nbsp;<span>12 reviews</span></p>
                                            <label className="d-inline-block">Plumbing</label>
                                        </div>
                                    </div>
                                    <p className="ms-auto">1070 Quesada Ave Bayview-Hunters Point</p>
                                </div>
                                <div className="list-services mt-2 d-flex">
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={verify} alt="..." width={14} height={14}/>
                                        <p>Verified License</p>
                                    </div>
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={service} alt="..." width={14} height={14}/>
                                        <p>Emergency services</p>
                                    </div>
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={discount} alt="..." width={14} height={14}/>
                                        <p>Discounts available</p>
                                    </div>
                                </div>
                                <div className="list-info d-flex">
                                    <Image src={message} alt="..." width="16" height="16"/>
                                    <p>“In an industry where the majority of companies really dont seem to care about the Customer, 24/7 Rooter & Plumbing made me feel important and valued. After I told Herb about the…”</p>
                                </div>
                                <div className="respond-request d-flex align-items-center">
                                    <div className="respond-text">
                                        <p>Responds in about<span>10 minutes</span></p>
                                        <span><Image className="me-1" src={graph} alt="..." width="16" height="16"/>1,255 locals recently requested a quote</span>
                                    </div>
                                    <button className="ms-auto">Request a Quote</button>
                                </div>
                            </div>
                        </div>
                        <div className="list-box d-flex">
                            <div className="list-box-thumb"><Image src={listingOne} alt="..." width={150} height={150}/></div>
                            <div className="list-text">
                                <div className="d-flex title-address">
                                    <div className="title-review-status">
                                        <h5>24-7 Rooter & Plumbing</h5>
                                        <div className="review-total">
                                            <p><Image src={review} alt="..." width="14" height={14}/> 5.0 ·&nbsp;<span>12 reviews</span></p>
                                            <label className="d-inline-block">Plumbing</label>
                                        </div>
                                    </div>
                                    <p className="ms-auto">1070 Quesada Ave Bayview-Hunters Point</p>
                                </div>
                                <div className="list-services mt-2 d-flex">
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={verify} alt="..." width={14} height={14}/>
                                        <p>Verified License</p>
                                    </div>
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={service} alt="..." width={14} height={14}/>
                                        <p>Emergency services</p>
                                    </div>
                                    <div className="d-flex align-items-center service-box">
                                        <Image src={discount} alt="..." width={14} height={14}/>
                                        <p>Discounts available</p>
                                    </div>
                                </div>
                                <div className="list-info d-flex">
                                    <Image src={message} alt="..." width="16" height="16"/>
                                    <p>“In an industry where the majority of companies really dont seem to care about the Customer, 24/7 Rooter & Plumbing made me feel important and valued. After I told Herb about the…”</p>
                                </div>
                                <div className="respond-request d-flex align-items-center">
                                    <div className="respond-text">
                                        <p>Responds in about<span>10 minutes</span></p>
                                        <span><Image className="me-1" src={graph} alt="..." width="16" height="16"/>1,255 locals recently requested a quote</span>
                                    </div>
                                    <button className="ms-auto">Request a Quote</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="theme-pagination">
                            <ul>
                                <li><a href="#"><Image src={arrowLeft} alt="..." width="6" height="12"/></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#"><Image src={arrowRight} alt="..." width="6" height="12"/></a></li>
                            </ul>
                        </div> */}
                        <Paginaton/>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="dummy-map">
                            <img src="imgs/maps.png" alt="...">
                        </div>
                    </div> */}
                    <Map/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ListingBody