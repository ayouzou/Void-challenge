import Link from 'next/link'
import React from 'react'
import CardListPress from './CardListPress'

const MainCommunication = () => {
    return (
        <div className='bg-[#F5F5F5] pb-20'>
            <div className='bg-[#F5F5F5] pt-1 relative'>
                <Link href='#' className='w-[46.72px] h-[24px] top-[4.25px] left-[32px] font-normal text-[13.13px] leading-[24px] text-[#00000099] absolute'>
                    Accueil
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] top-[4.57px] left-[86.52px] absolute'>
                    <svg className='w-[7.06px] absolute h-[11.43px] top-[5.71px] left-[8.18px] text-[#00000099]' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.0409 0.782501L0.698364 2.12503L5.05921 6.4954L0.698364 10.8658L2.0409 12.2083L7.7538 6.4954L2.0409 0.782501Z" fill="black" fill-opacity="0.6" />
                    </svg>
                </Link>
                <Link href='#' className='w-[38.64px] h-[24px] top-[4.25px] left-[117.37px] font-normal text-[13.13px] leading-[24px] text-[#00000099] absolute'>
                    Media
                </Link>
                <Link href={'#'} className='w-[22.85px] h-[22.85px] top-[4.57px] left-[163.8px] absolute'>
                    <svg className='w-[7.06px] absolute h-[11.43px] top-[5.71px] left-[8.18px] text-[#00000099]' width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.0409 0.782501L0.698364 2.12503L5.05921 6.4954L0.698364 10.8658L2.0409 12.2083L7.7538 6.4954L2.0409 0.782501Z" fill="black" fill-opacity="0.6" />
                    </svg>
                </Link>
                <Link href='#' className='w-[166.76px] h-[24px] top-[4.25px] left-[194.66px] font-normal text-[13.13px] leading-[24px] text-[#000000DE] absolute'>
                    Communiqués de presse
                </Link>
            </div>
            <div className='mt-10 md:h-[204px] sm:h-[204px] h-[196px] bg-[#FFFFFF]'>
                <h2 className='md:px-28  px-5 sm:pt-10 pt-5 font-bold  sm:text-[45.38px] text-[34.45px] ms:leading-[72px] leading-[54px] text-[#000000]'>
                    Communiqués de presse
                </h2>
                <div className='h-[44px] md:px-28 px-5 mt-5 '>
                    <button className='w-[236.61px] h-[44px] rounded-[4px] bg-[#7A00E6]'>
                        <Link href={''} className='w-[188.81px] h-[16px] top-[14px] left-[24px]  font-normal text-[14.63px]
                         leading-[16px] text-center text-[#FFFFFF]'>
                            Recevoir des alertes email
                        </Link>
                    </button>
                </div>
            </div>
            <CardListPress/>

            
        </div>
    )
}

export default MainCommunication