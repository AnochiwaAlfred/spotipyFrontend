
import Link from 'next/link'
import React from 'react'

const AsideLinks = () => {
  return (
    <ul className="m-3 p-0 asideLinks ">
      <Link href="#" className=" asideLink text-white col-12" >
         <li className=' py-1 ps-5 asideLinkListItem'>
         <i class="bi bi-music-note-beamed" style={{color:"#0057e7"}}></i>
         <span className=' m-0 ms-2 fs-75'>Tracks</span>
         </li>
      </Link> 
      <Link href="#" className=" asideLink text-white col-12" >
         <li className=' py-1 ps-5 asideLinkListItem'>
         <i class="bi bi-disc" style={{color:"#d62d20"}}></i>
         <span className=' m-0 ms-2 fs-75'>Albums</span>
         </li>
      </Link> 
      <Link href="#" className=" asideLink text-white col-12" >
         <li className=' py-1 ps-5 asideLinkListItem'>
         <i class="bi bi-people-fill" style={{color:"#ffa700"}}></i>
         <span className=' m-0 ms-2 fs-75'>Artists</span>
         </li>
      </Link> 
      <Link href="#" className=" asideLink text-white col-12" >
         <li className=' py-1 ps-5 asideLinkListItem'>
         <i class="bi bi-music-note-list" style={{color:"#0F9D58"}}></i>
         <span className=' m-0 ms-2 fs-75'>Playlists</span>
         </li>
      </Link> 


    </ul>
  )
}

export default AsideLinks

