import Link from 'next/link'
import React from 'react'
const Card_Image1 = 'https://s3-alpha-sig.figma.com/img/9d42/dd60/95ea5e700b5121aa00a83e82350f6e9d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DIA7Fgr3VbCAYd8On0AtOeu3CFY0ivYH4jKQLYOspIXNVhrzk922Xy4qJU1drLezgtPBjLv9E~mqk6JZLra~N3EORBbdVvH7oDys5fxW-LvEi0kDHpIIwd9qHpOaDj7gNAlEf19nfoTp~64x1AQetHJH3JV6EqakZ-gi3g3VcfhQJPRfLXMk2LSa-Pmu0rKlwfM5104i7gZYMqHtBMBZVDf6fMF3Cgm-7e5i8axXAJ8vBF~bt12xrq9cviPW5f1lxEuhmGSMnmKPLmWgDzoU7UXhyLyshDe0gXQlsN~W~w3wR9hJCyL2lfDxujJhJDkrY6C9a2VE12U8gqiUY6LckA__'
const Card_Image2 = 'https://s3-alpha-sig.figma.com/img/13eb/ff5f/33132ec9354275d166021905bf628175?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-5ILp1F653tS81kJ-s70dzstbJdQhXHubHjAvhOcho8fJU0oqWgqMB~medPvJtK-nWBM6PvNCGI9CRKGCAJ-SNmRYiuhgdWyudjSapJaD3bOsjfjuU2lzXXxjVzhESlhkzGhmfyMNccgvsThNsV-znpWKTFSCorbN0e0XZjrGkzRTotlBOgdoFE0PmmbT3Kwqtexfcj50~5BzqiYyVTq6nX8zmq4FVYtkLP02WD0oANYoiF54bcyE78yRZqvr4wjoiypOsln--LV2kGLaDPdvYExxvjivCOzMZ0i5oQ~W9tt3buXBLfV5g7JjDejfUeXrlcZYK1i4-VQ2apybn0pg__'
const Card_Image3 = 'https://s3-alpha-sig.figma.com/img/7893/e5c1/835d09b405c1a6222533dd1fbfeb5e0b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sfxf0GuVbFnqeIaUnapq7Nl-tzj63ZwxHyiTvuBVmfO6DHy2FB4Z1mu46w6JnJBZgRX3BUDml~B8XuIDx6BH649S09~cnP6x9nUPr0nDJ6XXaMBbgAm~1Xsj0t8X4o0svPeB-Wm6fGDRe0EUfSYCrOmfXGbrwRJKOpyNnAJaK8hl4X7gxAGN4jCuJ5EyJqHC0zBMgftUr0Al226QJAXB1CLLaxa54aZDlVD21iNRYIWHQzUyXjR4EvJ6FeGcQ2QHR~uJfIyCKgfolk92ah99od-L4lyvpR4Y2ATcJ59YTciAtRS-byVB1lzel1nMtxbrSh~H6rqmxqXU5kSXwKBhhQ__'
const card_info = [
    {
        id: 1,
        title: 'Virus VS Bacteria',
        content: 'Ils font partie de votre vie, mais les connaissez-vous vraiment ? Nos scientifiques vous expliquent les principales différences entre un virus et une bactérie.',
        link: "Lire l'article",
        image: Card_Image1,
        video: true
    },
    {
        id: 2,
        title: 'Le parcours B Corp de Notre Santé Grand Public',
        content: "En obtenant la certification B Corp pour Entreprise Santé Grand Public en Amérique du Nord, en Allemagne, en Italie et en Amérique latine, nous faisons partie d'une communauté mondiale qui transforme le monde des affaires en une force pour le bien.",
        link: "En savoir plus",
        image: Card_Image2,
        video: false
    },
    {
        id: 3,
        title: 'Maladie du sommeil : Ne laisser personne de côté',
        content: `Maladie tropicale négligée, la maladie du
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
maladie du sommeil chez l’humain d'ici 2030.`,
        link: "Lire l'article",
        image: Card_Image3,
        video: true
    }
]
const CardMuiBox = () => {
    return (
        <div className='md:mx-[160px] mx-[5px]  h-full bg-[#FFFFFF] md:flex md:flex-row flex flex-col justify-center gap-3'>
            {
                card_info.map((info) => (
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
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.6662 6.83604C15.0568 6.44541 15.0568 5.81104 14.6662 5.42041L9.66621 0.42041C9.27559 0.0297852 8.64121 0.0297852 8.25059 0.42041C7.85996 0.811035 7.85996 1.44541 8.25059 1.83604L11.5475 5.12979H1.95996C1.40684 5.12979 0.959961 5.57666 0.959961 6.12979C0.959961 6.68291 1.40684 7.12979 1.95996 7.12979H11.5443L8.25371 10.4235C7.86309 10.8142 7.86309 11.4485 8.25371 11.8392C8.64434 12.2298 9.27871 12.2298 9.66934 11.8392L14.6693 6.83916L14.6662 6.83604Z" fill="#7A00E6" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default CardMuiBox