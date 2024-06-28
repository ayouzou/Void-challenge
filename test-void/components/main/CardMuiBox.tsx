import Link from 'next/link'
import React from 'react'
const Card_Image1 = 'https://s3-alpha-sig.figma.com/img/9d42/dd60/95ea5e700b5121aa00a83e82350f6e9d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIA7Fgr3VbCAYd8On0AtOeu3CFY0ivYH4jKQLYOspIXNVhrzk922Xy4qJU1drLezgtPBjLv9E~mqk6JZLra~N3EORBbdVvH7oDys5fxW-LvEi0kDHpIIwd9qHpOaDj7gNAlEf19nfoTp~64x1AQetHJH3JV6EqakZ-gi3g3VcfhQJPRfLXMk2LSa-Pmu0rKlwfM5104i7gZYMqHtBMBZVDf6fMF3Cgm-7e5i8axXAJ8vBF~bt12xrq9cviPW5f1lxEuhmGSMnmKPLmWgDzoU7UXhyLyshDe0gXQlsN~W~w3wR9hJCyL2lfDxujJhJDkrY6C9a2VE12U8gqiUY6LckA__'
const Card_Image2 = 'https://s3-alpha-sig.figma.com/img/13eb/ff5f/33132ec9354275d166021905bf628175?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-5ILp1F653tS81kJ-s70dzstbJdQhXHubHjAvhOcho8fJU0oqWgqMB~medPvJtK-nWBM6PvNCGI9CRKGCAJ-SNmRYiuhgdWyudjSapJaD3bOsjfjuU2lzXXxjVzhESlhkzGhmfyMNccgvsThNsV-znpWKTFSCorbN0e0XZjrGkzRTotlBOgdoFE0PmmbT3Kwqtexfcj50~5BzqiYyVTq6nX8zmq4FVYtkLP02WD0oANYoiF54bcyE78yRZqvr4wjoiypOsln--LV2kGLaDPdvYExxvjivCOzMZ0i5oQ~W9tt3buXBLfV5g7JjDejfUeXrlcZYK1i4-VQ2apybn0pg__'
const Card_Image3 = 'https://s3-alpha-sig.figma.com/img/7893/e5c1/835d09b405c1a6222533dd1fbfeb5e0b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sfxf0GuVbFnqeIaUnapq7Nl-tzj63ZwxHyiTvuBVmfO6DHy2FB4Z1mu46w6JnJBZgRX3BUDml~B8XuIDx6BH649S09~cnP6x9nUPr0nDJ6XXaMBbgAm~1Xsj0t8X4o0svPeB-Wm6fGDRe0EUfSYCrOmfXGbrwRJKOpyNnAJaK8hl4X7gxAGN4jCuJ5EyJqHC0zBMgftUr0Al226QJAXB1CLLaxa54aZDlVD21iNRYIWHQzUyXjR4EvJ6FeGcQ2QHR~uJfIyCKgfolk92ah99od-L4lyvpR4Y2ATcJ59YTciAtRS-byVB1lzel1nMtxbrSh~H6rqmxqXU5kSXwKBhhQ__'
const CardMuiBox = () => {
    return (
        <>
            <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[464.25px] absolute rounded-[8px] border-[1px] bg-[#C9C9C9]'>
                <div className='md:w-[382px] w-[356px] md:h-[686.88px] h-[462.25px] top-[1px] left-[1px] rounded-[8px] bg-[#FFFFFF]'>
                    <div className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px]'>
                        <img src={Card_Image1} alt="" className='md:w-[382px] w-[356px] rounded-t-[8px]  md:h-[214.88px] h-[200.25px] absolute' />
                        <button className='w-[60px] h-[60px] md:top-[77.44px] top-[70.12px] md:left-[161px] left-[148px] relative rounded-[30px] bg-[#EFEFEF]'>
                            <span className='w-[15px] h-[20px] top-[20px] left-[22.5px] absolute'>
                                <svg className='w-[15px] h-[17.5px] top-[1.25px] text-[#7A00E6]' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35156 1.21343C2.77344 0.857966 2.04688 0.846247 1.45703 1.17828C0.867188 1.51031 0.5 2.13531 0.5 2.815V16.565C0.5 17.2447 0.867188 17.8697 1.45703 18.2017C2.04688 18.5337 2.77344 18.5181 3.35156 18.1666L14.6016 11.2916C15.1602 10.9517 15.5 10.3462 15.5 9.69C15.5 9.03375 15.1602 8.43218 14.6016 8.08843L3.35156 1.21343Z" fill="#7A00E6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className='md:w-[382px] w-[356px] md:h-[472px] h-[262px] md:top-[214.88px] top-[200.25px] absolute'>
                        <div className='w-[334px] h-[148px] top-[24px] left-[24px] relative'>
                            <h3 className='w-[191.7px] h-[36px] font-bold size-[22.31px] leading-[36px] text-[#000000] text-[1.3rem]'>Virus VS Bacteria</h3>
                            <p className='md:w-[328.65px] w-[308px] md:h-[96px] h-[166px] md:top-[52px] font-normal absolute size-[14.63px] leading-[24px] text-[#0D0D0D] md:text-[1rem] text-[1.1rem]'>Ils font partie de votre vie, mais les
                                connaissez-vous vraiment ? Nos scientifiques
                                vous expliquent les principales différences
                                entre un virus et une bactérie.
                            </p>
                        </div>
                        <div className='md:w-[334px] w-[308px] h-[48px] md:top-[400px] top-[190px] md:left-[24px] left-[24px] absolute'>
                            <Link href='#' className='w-[107.16px] h-[20px] top-[26px] size-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>Lire l'article</Link>
                            <Link href={''} className='w-[16px] h-[16px] top-[28px] left-[102.96px] absolute'>
                                <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6662 6.83604C15.0568 6.44541 15.0568 5.81104 14.6662 5.42041L9.66621 0.42041C9.27559 0.0297852 8.64121 0.0297852 8.25059 0.42041C7.85996 0.811035 7.85996 1.44541 8.25059 1.83604L11.5475 5.12979H1.95996C1.40684 5.12979 0.959961 5.57666 0.959961 6.12979C0.959961 6.68291 1.40684 7.12979 1.95996 7.12979H11.5443L8.25371 10.4235C7.86309 10.8142 7.86309 11.4485 8.25371 11.8392C8.64434 12.2298 9.27871 12.2298 9.66934 11.8392L14.6693 6.83916L14.6662 6.83604Z" fill="#7A00E6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


            <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[542.25px] md:left-[400px] md:top-0 top-[480.25px] rounded-[8px] absolute border-[1px] bg-[#C9C9C9]'>
                <div className='md:w-[382px] w-[356px] md:h-[686.88px] h-[560.25px] top-[1px] left-[1px] border-[1px] rounded-[8px] bg-[#FFFFFF]'>
                    <div className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px]'>
                        <img src={Card_Image2} alt="" className='md:w-[382px] w-[356px] rounded-t-[8px]  md:h-[214.88px] h-[200.25px] absolute' />
                        <button className='w-[60px] h-[60px] md:top-[77.44px] top-[70.12px] md:left-[161px] left-[148px] relative rounded-[30px] bg-[#EFEFEF]'>
                            <span className='w-[15px] h-[20px] top-[20px] left-[22.5px] absolute'>
                                <svg className='w-[15px] h-[17.5px] top-[1.25px] text-[#7A00E6]' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35156 1.21343C2.77344 0.857966 2.04688 0.846247 1.45703 1.17828C0.867188 1.51031 0.5 2.13531 0.5 2.815V16.565C0.5 17.2447 0.867188 17.8697 1.45703 18.2017C2.04688 18.5337 2.77344 18.5181 3.35156 18.1666L14.6016 11.2916C15.1602 10.9517 15.5 10.3462 15.5 9.69C15.5 9.03375 15.1602 8.43218 14.6016 8.08843L3.35156 1.21343Z" fill="#7A00E6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className='md:w-[382px] w-[356px] md:h-[472px] h-[540.25px] md:top-[214.88px] top-[200.25px] absolute'>
                        <div className='md:w-[334px] w-[308px] md:h-[232px] h-[244px] top-[24px] left-[24px] relative'>
                            <h3 className='w-[316.02px] h-[72px] font-bold size-[22.31px] leading-[36px] text-[#000000] text-[1.3rem]'>
                                Le parcours B Corp de Notre
                                Santé Grand Public
                            </h3>
                            <p className='md:w-[328.87px] w-[308px] md:h-[144px] h-[166px] md:top-[88px] font-normal absolute size-[14.63px] leading-[24px] text-[#0D0D0D] md:text-[1rem] text-[1.09rem]'>
                                En obtenant la certification B Corp pour
                                Entreprise Santé Grand Public en Amérique du
                                Nord, en Allemagne, en Italie et en Amérique
                                latine, nous faisons partie d'une communauté
                                mondiale qui transforme le monde des
                                affaires en une force pour le bien.
                            </p>
                        </div>
                        <div className='md:w-[334px] w-[308px] h-[48px] md:top-[400px] top-[278px] md:left-[24px] left-[24px] absolute'>
                            <Link href='#' className='w-[107.16px] h-[20px] top-[26px] size-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>Lire l'article</Link>
                            <Link href={''} className='w-[16px] h-[16px] top-[28px] left-[117.41px] absolute'>
                                <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6662 6.83604C15.0568 6.44541 15.0568 5.81104 14.6662 5.42041L9.66621 0.42041C9.27559 0.0297852 8.64121 0.0297852 8.25059 0.42041C7.85996 0.811035 7.85996 1.44541 8.25059 1.83604L11.5475 5.12979H1.95996C1.40684 5.12979 0.959961 5.57666 0.959961 6.12979C0.959961 6.68291 1.40684 7.12979 1.95996 7.12979H11.5443L8.25371 10.4235C7.86309 10.8142 7.86309 11.4485 8.25371 11.8392C8.64434 12.2298 9.27871 12.2298 9.66934 11.8392L14.6693 6.83916L14.6662 6.83604Z" fill="#7A00E6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className='md:w-[384px] w-[358px] md:h-[688.88px] h-[710.25px] absolute top-[1038.5px] md:top-0  md:left-[800px] rounded-[8px] border-[1px] bg-[#C9C9C9]'>
                <div className='md:w-[382px] w-[356px] md:h-[686.88px] h-[708.25px] top-[1px] left-[1px] rounded-[8px] bg-[#FFFFFF]'>
                    <div className='md:w-[382px] w-[356px]  md:h-[214.88px] h-[200.25px]'>
                        <img src={Card_Image3} alt="" className='md:w-[382px] w-[356px] md:h-[214.88px] h-[200.25px] rounded-t-[8px] absolute' />
                        <button className='w-[60px] h-[60px] md:top-[77.44px] top-[70.12px] md:left-[161px] left-[148px] relative rounded-[30px] bg-[#EFEFEF]'>
                            <span className='w-[15px] h-[20px] top-[20px] left-[22.5px] absolute'>
                                <svg className='w-[15px] h-[17.5px] top-[1.25px] text-[#7A00E6]' width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.35156 1.21343C2.77344 0.857966 2.04688 0.846247 1.45703 1.17828C0.867188 1.51031 0.5 2.13531 0.5 2.815V16.565C0.5 17.2447 0.867188 17.8697 1.45703 18.2017C2.04688 18.5337 2.77344 18.5181 3.35156 18.1666L14.6016 11.2916C15.1602 10.9517 15.5 10.3462 15.5 9.69C15.5 9.03375 15.1602 8.43218 14.6016 8.08843L3.35156 1.21343Z" fill="#7A00E6" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className='md:w-[382px] w-[356px] md:h-[472px] h-[508px] md:top-[214.88px] top-[200.25px] absolute'>
                        <div className='md:w-[334px] w-[308px] md:h-[376px] h-[412px]  top-[24px] left-[24px] absolute'>
                            <h3 className='md:w-[272.32px] md:h-[72px] w-[287.57px] h-[60px] md:text-[22.31px]   font-bold text-[18.28px] md:leading-[36px] leading-[30px] text-[#000000]'>
                                Maladie du sommeil : Ne laisser
                                personne de côté
                            </h3>
                            <p className='w-[328.87px] h-[288px] top-[88px] text-[14.43px] leading-[24px] font-normal font absolute'>
                                Maladie tropicale négligée, la maladie du
                                sommeil est généralement mortelle en
                                l'absence de traitement. Les patients infectés
                                par la variante la plus aiguë de la maladie, le
                                T.b rhodesiense, n'ont malheureusement
                                bénéficié que de peu d'innovations en
                                matière de traitement. Mais l'espoir pointe à
                                l'horizon. Pour ces patients, nous voyons le
                                potentiel du premier traitement oral pour
                                cette variante de la maladie,
                                soutenant ainsi l'objectif d'élimination de la
                                maladie du sommeil chez l’humain d'ici 2030.
                            </p>
                        </div>
                        <div className='md:w-[334px] w-[308px] md:h-[48px] h-[48px] md:top-[400px] top-[416px] left-[24px] absolute'>
                            <Link href='#' className='w-[107.16px] h-[20px] top-[26px] text-[14.63px] absolute leading-[20px] text-[#000000] font-bold'>Lire l'article</Link>
                            <Link href={''} className='w-[16px] h-[16px] top-[28px] left-[117.41px] absolute'>
                                <svg className='w-[14px] h-[12px] mt-1 top-[2px] left-[1px] text-[#7A00E6]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6662 6.83604C15.0568 6.44541 15.0568 5.81104 14.6662 5.42041L9.66621 0.42041C9.27559 0.0297852 8.64121 0.0297852 8.25059 0.42041C7.85996 0.811035 7.85996 1.44541 8.25059 1.83604L11.5475 5.12979H1.95996C1.40684 5.12979 0.959961 5.57666 0.959961 6.12979C0.959961 6.68291 1.40684 7.12979 1.95996 7.12979H11.5443L8.25371 10.4235C7.86309 10.8142 7.86309 11.4485 8.25371 11.8392C8.64434 12.2298 9.27871 12.2298 9.66934 11.8392L14.6693 6.83916L14.6662 6.83604Z" fill="#7A00E6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CardMuiBox