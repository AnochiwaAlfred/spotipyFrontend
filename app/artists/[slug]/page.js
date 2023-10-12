


export default function Page({ params }) {
    return (
    <div className='col-12 h-100'>
        My Post: {params.slug}
      <h1 className='my-4'>Artist's Name</h1>
      
      
      
      
      
      <div className='row mt-4 h-100 itemList mx-2'>
          <div className='col-2 mb-4 me-4 p-0 itemContainer'>
              <div className='col-12 itemImageContainer' style={{ 
                background: `url(hgvhkbbj)`, backgroundRepeat:'no-repeat', 
                backgroundSize: "cover", backgroundPosition: "cover" 
              }}></div>
              <div href='#' className='col-12 py-2 px-1'>
                <Link href='#' className='col-12 itemText'>
                  <p className='itemTextTitle p-0 my-1'>Album Name</p>
                  <p className='itemTextInfo p-0 m-0 text-white-50'>Number of Tracks</p>
                </Link>
              </div>
          </div>
      </div>



    </div>
    )
  }