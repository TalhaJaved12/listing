import React from 'react'
import Image from 'next/image';
import arrowdown from '/public/imgs/icons/arrowdown.png';
import banner from '/public/imgs/banner.png';
import search from '/public/imgs/icons/search.png';
import SearchBar from './SearchBar';

function Banner() {
  return (
    <>
        <section className="banner">
            <div className="banner-content" style={{backgroundImage: `url(${banner.src})`}}>
                <div className="container">
                    <h2 className="uppercase"> Lets <span className="orange">Sort out</span> Your problems</h2>
                    <div className="nav-banner">
                        <ul className="sub-nav-banner d-flex">
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">AUTO SERVICES 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">RESTURANTS 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">TOP DESTINATIONS 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">HOME SERRVICES 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button">more 
                                <Image src={arrowdown} alt="..." width={11} height={7}/>

                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Action</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex search-banner justify-content-center" role="search">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
                            <button type="submit"><Image src={search} alt="..." width={18} height={18}/></button>
                        </form> */}
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner