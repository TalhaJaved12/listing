import React from 'react';
import Image from 'next/image';

function BodySection() {
  return (
    <>
      <section className="category">
        <div className="container">
          <h3
            className="category-heading-text"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            OUR MAIN<span class="orange">&nbsp;CATEGORIES</span>
            <Image
              src="/imgs/line.png"
              alt="line"
              height={34}
              width={268}
              style={{
                position: 'absolute',
                width: '268px',
                right: '-10px',
                bottom: '-18px',
              }}
            />
          </h3>
          <div className="row">
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  <Image
                    src="/imgs/resturant.png"
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
                <div className="cat-box-img">
                  <Image
                    src="/imgs/shopping.png"
                    alt="shopping logo"
                    height={50}
                    width={50}
                  />
                </div>
                <h5>shopping</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  {/* <Image src={night} alt="night logo" height={50} width={50} /> */}
                  <Image src="/imgs/night.png" alt="night logo" height={50} width={50} />
                </div>
                <h5>nightlife</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  <Image
                    src="/imgs/active.png"
                    alt="active logo"
                    height={50}
                    width={50}
                  />
                </div>
                <h5>active life</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  <Image
                    src="/imgs/beauty.png"
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
                  <Image src="/automotive.png" alt="Logo" height={50} width={50} />{' '}
                </div>
                <h5>Automotive</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  <Image src="/imgs/home.png" alt="home logo" height={50} width={50} />{' '}
                </div>
                <h5>Home Services</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cat-box">
                <div className="cat-box-img">
                  <Image src="/imgs/more.png" alt="more logo" height={50} width={50} />
                </div>
                <h5>more</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BodySection;
