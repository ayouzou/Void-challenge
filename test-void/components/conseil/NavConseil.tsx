import Link from 'next/link'
import React from 'react'

const NavConseil = () => {
    return (
        <div className='relative'>
            <div className='flex gap-2 items-center absolute bg-[#FFFFFF] w-full pl-10' >
                <Link href={'#'} className='text-[13.13px] font-normal leading-[24px] text-[#00000099]'>
                    Accueil
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fillOpacity="0.6" />
                    </svg>
                </Link>
                <Link href={'#'} className='text-[12.91px] font-normal leading-[24px] text-[#00000099]'>
                    Notre Entreprise
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fillOpacity="0.6" />
                    </svg>
                </Link>
                <Link href={'#'} className='text-[12.91px] font-normal leading-[24px] text-[#00000099]'>
                    Gouvernance
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fillOpacity="0.6" />
                    </svg>
                </Link>
            </div>
            <div className='w-full md:h-[168.25px] h-[188.25px] bg-[#FFFFFF] flex justify-center items-end '>
                <h1 className='text-[#000000] text-[45.56px] font-bold md:p-0 p-3 mt-3'>
                    Conseil d'Administration
                </h1>
            </div>
        </div>
    )
}

export default NavConseil