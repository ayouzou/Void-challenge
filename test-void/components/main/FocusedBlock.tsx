import Link from 'next/link'
import React from 'react'

const FocusedBlock = () => {
    return (
        <div className='md:mx-[160px] mx-[5px] md:pt-[120px] pt-[60px] h-full bg-[#FFFFFF] '>
            <div className='bg-[#F5F5F5] flex flex-col items-center pt-10  h-[400px] '>
                <h2 className='md:h-[54px]  h-[84px] font-bold md:text-[33.75px] text-[26.25px] md:leading-[54px] leading-[42px] text-[#000000] text-center' >
                    Construisez votre carrière avec <br /> Entreprise
                </h2>
                <p className=' md:h-[74px] pt-11 h-[72px]  font-normal  text-[14.5px] leading-[24px] text-center text-[#0D0D0D]'>
                    Vous serez surpris de voir tout ce que vous pouvez accomplir chez Entreprise. Découvrez votre <br />
                     avenir ici.
                </p>
                 <button className='md:w-[272.73px] w-[272.73px] mt-14 h-[44px] relative  rounded-[4px] bg-[#7A00E6]'>
                    <svg className='top-[14px] left-[15px] absolute' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.63 0.879883C10.0769 0.879883 9.63 1.32676 9.63 1.87988C9.63 2.43301 10.0769 2.87988 10.63 2.87988H13.2144L6.92375 9.17363C6.53313 9.56426 6.53313 10.1986 6.92375 10.5893C7.31438 10.9799 7.94875 10.9799 8.33938 10.5893L14.63 4.29551V6.87988C14.63 7.43301 15.0769 7.87988 15.63 7.87988C16.1831 7.87988 16.63 7.43301 16.63 6.87988V1.87988C16.63 1.32676 16.1831 0.879883 15.63 0.879883H10.63ZM3.13 1.87988C1.74875 1.87988 0.630005 2.99863 0.630005 4.37988V14.3799C0.630005 15.7611 1.74875 16.8799 3.13 16.8799H13.13C14.5113 16.8799 15.63 15.7611 15.63 14.3799V10.8799C15.63 10.3268 15.1831 9.87988 14.63 9.87988C14.0769 9.87988 13.63 10.3268 13.63 10.8799V14.3799C13.63 14.6549 13.405 14.8799 13.13 14.8799H3.13C2.855 14.8799 2.63 14.6549 2.63 14.3799V4.37988C2.63 4.10488 2.855 3.87988 3.13 3.87988H6.63C7.18313 3.87988 7.63 3.43301 7.63 2.87988C7.63 2.32676 7.18313 1.87988 6.63 1.87988H3.13Z" fill="white" />
                    </svg>
                    <Link href={'#'} className='w-[202.93px] h-[16px]  font-normal text-[14.75px] leading-[16px] text-center text-[#FFFFFF]'>
                        Accéder au portail Carrières
                    </Link>
                </button> 
            </div>
        </div>
    )
}

export default FocusedBlock