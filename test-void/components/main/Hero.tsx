import Link from 'next/link'
import React from 'react'
const IMAGE_URL = 'https://s3-alpha-sig.figma.com/img/e94f/50d1/6a0efd563494202626221cfd59b8110c?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RVp8a3FlbB3nLdxgAa9sVUZuYsdMGfqzpcoTs0-wTc4kiOR7zlzgrFrclW~~tV-NVFOnRX~7o6EJ3jjL~AhAMFd-tyzKBwN1hztMHn8RZeQd9zyBy5ZZHny8aA4LyZq1efAS9C9ymKwBd2MMHGnghQqfHxqDGqsCpqf4ucTuYzNZxIrUsxUMsOJP5VWCxa89xvrUh4n-IlumZH3MEk8SdmN3~R7UTig3aC7svE5dzkv~ohfhN4W1bKhL2aE-t2-wc16AQOuJku-59jbSrn4mw~jnbPGLcYWi6nGkxBerTGy1KdpV-2oL-C~DSiMu44KAjZGBb36MEWRxxpknXki48g__'
const Hero = () => {
    return (
        <div className='md:min-w-[1440px] min-w-[390px] md:h-[576px] h-[702px] bg-[#FFFFFF] relative'>
            <div className='md:min-w-[1440px] min-w-[390px] md:h-[576px] h-[296px]'
                style={{
                    backgroundImage: `url(${IMAGE_URL})`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                }} >
            </div>
            <div className='md:min-w-[1440px] w-[390px] md:h-[452px] h-[472px] md:top-[62px] top-[232px] absolute'>
                <div className='md:w-[590px] min-w-[358px] md:h-[452px] h-[468px] top-[2px] md:left-[128px] left-[16px]  rounded-[8px] bg-[#FFFFFF]  relative'>
                    <h1 className='absolute text-[#000000] md:min-w-[512.61px] min-w-[292.63px] h-[216px]  md:top-[31.75px] top-[16px] md:left-[32px] left-[16px] font-bold md:size-[44.44px] size-[33.61px] md:leading-[72px] leading-[54px] md:text-[2.7rem] text-[2rem] '>
                        Journée des maladies
                        rares 2024 : L'équité en
                        action
                    </h1>
                    <p className='relative md:min-w-[519.28px] min-w-[307.34px] md:h-[96px] h-[144px] md:top-[264px] top-[248px] md:left-[32px] left-[16px] font-normal md:size-[14.5px] size-[15px] leading-[24px] text-[#0D0D0D] text-[0.95rem]'>
                        À l'occasion de la Journée des maladies rares, il est plus important que jamais de continuer à rechercher un diagnostic, une innovation, un
                        soutien et un accès équitables pour les personnes atteintes de maladies rares.
                    </p>
                    <button className='absolute min-w-[146.23px] h-[44px] md:top-[376px] top-[408px] md:left-[32px] left-[16px]  rounded-[4px] bg-[#7A00E6]'>
                        <Link href={'#'} className='text-[#FFFFFF] font-normal w-[98.43px] h-[16px] top-[14px] left-[24px] size-[14.25px] leading-[16px] text-center'>
                            En savoir plus
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Hero