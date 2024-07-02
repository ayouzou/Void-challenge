import React from 'react'
import CardProgress from './CardProgress'
const Card_Info = [
    {
        id: 1,
        content: `Relations Investisseurs`,
        link: 'En savoir plus',
        icon:
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7063 8.93613C15.0969 8.54551 15.0969 7.91113 14.7063 7.52051L9.70625 2.52051C9.31563 2.12988 8.68125 2.12988 8.29063 2.52051C7.9 2.91113 7.9 3.54551 8.29063 3.93613L11.5875 7.22988H2C1.44687 7.22988 1 7.67676 1 8.22988C1 8.78301 1.44687 9.22988 2 9.22988H11.5844L8.29375 12.5236C7.90312 12.9143 7.90312 13.5486 8.29375 13.9393C8.68437 14.3299 9.31875 14.3299 9.70938 13.9393L14.7094 8.93926L14.7063 8.93613Z" fill="#7A00E6" />
            </svg>
    },
    {
        id: 2,
        content: `Carrières`,
        link: 'En savoir plus',
        icon:
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7063 8.93613C15.0969 8.54551 15.0969 7.91113 14.7063 7.52051L9.70625 2.52051C9.31563 2.12988 8.68125 2.12988 8.29063 2.52051C7.9 2.91113 7.9 3.54551 8.29063 3.93613L11.5875 7.22988H2C1.44687 7.22988 1 7.67676 1 8.22988C1 8.78301 1.44687 9.22988 2 9.22988H11.5844L8.29375 12.5236C7.90312 12.9143 7.90312 13.5486 8.29375 13.9393C8.68437 14.3299 9.31875 14.3299 9.70938 13.9393L14.7094 8.93926L14.7063 8.93613Z" fill="#7A00E6" />
            </svg>
    },
    {
        id: 3,
        content: `Code de conduite`,
        link: 'En savoir plus',
        icon:
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7063 8.93613C15.0969 8.54551 15.0969 7.91113 14.7063 7.52051L9.70625 2.52051C9.31563 2.12988 8.68125 2.12988 8.29063 2.52051C7.9 2.91113 7.9 3.54551 8.29063 3.93613L11.5875 7.22988H2C1.44687 7.22988 1 7.67676 1 8.22988C1 8.78301 1.44687 9.22988 2 9.22988H11.5844L8.29375 12.5236C7.90312 12.9143 7.90312 13.5486 8.29375 13.9393C8.68437 14.3299 9.31875 14.3299 9.70938 13.9393L14.7094 8.93926L14.7063 8.93613Z" fill="#7A00E6" />
            </svg>
    }
]
const PlusLoin = () => {
    return (

        <div className='mt-14'>
            <h1 className='p-2 font-bold text-[30.5px] leading-[48px] text-[#000000]'>
                Aller plus loin
            </h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 p-3'>
                {
                    Card_Info.map((info) => (
                        <CardProgress key={info.id} content={info.content} link={info.link} icon={info.icon} />
                    ))
                }
            </div>
        </div>

    )
}

export default PlusLoin