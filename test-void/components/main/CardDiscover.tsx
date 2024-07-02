import Link from 'next/link'
import React from 'react'
const Card_image1 = 'https://s3-alpha-sig.figma.com/img/e29b/f631/aee34550f9090a5cae9fb39b15553ada?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kDF85Ypv~KnbdnTKW~hHz5GwTQ3X6SWlTkOmq9jE8eto1yYswXALOFrKiqEB5U0vxY0mQ4kJMEhFfQucVVTdeSOxq90FISkdMvO8vBfb59Qd-6-o7Poq-KTiShdM-9Mk7a5spERldCift-u~oSJq886IGeuOSZqXGNEix8vM7tUh-FhXQOR0WN0EJydiPVG0XbNckSrUfzdbAFr7NYOzFJ~3R2mXt9NqJX3SXRUNvleZT6ppKodHlKH~YuaT4IopfD2oBfAZORDI3iafzfqMMBsoIkRpf7Kv37tLevHYO2dolEcPK--PfInXG7pNcZhVKMFlMncllEwvMdcrrr~IbQ__'
const Card_Image2 = 'https://s3-alpha-sig.figma.com/img/56fd/b02e/3a8618b2dc901d404f3826ac82e25813?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JePgq-T-La7eCKnTs2kbXZKefV2hegW5LuFVJ3wEk70Zn0cZDhUc5hNPep6i-6iEODiUSoHyknPKSarKYxk3ylBrmVGod2XCEZJigwLr9DNgjI5SRmLYBbOr6jlaYLgnzVYAxRLecsPqK90pgDsykI0rySsX-0~5i3dRPb-H00yucgRVc6FJX9f4~Ie70QDh9lduxHXGa8CQ7jIkVxtpRUTF19ZgaAGD6SloUR~enU4zLGZdVXeGf6yn2tSjQ6mvxjYXY9nVREpKqmsk6UlW9qH7IGAlWoIAdM5kcYTI1vgCycZT4o7w90wgn7wB2mVv-fW~53CpIaSTeXD99UEBRA__'
const Card_Image3 = 'https://s3-alpha-sig.figma.com/img/96db/e2b8/3de651945010c04ff39f7cba0a1a6d28?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F3nsPL2311ji7lG1PTR9F6CgkEsu6DG-9fh-2uPgtol1fzsC08CQITlZ2T2zMOMl6phsp-kWezzADyKyriHBWvIuDJ7mGqRgo-m5kJHoRPMviwBAiQSPejmeFLvJLL~~lYHSLPCgfsGjZ1m0OYOgCxNbssVzUvrhK6AAe5dYAi77AGuEwFNnghT090jPzBhejhlABhdzRWQf-HTHYQurX1mahDi8OOEyh4rPiY9DRnpW0vNgL~ruAVFjsx5hToMhLG7gc85VpeyD1j3sfARqXly1Bekn7xzgbH~QOf9d0J~YoyJ8SSuiComWPu1Mjnf~4784JTOZ6NiMTULZfL7~VQ__'
const Info_Card = [
    {
        id: 1,
        title: 'Rapport diversité, équité et inclusion',
        content: `
        Au cours de la première année complète de
notre nouvelle stratégie People & Culture, les
enjeux de Diversité, Équité et Inclusion (DE&I)
ont occupé le devant de la scène. Ce rapport
célèbre les progrès concrets que nous avons
réalisés pour refléter la diversité dans nos
équipes dirigeantes, libérer tout le potentiel
de nos collaborateurs et collaboratrices et
avoir un impact sur l’environnement de travail
mais aussi au-delà.
        `,
        link: 'Lisez le document',
        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5601 0.879883C10.0069 0.879883 9.56006 1.32676 9.56006 1.87988C9.56006 2.43301 10.0069 2.87988 10.5601 2.87988H13.1444L6.85381 9.17363C6.46318 9.56426 6.46318 10.1986 6.85381 10.5893C7.24443 10.9799 7.87881 10.9799 8.26943 10.5893L14.5601 4.29551V6.87988C14.5601 7.43301 15.0069 7.87988 15.5601 7.87988C16.1132 7.87988 16.5601 7.43301 16.5601 6.87988V1.87988C16.5601 1.32676 16.1132 0.879883 15.5601 0.879883H10.5601ZM3.06006 1.87988C1.67881 1.87988 0.560059 2.99863 0.560059 4.37988V14.3799C0.560059 15.7611 1.67881 16.8799 3.06006 16.8799H13.0601C14.4413 16.8799 15.5601 15.7611 15.5601 14.3799V10.8799C15.5601 10.3268 15.1132 9.87988 14.5601 9.87988C14.0069 9.87988 13.5601 10.3268 13.5601 10.8799V14.3799C13.5601 14.6549 13.3351 14.8799 13.0601 14.8799H3.06006C2.78506 14.8799 2.56006 14.6549 2.56006 14.3799V4.37988C2.56006 4.10488 2.78506 3.87988 3.06006 3.87988H6.56006C7.11318 3.87988 7.56006 3.43301 7.56006 2.87988C7.56006 2.32676 7.11318 1.87988 6.56006 1.87988H3.06006Z" fill="#7A00E6" />
        </svg>,
        image: Card_image1
    },
    {
        id: 2,
        title: 'Notre héritage',
        content: `
        Notre societé d’aujourd’hui s’appuie sur un
héritage qui consiste à transformer
l’impossible en possible.
        `,
        link: 'En savoir plus sur notre histoire',
        icon: <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0662 7.58604C14.4569 7.19541 14.4569 6.56104 14.0662 6.17041L9.06624 1.17041C8.67561 0.779785 8.04124 0.779785 7.65061 1.17041C7.25999 1.56104 7.25999 2.19541 7.65061 2.58604L10.9475 5.87979H1.35999C0.80686 5.87979 0.359985 6.32666 0.359985 6.87979C0.359985 7.43291 0.80686 7.87979 1.35999 7.87979H10.9444L7.65374 11.1735C7.26311 11.5642 7.26311 12.1985 7.65374 12.5892C8.04436 12.9798 8.67874 12.9798 9.06936 12.5892L14.0694 7.58916L14.0662 7.58604Z" fill="#7A00E6" />
        </svg>,
        image: Card_Image2

    },
    {
        id: 3,
        title: 'Notre rapport intégré 2022',
        content: `
        Découvrez comment nous rendons possible
l'impossible pour améliorer la vie des gens
dans le monde.
        `,
        link: 'Lire le rapport',
        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5601 0.879883C10.0069 0.879883 9.56006 1.32676 9.56006 1.87988C9.56006 2.43301 10.0069 2.87988 10.5601 2.87988H13.1444L6.85381 9.17363C6.46318 9.56426 6.46318 10.1986 6.85381 10.5893C7.24443 10.9799 7.87881 10.9799 8.26943 10.5893L14.5601 4.29551V6.87988C14.5601 7.43301 15.0069 7.87988 15.5601 7.87988C16.1132 7.87988 16.5601 7.43301 16.5601 6.87988V1.87988C16.5601 1.32676 16.1132 0.879883 15.5601 0.879883H10.5601ZM3.06006 1.87988C1.67881 1.87988 0.560059 2.99863 0.560059 4.37988V14.3799C0.560059 15.7611 1.67881 16.8799 3.06006 16.8799H13.0601C14.4413 16.8799 15.5601 15.7611 15.5601 14.3799V10.8799C15.5601 10.3268 15.1132 9.87988 14.5601 9.87988C14.0069 9.87988 13.5601 10.3268 13.5601 10.8799V14.3799C13.5601 14.6549 13.3351 14.8799 13.0601 14.8799H3.06006C2.78506 14.8799 2.56006 14.6549 2.56006 14.3799V4.37988C2.56006 4.10488 2.78506 3.87988 3.06006 3.87988H6.56006C7.11318 3.87988 7.56006 3.43301 7.56006 2.87988C7.56006 2.32676 7.11318 1.87988 6.56006 1.87988H3.06006Z" fill="#7A00E6" />
        </svg>,
        image: Card_Image3
    }
]
const CardDiscover = () => {
    return (
        <div className='md:mx-[160px] mx-[5px] md:pt-[120px] pt-[60px]  h-full bg-[#FFFFFF]'>
            <h2 className='md:w-[243.89px] w-[189.74px] md:h-[54px] h-[42px] font-bold md:text-[33.89px] text-[26.36px] leading-[54px]  text-[#000000]'>
                Découvrir plus
            </h2>
            <div className='h-full bg-[#FFFFFF] md:flex md:flex-row flex flex-col justify-center gap-3'>
                {
                    Info_Card.map((info) => (
                        <div key={info.id} className='w-[382px]  md:mt-10 md:h-[686.88px] min-h-full rounded-[8px] bg-[#FFFFFF]  border-[1.4px]'>
                            <div className='w-[382px] h-[214.88px] rounded-[8px]'>
                                <img src={info.image} className='w-[382px] rounded-[8px] h-[214.88px]' alt="" />
                            </div>
                            <div className='w-[382px] md:h-[472px]  md:relative'>
                                <div className='w-[334px] md:h-[148px] min-h-[262px] md:absolute md:p-0 px-5 py-5  top-[24px] left-[24px]'>
                                    <h1 className='md:text-[16px] text-[18.59px] font-bold leading-[30px] text-[#000000]'>
                                        {info.title}
                                    </h1>
                                    <p className='pt-3 md:text-[14.38px] text-[#0D0D0D] font-normal text-[16px] leading-[24px]'>
                                        {info.content}
                                    </p>
                                </div>
                                <Link href='' className='w-[334px] px-5 h-[48px] md:absolute top-[410px]  left-[24px] flex gap-3 items-center md:text-[] leading-[20px] text-[14.63px] font-bold text-[#000000]'>
                                    {info.link}
                                    {
                                        info.icon
                                    }
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div>





            {/* <div className='absolute md:mt-10 mt-5'>
                <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[644.25px] absolute rounded-[8px] border-[1px] bg-[#C9C9C9]'>
                    <div className='md:w-[382px] w-[356px] md:h-[686.88px]  h-[642.25px] top-[1px] left-[1px] rounded-[8px] border-[1px] bg-[#FFFFFF]'>
                        <div className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px]'>
                            <img src={Card_image1} alt="" className='md:w-[382px] w-[356px] rounded-t-[8px]  md:h-[214.88px] h-[200.25px] absolute' />
                        </div>
                        <div className='md:w-[382px] w-[356px] md:h-[472px] h-[442px]  md:top-[214.88px] top-[200.25px] absolute'>
                            <div className='md:w-[334px] w-[308px] md:h-[148px] h-[340px] top-[24px] left-[24px] relative'>
                                <h3 className='md:w-[291.7px] w-[255.18px] md:h-[36px] h-[60px] font-bold md:text-[22.31px] md:leading-[36px] leading-[30px] text-[#000000] text-[18.75px]'>
                                    Rapport diversité, équité et
                                    inclusion
                                </h3>
                                <p className='md:w-[328.65px] w-[307.42px] md:h-[96px] h-[264px] md:top-[69px] top-[76px] font-normal absolute text-[15.13px] leading-[24px] text-[#0D0D0D] md:text-[1rem] '>
                                    Au cours de la première année complète de
                                    notre nouvelle stratégie People & Culture, les
                                    enjeux de Diversité, Équité et Inclusion (DE&I)
                                    ont occupé le devant de la scène. Ce rapport
                                    célèbre les progrès concrets que nous avons
                                    réalisés pour refléter la diversité dans nos
                                    équipes dirigeantes, libérer tout le potentiel
                                    de nos collaborateurs et collaboratrices et
                                    avoir un impact sur l’environnement de travail <br />
                                    mais  aussi au-delà.
                                </p>
                            </div>
                            <div className='md:w-[334px] w-[308px] h-[48px] md:top-[400px] top-[374px] md:left-[24px] left-[24px] absolute'>
                                <Link href='#' className='w-[147.16px] h-[20px] top-[26px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>
                                    Lisez le document
                                </Link>
                                <Link href={''} className='w-[16px] h-[16px] md:top-[26px] top-[28px] md:left-[145.96px] left-[142.96px] absolute'>
                                    <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5601 0.879883C10.0069 0.879883 9.56006 1.32676 9.56006 1.87988C9.56006 2.43301 10.0069 2.87988 10.5601 2.87988H13.1444L6.85381 9.17363C6.46318 9.56426 6.46318 10.1986 6.85381 10.5893C7.24443 10.9799 7.87881 10.9799 8.26943 10.5893L14.5601 4.29551V6.87988C14.5601 7.43301 15.0069 7.87988 15.5601 7.87988C16.1132 7.87988 16.5601 7.43301 16.5601 6.87988V1.87988C16.5601 1.32676 16.1132 0.879883 15.5601 0.879883H10.5601ZM3.06006 1.87988C1.67881 1.87988 0.560059 2.99863 0.560059 4.37988V14.3799C0.560059 15.7611 1.67881 16.8799 3.06006 16.8799H13.0601C14.4413 16.8799 15.5601 15.7611 15.5601 14.3799V10.8799C15.5601 10.3268 15.1132 9.87988 14.5601 9.87988C14.0069 9.87988 13.5601 10.3268 13.5601 10.8799V14.3799C13.5601 14.6549 13.3351 14.8799 13.0601 14.8799H3.06006C2.78506 14.8799 2.56006 14.6549 2.56006 14.3799V4.37988C2.56006 4.10488 2.78506 3.87988 3.06006 3.87988H6.56006C7.11318 3.87988 7.56006 3.43301 7.56006 2.87988C7.56006 2.32676 7.11318 1.87988 6.56006 1.87988H3.06006Z" fill="#7A00E6" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[416.25px] md:left-[400px] md:top-0 top-[658.25px] rounded-[8px] absolute border-[1px] bg-[#C9C9C9]'>
                    <div className='md:w-[382px] w-[356px] md:h-[686.88px] h-[414.25px] top-[1px] left-[1px] border-[1px] rounded-[8px] bg-[#FFFFFF]'>
                        <div className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px]'>
                            <img src={Card_Image2} alt="" className='md:w-[382px] w-[356px] rounded-t-[8px]  md:h-[214.88px] h-[200.25px] absolute' />

                        </div>
                        <div className='md:w-[382px] w-[356px] md:h-[472px] h-[214px] md:top-[214.88px] top-[200.25px] absolute'>
                            <div className='md:w-[334px] w-[308px] md:h-[232px] h-[118px] top-[24px] left-[24px] relative'>
                                <h3 className='md:w-[316.02px] w-[136.65px] md:h-[72px] h-[30px] font-bold md:text-[22.31px] md:leading-[36px] leading-[30px] text-[#000000] text-[19.06px]'>
                                    Notre héritage
                                </h3>
                                <p className='md:w-[328.87px] w-[307.1px] md:h-[144px] h-[72px] md:top-[50px] top-[46px] font-normal absolute text-[14.63px] leading-[24px] text-[#0D0D0D] '>
                                    Notre societé d’aujourd’hui s’appuie sur un
                                    héritage qui consiste à transformer
                                    l’impossible en possible.
                                </p>
                            </div>
                            <div className='md:w-[334px] w-[308px] h-[48px] md:top-[400px] top-[142px] md:left-[24px] left-[24px] absolute'>
                                <Link href='#' className='md:w-[297.16px] w-[232.56px] h-[20px] top-[26px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>
                                    En savoir plus sur notre histoire
                                </Link>
                                <Link href={''} className='w-[16px] h-[16px] top-[28px] md:left-[247.41px] left-[247.41px] absolute'>
                                    <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6662 6.83604C15.0568 6.44541 15.0568 5.81104 14.6662 5.42041L9.66621 0.42041C9.27559 0.0297852 8.64121 0.0297852 8.25059 0.42041C7.85996 0.811035 7.85996 1.44541 8.25059 1.83604L11.5475 5.12979H1.95996C1.40684 5.12979 0.959961 5.57666 0.959961 6.12979C0.959961 6.68291 1.40684 7.12979 1.95996 7.12979H11.5443L8.25371 10.4235C7.86309 10.8142 7.86309 11.4485 8.25371 11.8392C8.64434 12.2298 9.27871 12.2298 9.66934 11.8392L14.6693 6.83916L14.6662 6.83604Z" fill="#7A00E6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[416.25px] absolute top-[1100.5px] md:top-0  md:left-[800px] rounded-[8px] border-[1px] bg-[#C9C9C9]'>
                    <div className='md:w-[382px] w-[356px] md:h-[686.88px] h-[414.25px] top-[1px] left-[1px] rounded-[8px] bg-[#FFFFFF]'>
                        <div className='md:w-[382px] w-[356px]  md:h-[214.88px] h-[200.25px]'>
                            <img src={Card_Image3} alt="" className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px] rounded-t-[8px] absolute' />
                        </div>
                        <div className='md:w-[382px] w-[356px] md:h-[472px] h-[214px] md:top-[214.88px] top-[200.25px] absolute'>
                            <div className='md:w-[334px] w-[308px] md:h-[376px] h-[118px]  top-[24px] left-[24px] absolute'>
                                <h3 className='md:w-[300.32px] md:h-[72px] w-[253.29px] h-[30px] md:text-[22.31px]   font-bold text-[19.06px] md:leading-[36px] leading-[30px] text-[#000000]'>
                                    Notre rapport intégré 2022
                                </h3>
                                <p className='md:w-[328.87px] w-[298.03px] md:h-[288px] h-[72px] md:top-[50px] top-[46px] text-[14.43px] leading-[24px] font-normal font absolute text-[#0D0D0D]'>
                                    Découvrez comment nous rendons possible
                                    l'impossible pour améliorer la vie des gens
                                    dans le monde.
                                </p>
                            </div>






                            <div className='md:w-[334px] w-[308px] md:h-[48px] h-[48px] md:top-[400px] top-[142px] left-[24px] absolute'>
                                <Link href='#' className='w-[107.16px] h-[20px] top-[26px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>
                                    Lire le rapport
                                </Link>
                                <Link href={''} className='w-[16px] h-[16px] md:top-[25px] top-[28px] left-[117.41px] absolute'>
                                    <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.27 0.879883C9.71689 0.879883 9.27002 1.32676 9.27002 1.87988C9.27002 2.43301 9.71689 2.87988 10.27 2.87988H12.8544L6.56377 9.17363C6.17314 9.56426 6.17314 10.1986 6.56377 10.5893C6.95439 10.9799 7.58877 10.9799 7.97939 10.5893L14.27 4.29551V6.87988C14.27 7.43301 14.7169 7.87988 15.27 7.87988C15.8231 7.87988 16.27 7.43301 16.27 6.87988V1.87988C16.27 1.32676 15.8231 0.879883 15.27 0.879883H10.27ZM2.77002 1.87988C1.38877 1.87988 0.27002 2.99863 0.27002 4.37988V14.3799C0.27002 15.7611 1.38877 16.8799 2.77002 16.8799H12.77C14.1513 16.8799 15.27 15.7611 15.27 14.3799V10.8799C15.27 10.3268 14.8231 9.87988 14.27 9.87988C13.7169 9.87988 13.27 10.3268 13.27 10.8799V14.3799C13.27 14.6549 13.045 14.8799 12.77 14.8799H2.77002C2.49502 14.8799 2.27002 14.6549 2.27002 14.3799V4.37988C2.27002 4.10488 2.49502 3.87988 2.77002 3.87988H6.27002C6.82314 3.87988 7.27002 3.43301 7.27002 2.87988C7.27002 2.32676 6.82314 1.87988 6.27002 1.87988H2.77002Z" fill="#7A00E6" />
                                    </svg>

                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div> */}

        </div>
    )
}

export default CardDiscover