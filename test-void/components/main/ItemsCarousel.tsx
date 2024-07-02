import Link from 'next/link'
import React from 'react'
const card_Image = 'https://s3-alpha-sig.figma.com/img/017c/c347/eecb2db8a9e142c756ece46d1e23e6e7?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W1p9wgIEwXr0mPaW587pz9a6uzye4aVqDuRU2~V11K0kEvi2lmySFP9c7gEW27DzQiPRvxzlJuTv30BoStqHnP6XaqG2sijkdFJ6VMq0Ra9WuX9H27tPq6LI75ISivPQc1YqoJK-iB6YYoNV2NGyqXJdk~0chs8UxWEAb-zJ2XuIqUsI1vovUPzKeYDl7H4dJYfqDRcvbeunbIO6135ByeOQf~PKB1Ig2h5x8dYsu8-8BXBW6xd~MYqLMAjQf2UxRxJyS7R3uc~X23XRVJJO5p-Kf~tChOh9LT3tMzb4bW1wCCIC5ZC5Nr3v0apitRFIAlIeL5WWU2xwdxeBE9KoNA__'
const card_Image2 = 'https://s3-alpha-sig.figma.com/img/b65b/705d/16f3adfc2b6d44252f53fdd9c718b730?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GTbd389FTzKXS9-fxcY1K-kcNQbaFWOxHSYizUI7~g9y41-PKSvvm8qdTls9ksuV7H7bGTpiNnazJ4QHh4TRO~nGzRcLptwCVsaCMXfgsHtNMFe7tPnz~eAjoJBvs6AuEhmaUK7wTZAput-rihO0dlL-dVRGLCYm9bNPQS0sQ74jHveb18P6-d83cHWkUokSG~j6hucNkGCTBFYJmQoMDgvnPgJE8b9WZQvahAx141zG2GRywMSVVOYFOC9zje8Mf2SwXIPN9-xF1BSsb3ZzRaR9oGHycwaJEmySMp90beesEGXYp~q8JFRH2g-r6EwDQ8BaGsKGKQSQOR7T0fXr-Q__'
const card_Image3 = 'https://s3-alpha-sig.figma.com/img/4624/a258/404d8086bbec5a67a02e971f0e792f75?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtMvCJuwR53tyBu9qELNUEwOlxknkzlq3OJOKTU4sOaEQy4wGGq1Wvuvtn~WMQEbU42Na6Hu6VlnuLzJjtLw1AX4hmIPO74bHxOgGbcWzEH6NMw~AzRlDHJYYcSKsu32JxRQ6dy4AunPS1ceghp9IuCshgf3cB9ffAbcVkpaAyiBhTQqJQYB4E0cphlMbWc2vCQE9vCsZFPNGdZ8wb5dlEi69nfnYf-zYM8UpQIqWt9NjfL~ZiyQGREPc3TN3Z85VcK8SpmfELmCNskgSW26QxglOHcP1vdqMBA~FfsDQT9uIpTxOLSSIllTYPHybTrfWM5nmLe4aOXB8TRrCRJOyA__'
const Card_Info = [
    {
        id: 1,
        date: '27 février 2024',
        content: "Journée des maladies rares 2024 : L'équité en action",
        image: card_Image
    },
    {
        id: 2,
        date: '7 février 2024',
        content: "#NoJargon: Plongez dans le monde de la science",
        image: card_Image2
    },
    {
        id: 3,
        date: '5 février 2024',
        content: "Cancer et travail : Agir ensemble",
        image: card_Image3
    }
]
const ItemsCarousel = () => {
    return (
        <div className='relative md:grid grid-cols-3'>
            {
                Card_Info.map((info) => (
                    <div key={info.id} className='md:w-[400px] w-[280.5px] md:h-[448.88px] h-[399.66px] md:mt-[100px] mt-[60px] hidden lg:block '>
                        <div className='md:w-[384px] w-[264.5px] md:h-[446.88px] h-[397.66px]  rounded-[8px] border-[1px] bg-[#C9C9C9]  '>
                            <div className='md:w-[382px] w-[262.5px] md:h-[444.88px] h-[395.66px] rounded-[8px] bg-[#FFFFFF]  '>
                                <img src={info.image} className='md:w-[382px] w-[262.5px] md:h-[214.88px] h-[147.66px] rounded-t-[8px] object-cover  ' alt="" />
                                <div className='md:w-[382px] w-[262.5px] md:h-[230px] h-[248px]' >
                                    <div className='w-[334px] h-[134px] top-[24px] left-[24px] relative'>
                                        <h6 className='w-[90.19px] h-[21px] font-normal text-[13.13px] absolute leading-[21px] text-[#434343]'>
                                            Your Health
                                        </h6>
                                        <h4 className='w-[96.08px] h-[33px] top-[25px] font-normal text-[14px] absolute leading-[21px] text-[#434343]'>
                                           {info.date}
                                        </h4>
                                        <h1 className='md:w-[304.69px] w-[213.7px] md:h-[72px] h-[90px] top-[66px] font-bold md:text-[22.31px] text-[18.44px] absolute md:leading-[36px] leading-[30px] text-[#000000]'>
                                            {info.content}
                                        </h1>
                                    </div>
                                    <div className='w-[334px] h-[48px] top-[25px] left-[24px] relative '>
                                        <Link href='' className='w-[87.16px] h-[20px] top-[36px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>Lire l'article</Link>
                                        <Link href='' className='w-[16px] h-[16px] top-[40px] left-[102.96px] absolute'>
                                            <svg className='w-[14px] h-[12px] top-[2px] left-[1px] text-[#7A00E6]  ' width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.6662 6.70615C15.0568 6.31553 15.0568 5.68115 14.6662 5.29053L9.66621 0.290527C9.27559 -0.100098 8.64121 -0.100098 8.25059 0.290527C7.85996 0.681152 7.85996 1.31553 8.25059 1.70615L11.5475 4.9999H1.95996C1.40684 4.9999 0.959961 5.44678 0.959961 5.9999C0.959961 6.55303 1.40684 6.9999 1.95996 6.9999H11.5443L8.25371 10.2937C7.86309 10.6843 7.86309 11.3187 8.25371 11.7093C8.64434 12.0999 9.27871 12.0999 9.66934 11.7093L14.6693 6.70928L14.6662 6.70615Z" fill="#7A00E6" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }

            <RespoCard />
        </div>
    )
}

export default ItemsCarousel


const RespoCard = () => {
    return (
        <div className='relative lg:hidden'>

            <div className='md:w-[400px] w-[280.5px] md:h-[448.88px] h-[399.66px] md:mt-[100px] mt-[60px] '>
                <div className='md:w-[384px] w-[264.5px] md:h-[446.88px] h-[397.66px]  rounded-[8px] border-[1px] bg-[#C9C9C9]  '>
                    <div className='md:w-[382px] w-[262.5px] md:h-[444.88px] h-[395.66px] rounded-[8px] bg-[#FFFFFF]  '>
                        <img src={card_Image} className='md:w-[382px] w-[262.5px] md:h-[214.88px] h-[147.66px] rounded-t-[8px] object-cover  ' alt="" />
                        <div className='md:w-[382px] w-[262.5px] md:h-[230px] h-[248px]' >
                            <div className='w-[334px] h-[134px] top-[24px] left-[24px] relative'>
                                <h6 className='w-[90.19px] h-[21px] font-normal text-[13.13px] absolute leading-[21px] text-[#434343]'>
                                    Your Health
                                </h6>
                                <h4 className='w-[96.08px] h-[33px] top-[25px] font-normal text-[14px] absolute leading-[21px] text-[#434343]'>
                                    27 février 2024
                                </h4>
                                <h1 className='md:w-[304.69px] w-[213.7px] md:h-[72px] h-[90px] top-[66px] font-bold md:text-[22.31px] text-[18.44px] absolute md:leading-[36px] leading-[30px] text-[#000000]'>
                                    Journée des maladies rares
                                    2024 : L'équité en action
                                </h1>
                            </div>
                            <div className='w-[334px] h-[48px] top-[25px] left-[24px] relative '>
                                <Link href='' className='w-[87.16px] h-[20px] top-[36px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>Lire l'article</Link>
                                <Link href='' className='w-[16px] h-[16px] top-[40px] left-[102.96px] absolute'>
                                    <svg className='w-[14px] h-[12px] top-[2px] left-[1px] text-[#7A00E6]  ' width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6662 6.70615C15.0568 6.31553 15.0568 5.68115 14.6662 5.29053L9.66621 0.290527C9.27559 -0.100098 8.64121 -0.100098 8.25059 0.290527C7.85996 0.681152 7.85996 1.31553 8.25059 1.70615L11.5475 4.9999H1.95996C1.40684 4.9999 0.959961 5.44678 0.959961 5.9999C0.959961 6.55303 1.40684 6.9999 1.95996 6.9999H11.5443L8.25371 10.2937C7.86309 10.6843 7.86309 11.3187 8.25371 11.7093C8.64434 12.0999 9.27871 12.0999 9.66934 11.7093L14.6693 6.70928L14.6662 6.70615Z" fill="#7A00E6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='md:w-[400px] w-[280.5px] md:h-[448.88px] h-[399.66px] absolute top-[0]  left-[280.5px] md:hidden '>
                <div className='md:w-[384px] w-[264.5px] md:h-[446.88px] h-[397.66px] top-[1px] left-[8px] rounded-[8px] border-[1px] bg-[#C9C9C9]'>
                    <div className='md:w-[382px] w-[262.5px] md:h-[444.88px] h-[395.66px] top-[1px] left-[1px] rounded-[8px] bg-[#FFFFFF]'>
                        <img src={card_Image2} className='md:w-[382px] w-[262.5px] md:h-[214.88px] h-[147.66px] rounded-t-[8px]' alt="" />
                        <div className='md:w-[382px] w-[262.5px] md:h-[230px] h-[248px] md:top-[214.87px] top-[147.65px]'>
                            <div className='md:w-[334px] w-[214.5px] md:h-[134px] h-[152px] top-[24px] left-[24px] relative'>
                                <h6 className='w-[74.19px] h-[21px] font-normal text-[13.13px] leading-[21px] text-[#434343]'>
                                    Your Health
                                </h6>
                                <h4 className='w-[88.33px] h-[33px] top-[25px] font-normal text-[14px] leading-[21px] text-[#434343]'>
                                    7 février 2024
                                </h4>
                                <h2 className='md:w-[313.98px] w-[191.43px] md:h-[72px] h-[90px] top-[62px]  font-bold md:text-[22.88px] text-[19.22px] mt-3 md:leading-[36px] leading-[30px] text-[#000000]'>
                                    #NoJargon: Plongez dans le
                                    monde de la science
                                </h2>
                            </div>
                            <div className='w-[334px] h-[48px] top-[25px] left-[24px] relative'>
                                <Link href={''} className='w-[87.16px] h-[20px] top-[26px] font-bold absolute text-[14.63px] leading-[20px] text-[#000000]'>Lire l'article</Link>
                                <Link href={''} className='w-[16px] h-[16px] top-[28px] left-[102.96px] absolute'>
                                    <svg className='w-[14px] h-[12px] top-[2px] left-[1px] text-[#7A00E6]' width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.6662 6.70615C15.0568 6.31553 15.0568 5.68115 14.6662 5.29053L9.66621 0.290527C9.27559 -0.100098 8.64121 -0.100098 8.25059 0.290527C7.85996 0.681152 7.85996 1.31553 8.25059 1.70615L11.5475 4.9999H1.95996C1.40684 4.9999 0.959961 5.44678 0.959961 5.9999C0.959961 6.55303 1.40684 6.9999 1.95996 6.9999H11.5443L8.25371 10.2937C7.86309 10.6843 7.86309 11.3187 8.25371 11.7093C8.64434 12.0999 9.27871 12.0999 9.66934 11.7093L14.6693 6.70928L14.6662 6.70615Z" fill="#7A00E6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between md:hidden mt-10'>
                <h1 className='w-[21.39px] h-[24px]  font-normal text-[15.13px] leading-[24px] text-[#0D0D0D]  '>
                    1/3
                </h1>
                <div className='flex items-center gap-3'>
                    <div className='w-[36px] h-[36px]  relative  rounded-[9999px] border-[1px] border-[#AEAEAE]'>
                        <svg className='w-[16px] h-[16px] top-[10px] left-[10px] absolute' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.2937 7.82344C0.903076 8.21406 0.903076 8.84844 1.2937 9.23906L6.2937 14.2391C6.68433 14.6297 7.3187 14.6297 7.70933 14.2391C8.09995 13.8484 8.09995 13.2141 7.70933 12.8234L4.41245 9.52969H14C14.5531 9.52969 15 9.08281 15 8.52969C15 7.97656 14.5531 7.52969 14 7.52969H4.41558L7.7062 4.23594C8.09683 3.84531 8.09683 3.21094 7.7062 2.82031C7.31558 2.42969 6.6812 2.42969 6.29058 2.82031L1.29058 7.82031L1.2937 7.82344Z" fill="#AEAEAE" />
                        </svg>

                    </div>
                    <div className='w-[36px] h-[36px] relative  rounded-[99999px] border-[1px] border-[#7A00E6] '>
                        <svg className='w-[16] h-[16] absolute top-[10px] left-[10px]' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7063 9.23594C15.0969 8.84531 15.0969 8.21094 14.7063 7.82031L9.70625 2.82031C9.31563 2.42969 8.68125 2.42969 8.29063 2.82031C7.9 3.21094 7.9 3.84531 8.29063 4.23594L11.5875 7.52969H2C1.44687 7.52969 1 7.97656 1 8.52969C1 9.08281 1.44687 9.52969 2 9.52969H11.5844L8.29375 12.8234C7.90312 13.2141 7.90312 13.8484 8.29375 14.2391C8.68437 14.6297 9.31875 14.6297 9.70938 14.2391L14.7094 9.23906L14.7063 9.23594Z" fill="#7A00E6" />
                        </svg>
                    </div>
                </div>


            </div>
        </div>
    )
}