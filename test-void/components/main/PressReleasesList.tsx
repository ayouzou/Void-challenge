import React from 'react'
import Separator from './Separator'
import Link from 'next/link'
const info = [
    {
        id: 1,
        title: '24 février 2024',
        content: 'Communiqué : Résultats de phase II montrent que le rilzabrutinib permet de réduire rapidement la sévérité des démangeaisons causées par l’urticaire chronique spontanée et d’améliorer significativement l’activité de la maladie chez l’adulte '
    },
    {
        id: 2,
        title: '24 février 2024',
        content: 'Media Update: Dupixent® continues scientific leadership with late-breaking results showing reduced airway inflammation and mucus plugging in adults with uncontrolled moderate-to-severe asthma'
    },
    {
        id: 3,
        title: '24 février 2024',
        content: 'Communiqué de presse : Dépôt du Document d’Enregistrement Universel 2023, contenant le Rapport Financier Annuel, et du « Form 20-F » américain '
    },
    {
        id: 5,
        title: '24 février 2024',
        content: 'Communiqué de presse : La FDA accorde un examen prioritaire à la demande de licence de produits biologique relative à Dupixent® pour le traitement de la BPCO avec inflammation de type 2'
    }

]
const PressReleasesList = () => {
    return (
        <div className='md:mx-[160px] mx-[5px] md:pt-[120px] pt-[60px]  h-full bg-[#FFFFFF] '>
            <h2 className='md:w-[456.15px] w-[354.83px] md:h-[54px] h-[42px] font-bold  md:text-[33.89px] text-[26.36px] md:leading-[54px] leading-[42px] text-[#000000]'>
                Nos dernières informations
            </h2>
            <Separator />

             {info.map((_) => (
                <CardListPress_/>
            ))} 
            <Separator />

            <Link href={'#'} className='flex items-center justify-end md:gap-3 md:w-full w-[348.07px] md:h-[36px] h-[60px]  text-center  font-bold md:text-[22.31px] text-[18.59px] md:leading-[36px] leading-[30px]  text-[#000000]'>
                Voir tous les communiqués de presse
                <svg className='md:w-[21px] w-[20px] md:h-[18.01px] h-[20px]  text-[#7A00E6]' width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0594 10.0595C21.6453 9.47354 21.6453 8.52197 21.0594 7.93604L13.5594 0.436035C12.9734 -0.149902 12.0219 -0.149902 11.4359 0.436035C10.85 1.02197 10.85 1.97353 11.4359 2.55947L16.3812 7.5001H2C1.17031 7.5001 0.5 8.17041 0.5 9.0001C0.5 9.82979 1.17031 10.5001 2 10.5001H16.3766L11.4406 15.4407C10.8547 16.0267 10.8547 16.9782 11.4406 17.5642C12.0266 18.1501 12.9781 18.1501 13.5641 17.5642L21.0641 10.0642L21.0594 10.0595Z" fill="#7A00E6" />
                </svg>
            </Link>
       
        </div>
    )
}

export default PressReleasesList






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









const PressReleasesList_ = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className='relative'>
            <div className='mt-8 '>
                <Separator />
            </div>
            <h5 className='w-[99.87px] mt-10 mx-8  h-[21px] top-[135px] left-[32px] font-bold text-[13.23px] leading-[21px] text-[#0D0D0D]'>
                {title}
            </h5>
            <p className='md:w-[911.63px] w-[316.22px] md:h-[144px] h-[240px] mt-2 mx-8  md:top-[168px] top-[132px] md:left-[32px] left-[16px] text-[19.38px] font-bold md:text-[22.31px] md:leading-[36px] leading-[30px] text-[#000000]'>
                {content}
            </p>
            <div className='md:mt-6 mt-10'>
                <Link href={'#'} className='w-[146.88px] mx-8 pt-16 h-[20px] md:top-[230px] top-[416px] left-[32px] font-bold text-[15px] leading-[20px] text-[#000000]'>
                    Lire le communiqué
                </Link>
                <Link href={'#'} className='w-[16px] absolute h-[16px] md:top-[244px] top-[356px] left-[194.68px]'>
                    <svg className='w-[14px] h-[12px] absolute top-[2px] left-[1px] text-[#7A00E6]' width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3862 6.70615C14.7768 6.31553 14.7768 5.68115 14.3862 5.29053L9.38618 0.290527C8.99556 -0.100098 8.36118 -0.100098 7.97056 0.290527C7.57993 0.681152 7.57993 1.31553 7.97056 1.70615L11.2674 4.9999H1.67993C1.12681 4.9999 0.679932 5.44678 0.679932 5.9999C0.679932 6.55303 1.12681 6.9999 1.67993 6.9999H11.2643L7.97368 10.2937C7.58306 10.6843 7.58306 11.3187 7.97368 11.7093C8.36431 12.0999 8.99868 12.0999 9.38931 11.7093L14.3893 6.70928L14.3862 6.70615Z" fill="#7A00E6" />
                    </svg>
                </Link>
            </div>
            <Link href={'#'} className='w-[44px] absolute h-[44px] md:top-[45px] top-[340px] md:left-[1117.99px] left-[300.99px] rounded-[99999px] border-[1px] border-[#7A00E6]'>
                <svg className='w-[16px] h-[16px] absolute top-[14px]  left-[14px] border-[#7A00E6]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.98999 1C8.98999 0.446875 8.54312 0 7.98999 0C7.43687 0 6.98999 0.446875 6.98999 1V8.58438L4.69624 6.29063C4.30562 5.9 3.67124 5.9 3.28062 6.29063C2.88999 6.68125 2.88999 7.31563 3.28062 7.70625L7.28062 11.7063C7.67124 12.0969 8.30562 12.0969 8.69624 11.7063L12.6962 7.70625C13.0869 7.31563 13.0869 6.68125 12.6962 6.29063C12.3056 5.9 11.6712 5.9 11.2806 6.29063L8.98999 8.58438V1ZM1.98999 11C0.886865 11 -0.0100098 11.8969 -0.0100098 13V14C-0.0100098 15.1031 0.886865 16 1.98999 16H13.99C15.0931 16 15.99 15.1031 15.99 14V13C15.99 11.8969 15.0931 11 13.99 11H10.8181L9.40249 12.4156C8.62124 13.1969 7.35562 13.1969 6.57437 12.4156L5.16187 11H1.98999ZM13.49 12.75C13.6889 12.75 13.8797 12.829 14.0203 12.9697C14.161 13.1103 14.24 13.3011 14.24 13.5C14.24 13.6989 14.161 13.8897 14.0203 14.0303C13.8797 14.171 13.6889 14.25 13.49 14.25C13.2911 14.25 13.1003 14.171 12.9597 14.0303C12.819 13.8897 12.74 13.6989 12.74 13.5C12.74 13.3011 12.819 13.1103 12.9597 12.9697C13.1003 12.829 13.2911 12.75 13.49 12.75Z" fill="#7A00E6" />
                </svg>
            </Link>
        </div>
    )
}