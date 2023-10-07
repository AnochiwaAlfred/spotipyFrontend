"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'



const Page = () => {
  const itemImageContainerStyle = {
    background: 'url(/square1.jpeg)'
  }

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://spotipy.onrender.com/api/v1/artists/getAllArtists')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArtists(data);
        setLoading(false); // Data has been fetched, set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  console.log(artists);
 

  return (
    <div className='col-12 h-100'>
      <h1 className='my-4'>Artists</h1>
      {loading ? (
        <p>Loading Artists...</p>
      ) : (
      <div className='row mt-4 h-100 itemList mx-2'>
      {artists.map((artist) => (
          <div className='col-2 mb-4 me-4 p-0 itemContainer' key={artist.id}>
              <div className='col-12 itemImageContainer' style={{ 
                background: `url(${artist.image})`, backgroundRepeat:'no-repeat', 
                backgroundSize: "cover", backgroundPosition: "cover" 
              }}></div>
              <div href={`/artist/${artist.id}`} className='col-12 py-2 px-1'>
                <Link href={`/artist/${artist.id}`} className='col-12 itemText'>
                  <p className='itemTextTitle p-0 my-1'>{artist.stageName}</p>
                  <p className='itemTextInfo p-0 m-0 text-white-50'> {artist.username}</p>
                </Link>
              </div>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}

export default Page