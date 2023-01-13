import React from 'react'
import Image from 'next/image'
import search from '/public/imgs/icons/search.png';
function SearchBar() {
  return (
    <>
        <form className="d-flex search-banner justify-content-center" role="search">
            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
            <button type="submit"><Image src={search} alt="..." width={18} height={18}/></button>
        </form>
    </>
  )
}

export default SearchBar