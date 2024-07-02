import React from 'react'
import Separator from './Separator'
import Link from 'next/link'
import Carousel from './Carousel'
import PressReleasesList from './PressReleasesList'

const Articles = () => {
    return (
        <div className='  md:mx-[160px] mx-[5px] pt-[120px]  h-full bg-[#FFFFFF]  '>
            {/* <Separator /> */}
            <hr className='md:w-full w-full h-[2px] text-[#C9C9C9] bg-[#C9C9C9]  '></hr>
            <div className='md:flex md:flex-row flex flex-col md:justify-between  md:items-center md:pt-5' >
                <h2 className='md:w-[216.53px] w-[208.46px]  md:h-[54px] h-[42px]  font-bold md:text-[34.31px] text-[26.69px] md:leading-[54px] leading-[42px] text-[#000000]'>
                    Entreprise Today
                </h2>
                <Link href='#' className='flex items-center gap-4 md:pt-10 pt-11 md:w-[328.49px] w-[340.44px]  md:h-[36px] h-[30px]  font-bold md:text-[22.13px] text-[18.44px] md:leading-[36px] leading-[30px]  text-[#000000]'>
                    Lisez nos derniers articles
                    <svg className='md:w-[21px] w-[17.5px] md:h-[18.01px] h-[15.01px]  text-[#7A00E6]' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.0594 10.1894C21.6453 9.60342 21.6453 8.65186 21.0594 8.06592L13.5594 0.565918C12.9734 -0.0200195 12.0219 -0.0200195 11.4359 0.565918C10.85 1.15186 10.85 2.10342 11.4359 2.68936L16.3812 7.62998H2C1.17031 7.62998 0.5 8.30029 0.5 9.12998C0.5 9.95967 1.17031 10.63 2 10.63H16.3766L11.4406 15.5706C10.8547 16.1565 10.8547 17.1081 11.4406 17.694C12.0266 18.28 12.9781 18.28 13.5641 17.694L21.0641 10.194L21.0594 10.1894Z" fill="#7A00E6" />
                    </svg>
                </Link>
            </div>

             <Carousel/>
        </div>
    )
}

export default Articles