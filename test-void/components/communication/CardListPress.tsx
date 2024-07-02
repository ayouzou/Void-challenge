import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation'

const CardListPress = () => {
    return (
        <div className='md:px-20 px-5'>
            {/* <div className='h-[5743px] md:mt-10 mt-5 bg-white'> */}
            <div className=' md:mt-10 mt-5 bg-white'>
                <div className='md:pt-5'>
                    <button className='w-[179.35px] mt-3 pl-4 flex gap-2 items-center text-center font-normal h-[48px] text-[14.63px] text-[#0D0D0D] rounded-[4px] bg-[#F5F5F5]'>
                        <Link href='#'>
                            Filtrer par année
                        </Link>
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.64375 13.2063C8.03437 13.5969 8.66875 13.5969 9.05937 13.2063L15.0594 7.20627C15.45 6.81565 15.45 6.18127 15.0594 5.79065C14.6688 5.40002 14.0344 5.40002 13.6438 5.79065L8.35 11.0844L3.05625 5.79377C2.66562 5.40315 2.03125 5.40315 1.64062 5.79377C1.25 6.1844 1.25 6.81877 1.64062 7.2094L7.64062 13.2094L7.64375 13.2063Z" fill="#5D5D5D" />
                        </svg>
                    </button>
                </div>
                <hr className='h-[1px] mt-10 text-[#C9C9C9] bg-[#C9C9C9]' />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <CardListPress_ />
                <Navigation />
                <div className='mt-[80px]'>
                    <h1 className='h-[54px] font-bold text-[34.03px] leading-[54px] text-[#000000]'>Déclarations</h1>
                    <Link href={'#'} className='flex gap-3 items-center text-[14.75px] font-bold leading-[20px] text-[#000000] mt-[20px]'>
                        En savoir plus sur toutes nos déclarations
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3363 9.20615C15.7269 8.81553 15.7269 8.18115 15.3363 7.79053L10.3363 2.79053C9.94563 2.3999 9.31125 2.3999 8.92063 2.79053C8.53 3.18115 8.53 3.81553 8.92063 4.20615L12.2175 7.4999H2.63C2.07688 7.4999 1.63 7.94678 1.63 8.4999C1.63 9.05303 2.07688 9.4999 2.63 9.4999H12.2144L8.92375 12.7937C8.53313 13.1843 8.53313 13.8187 8.92375 14.2093C9.31438 14.5999 9.94876 14.5999 10.3394 14.2093L15.3394 9.20928L15.3363 9.20615Z" fill="#7A00E6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default CardListPress

const CardListPress_ = () => {
    return (
        <div >

            <div className='relative'>
                <div className='flex justify-between items-center'>
                    <h5 className='md:mt-14 mt-8 ml-8 font-bold text-[13.23px] leading-[21px] text-[#0D0D0D] '>
                        24 février 2024
                    </h5>
                    <Link href={'#'} className='rounded-[9999px] hidden md:block w-[44px] h-[44px] border-[1px] relative mt-8 mr-6   border-[#7A00E6] '>
                        <svg className='absolute top-[14px] left-[14px] ' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98999 1.5C8.98999 0.946875 8.54312 0.5 7.98999 0.5C7.43687 0.5 6.98999 0.946875 6.98999 1.5V9.08438L4.69624 6.79063C4.30562 6.4 3.67124 6.4 3.28062 6.79063C2.88999 7.18125 2.88999 7.81563 3.28062 8.20625L7.28062 12.2063C7.67124 12.5969 8.30562 12.5969 8.69624 12.2063L12.6962 8.20625C13.0869 7.81563 13.0869 7.18125 12.6962 6.79063C12.3056 6.4 11.6712 6.4 11.2806 6.79063L8.98999 9.08438V1.5ZM1.98999 11.5C0.886865 11.5 -0.0100098 12.3969 -0.0100098 13.5V14.5C-0.0100098 15.6031 0.886865 16.5 1.98999 16.5H13.99C15.0931 16.5 15.99 15.6031 15.99 14.5V13.5C15.99 12.3969 15.0931 11.5 13.99 11.5H10.8181L9.40249 12.9156C8.62124 13.6969 7.35562 13.6969 6.57437 12.9156L5.16187 11.5H1.98999ZM13.49 13.25C13.6889 13.25 13.8797 13.329 14.0203 13.4697C14.161 13.6103 14.24 13.8011 14.24 14C14.24 14.1989 14.161 14.3897 14.0203 14.5303C13.8797 14.671 13.6889 14.75 13.49 14.75C13.2911 14.75 13.1003 14.671 12.9597 14.5303C12.819 14.3897 12.74 14.1989 12.74 14C12.74 13.8011 12.819 13.6103 12.9597 13.4697C13.1003 13.329 13.2911 13.25 13.49 13.25Z" fill="#7A00E6" />
                        </svg>
                    </Link>
                </div>
                <p className='lg:w-[911.63px]  sm:min-w-[200px] mt-4 ml-8 lg:h-[144px] md:h-[164px] font-bold md:text-[22.31px] text-[19.38px]  md:leading-[36px] leading-[30px] text-[#000000]'>
                    Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de
                    réduire rapidement la sévérité des démangeaisons causées par l’urticaire
                    chronique spontanée et d’améliorer significativement l’activité de la maladie chez
                    l’adulte
                </p>
                <div className='flex items-center justify-between  lg:mt-0 mt-10 '>
                    <Link href={'#'} className='font-bold md:mt-6 sm:mt-6 lg:pt-[15px]    flex items-center gap-4 ml-8 text-[15px] leading-[20px] text-[#000000]'>
                        Lire le communiqué
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.3862 7.20627C14.7768 6.81565 14.7768 6.18127 14.3862 5.79065L9.38618 0.790649C8.99556 0.400024 8.36118 0.400024 7.97056 0.790649C7.57993 1.18127 7.57993 1.81565 7.97056 2.20627L11.2674 5.50002H1.67993C1.12681 5.50002 0.679932 5.9469 0.679932 6.50002C0.679932 7.05315 1.12681 7.50002 1.67993 7.50002H11.2643L7.97368 10.7938C7.58306 11.1844 7.58306 11.8188 7.97368 12.2094C8.36431 12.6 8.99868 12.6 9.38931 12.2094L14.3893 7.2094L14.3862 7.20627Z" fill="#7A00E6" />
                        </svg>
                    </Link>
                    <Link href={'#'} className='rounded-[9999px] md:hidden block w-[44px] h-[44px] border-[1px] relative md:mt-8 mr-6   border-[#7A00E6] '>
                        <svg className='absolute top-[14px] left-[14px] ' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.98999 1.5C8.98999 0.946875 8.54312 0.5 7.98999 0.5C7.43687 0.5 6.98999 0.946875 6.98999 1.5V9.08438L4.69624 6.79063C4.30562 6.4 3.67124 6.4 3.28062 6.79063C2.88999 7.18125 2.88999 7.81563 3.28062 8.20625L7.28062 12.2063C7.67124 12.5969 8.30562 12.5969 8.69624 12.2063L12.6962 8.20625C13.0869 7.81563 13.0869 7.18125 12.6962 6.79063C12.3056 6.4 11.6712 6.4 11.2806 6.79063L8.98999 9.08438V1.5ZM1.98999 11.5C0.886865 11.5 -0.0100098 12.3969 -0.0100098 13.5V14.5C-0.0100098 15.6031 0.886865 16.5 1.98999 16.5H13.99C15.0931 16.5 15.99 15.6031 15.99 14.5V13.5C15.99 12.3969 15.0931 11.5 13.99 11.5H10.8181L9.40249 12.9156C8.62124 13.6969 7.35562 13.6969 6.57437 12.9156L5.16187 11.5H1.98999ZM13.49 13.25C13.6889 13.25 13.8797 13.329 14.0203 13.4697C14.161 13.6103 14.24 13.8011 14.24 14C14.24 14.1989 14.161 14.3897 14.0203 14.5303C13.8797 14.671 13.6889 14.75 13.49 14.75C13.2911 14.75 13.1003 14.671 12.9597 14.5303C12.819 14.3897 12.74 14.1989 12.74 14C12.74 13.8011 12.819 13.6103 12.9597 13.4697C13.1003 13.329 13.2911 13.25 13.49 13.25Z" fill="#7A00E6" />
                        </svg>
                    </Link>
                </div>
            </div>

            <hr className='h-[1px] mt-10 text-[#C9C9C9] bg-[#C9C9C9]' />
        </div>
    )
}