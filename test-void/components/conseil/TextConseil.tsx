import React from 'react'
const TextConseil = ({ title, content }: { title: string, content: string[] }) => {
    return (
        <div className='md:h-[440px] h-[460px] flex items-center justify-center'>
            <div className='w-[600px]'>
                <h1 className='font-bold text-[36.13px] leading-[48px]'>{title}</h1>
                <p className='text-[15px] leading-[24px] text-[#0D0D0D] font-normal pt-2'>
                    {content[0]}
                </p>
                <p className='text-[15px] leading-[24px] text-[#0D0D0D] font-normal md:pt-20 pt-16'>
                    {content[1]}
                </p>
            </div>
        </div>
    )
}
export default TextConseil