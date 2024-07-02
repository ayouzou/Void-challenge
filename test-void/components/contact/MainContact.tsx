import React from 'react'
import NavConseil from '../conseil/NavConseil'
import Link from 'next/link'
import MainForm from './MainForm'

const MainContact = () => {
    return (
        <div className='bg-[#F5F5F5] relative  '>
            <div className='flex gap-2 items-center absolute bg-[#F5F5F5] w-full pl-10' >
                <Link href={'#'} className='text-[13.13px] font-normal leading-[24px] text-[#00000099]'>
                    Accueil
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fill-opacity="0.6" />
                    </svg>
                </Link>
                <Link href={'#'} className='text-[12.91px] font-normal leading-[24px] text-[#00000099]'>
                    Partenariat
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] text-[#00000099]'>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52075 5.78749L8.17822 7.13002L12.5391 11.5004L8.17822 15.8708L9.52075 17.2133L15.2337 11.5004L9.52075 5.78749Z" fill="black" fill-opacity="0.6" />
                    </svg>
                </Link>
            </div>
            <div className='w-full md:h-[168.25px] h-[208.25px] bg-[#FFFFFF] flex justify-center items-end '>
                <h1 className='text-[#000000] md:text-[45.56px] text-[34.17px] font-bold md:p-0 p-3 md:mt-3 mt-5'>
                    Contactez notre équipe Business Development
                </h1>
            </div>
            <MainForm/>
        </div>
    )
}

export default MainContact