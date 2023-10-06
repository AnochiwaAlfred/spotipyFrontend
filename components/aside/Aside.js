

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HorizontalRule from '../components/HorizontalRule'
import AsideLinks from './AsideLinks'

const Aside = () => {
  return (
    <div className='col-3'>
        <Link href="#" id='logoDiv' className='d-flex justify-content-center align-items-center'>
            <Image 
                className='animate__animated animate__pulse animate__slower animate__infinite'
                src='/logo2.png' 
                width='168' 
                height='105' 
                alt="Logo"
            />
        </Link>
        <HorizontalRule />
        <AsideLinks />
    </div>
  )
}

export default Aside