
import Link from 'next/link'
import React from 'react'

const AsideLinks = () => {
  return (
    <ul className="m-3 p-0 py-3 asideLinks rounded-4 ">
      <Link href="tracks" className=" asideLink text-white col-12 " >
         <li className=' py-2 ps-5 asideLinkListItem'>
         <i className="bi bi-music-note-beamed" style={{color:"#0057e7"}}></i>
         <span className=' m-0 ms-2 fs-75'>Tracks</span>
         </li>
      </Link> 
      <Link href="albums" className=" asideLink text-white col-12 " >
         <li className=' py-2 ps-5 asideLinkListItem'>
         <i className="bi bi-disc" style={{color:"#d62d20"}}></i>
         <span className=' m-0 ms-2 fs-75'>Albums</span>
         </li>
      </Link> 
      <Link href="artists" className=" asideLink text-white col-12 " >
         <li className=' py-2 ps-5 asideLinkListItem'>
         <i className="bi bi-people-fill" style={{color:"#ffa700"}}></i>
         <span className=' m-0 ms-2 fs-75'>Artists</span>
         </li>
      </Link> 
      <Link href="playlists" className=" asideLink text-white col-12 " >
         <li className=' py-2 ps-5 asideLinkListItem'>
         <i className="bi bi-music-note-list" style={{color:"#0F9D58"}}></i>
         <span className=' m-0 ms-2 fs-75'>Playlists</span>
         </li>
      </Link> 

    </ul>
  )
}

export default AsideLinks

