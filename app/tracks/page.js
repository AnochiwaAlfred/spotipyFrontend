

import React from 'react'

const page = () => {
  const itemImageContainerStyle = {
    background: 'url(/square1.jpeg)',
  }
  return (
    <div className='col-12 h-100'>

      <h1 className='my-4'>Tracks</h1>

      <div className='col-12 mt-4 h-100 itemList'>
          <div className='col-2 itemContainer' >
              <div className='col-12 itemImageContainer' style={itemImageContainerStyle}></div>
              <div className='col-12 py-2 px-1 itemText'>
                <p className='itemTextTitle p-0 my-1'>Track</p>
                <p className='itemTextInfo p-0 m-0 text-white-50'>Artist</p>
              </div>
          </div>
      </div>

    </div>
  )
}

export default page