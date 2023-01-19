import React from 'react'
import line from '/public/imgs/line.png'
import resturant from '/public/imgs/resturant.png'
import shopping from '/public/imgs/shopping.png'
import night from '/public/imgs/night.png'
import active from '/public/imgs/active.png'
import beauty from '/public/imgs/beauty.png'
import automotive from '/public/imgs/automotive.png'
import home from '/public/imgs/home.png'
import more from '/public/imgs/more.png'
import Image from 'next/image'



function BodySection() {
  return (
    <>
        <section className="category">
        <div className="container">
            <h3 className="category-heading-text" style={{display: 'flex', flexDirection: 'row'}}>OUR MAIN<span class="orange">&nbsp;CATEGORIES</span> 

            <Image 
                src={line} 
                alt="line"
                height={34} 
                width={268}
                style={{position: "absolute",
                    width: "268px",
                    right: "-10px",
                    bottom: "-18px",
                    
                }}
            />
                </h3>
            <div className="row">
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <Image 
                src={resturant} 
                alt="restaurant logo"
                height={50} 
                width={50}
            />
                            </div>
                        <h5>resturant</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><Image 
                src={shopping} 
                alt="shopping logo"
                height={50} 
                width={50}
            /></div>
                        <h5>shopping</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><Image 
                src={night} 
                alt="night logo"
                height={50} 
                width={50}
            /></div>
                        <h5>nightlife</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img"><Image 
                src={active} 
                alt="active logo"
                height={50} 
                width={50}
            /></div>
                        <h5>active life</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <Image 
                src={beauty} 
                alt="beauty logo"
                height={50} 
                width={50}
            />
                            </div>
                        <h5>Beauty & Spa</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <Image 
                            src={automotive} 
                            alt="Logo"
                            height={50} 
                            width={50}
            />                        </div>
                        <h5>Automotive</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <Image 
                src={home} 
                alt="home logo"
                height={50} 
                width={50}
            />                        </div>
                        <h5>Home Services</h5>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="cat-box">
                        <div className="cat-box-img">
                        <Image 
                src={more} 
                alt="more logo"
                height={50} 
                width={50}
            />
                        </div>
                        <h5>more</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default BodySection