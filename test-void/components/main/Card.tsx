import Link from 'next/link'
import React from 'react'
const Card_image = 'https://s3-alpha-sig.figma.com/img/4b51/6386/9bbcd81815464755aa6d26b936fa8df4?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mAqKyzI6bK65n23ew2YUjKKOiV4Hnf2lyGiPn6WIKQ24LDxMMPSeR7FoAfLNA4a09BPXOacg~JibKLA2~NLleAlsgcqo-qhbhLOHIocI3hEL9TAfsy5zoZq2MX4IhAizZo2qtUC-rm3T2bNhwdaNcX0Bb3tYcotNvxiwOft7xHC-bMJ4aIKLdGAe3XLnXgE-DNK0CVd8X-I9S-YNiDkHuUIqxYqLn7BDZAKtyo61xLCy4k3azwGAxxy-qkEuvwWyEHBxBWZWaCDXToCLtJDi23FrjcdbQlmokKxi49Xei-Wn~qAQ10Dt04fHuZ9g2K-wXAFA2rxgnokxz9KlMweBuQ__'
const Card_Image2 = 'https://s3-alpha-sig.figma.com/img/4df0/7322/bb06c5c217c6c401e82dd9f885d76650?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ffUVaC4ZvBiP60toB4E2UhEe4MyD5ZS8RObLegrCxaD5uxV1w3EO2YiTdWEvqff1F~vW2xOwnoO5R~rJ4dywnN9msRQUYXOkugaLrxM9zIm2sLMiFV6IVgdV9MENin3R6AcqYK7LKaKhFvHVr8IV7uts0I3Hgjgrk-OMPO4sx4s-bDFFhHLZobslp-5z8~ImPvD7iodKf5GphHbu9t0onQAEZ9ARrV97Pu6cqtUzPoLxIPp7H97LkkYdZQJqwty2JodZv5BXXEr5ghLHAp76p1BFcWvMibyFvtSDAcnT4xTD2qVAe8uvNG1dvIAlebdnqQN84~qK7cC3ANx~X~a1kA__'
const Card_Image3 = 'https://s3-alpha-sig.figma.com/img/6f08/d46e/64253ad0b1a21c321412576769c183fe?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lwFg3Z4C51s8duuguaDFsKIU4NUaUKxv0vxLcVn2FkKT24olwQSBj2ixBtDlsBW8NZiZa4kmmIyocgxRp~mulQ5~rgBj4QQrwzLBVB9cLnZM19qL5uobqKoYyOqsU2omcS7iMzxRq~xslxhUfiiyFC-7E~kHUrRT~NtKHEVzP2j1JdGgheADJL1YR0-eP4Q6xWU57gmmoao2YNYILKdu7lHODmzFk4Yb5wf~qZu8QtGYgR4SsuByjpzQuPJo-QagNrPtivHmFQ301V79br9ZYq3e~B7hccIPdLITO81EdAwHK9UO7rKkVkrCMyzFTVvo-R3zoiT6tXLJfJmJZ3kVew__'
const Card = () => {
    return (
        <div className=''>
            <div className='md:min-w-[1184px] w-[358px] md:h-[384.75px] h-[549.38px] md:top-[48px] relative bg-[#FFFFFF] '>
                <h1 className='md:min-w-[362.65px] w-[282.11px] md:h-[108px] h-[84px] md:top-0 top-[225.13px] font-bold md:size-[33.47px] size-[26.03px] md:leading-[54px] leading-[42px] text-[#000000] absolute md:text-[2rem] text-[1.5rem]'>
                    Le drapeau de la lutte
                    contre les méningites
                </h1>
                <p className='md:min-w-[451.93px] w-[344.33px] absolute md:h-[168px] h-[192px] md:top-[132px] top-[321.38px] font-normal size-[14.88px] leading-[24px] text-[#0D0D0D] '>
                    Créé en collaboration avec trois para-athlètes, Ellie Challis,
                    Théo Curin, Davide Morana et plusieurs membres de la
                    Meningitis Research Foundation / Confederation of Meningitis
                    Organisations, le drapeau de la lutte contre les méningites vise <br />
                    à sensibiliser le public à une maladie qui reste encore, à ce
                    jour, un problème majeur de santé publique à l’échelle
                    mondiale.
                </p>
                <h3 className='md:min-w-[118.61px] w-[110.61px] h-[20px] absolute md:top-[326px] top-[527.38px] font-bold size-[14.75px] leading-[20px] text-[#000000] md:mt-4 mt-10'>En savoir plus </h3>
                <svg className='w-[16px] h-[16px] md:mt-4 mt-10 md:top-[328px] top-[529.38px] absolute left-[117.41px] ml-3' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z" fill="#7A00E6" />
                </svg>
                <div className='md:min-w-[684px] min-w-[358px] md:h-[384.75px] h-[201.38px] md:left-[500px] absolute'>
                    <img src={Card_image} className='md:min-w-[684px] min-w-[358px] md:h-[384.75px] h-[201.38px] rounded-[8px] ' alt="" />
                </div>
            </div>
            <div className='md:min-w-[1184px] w-[358px] md:h-[348.5px] h-[507.88px] md:top-[160.75px] top-[140.38px] relative bg-[#FFFFFF] '>
                <h1 className='md:min-w-[375.61px] w-[292.18px] md:h-[108px] h-[84px] md:left-[732px] md:top-0 top-[231.62px] font-bold md:size-[33.33px] size-[25.92px] md:leading-[54px] leading-[42px] text-[#000000] absolute md:text-[2rem] text-[1.5rem]'>
                    Les femmes au sein de
                    Entreprise - Cristina
                </h1>
                <p className='md:min-w-[439.1px] w-[352.04px] absolute md:h-[120px] h-[144px] md:top-[132px] top-[327.87px] md:left-[732px] font-normal md:size-[14.88px] size-[15.13px] leading-[24px] text-[#0D0D0D] '>
                    Rencontrez Cristina Zamora, notre cheffe de projet pour les
                    opérations de R&D en Amérique du Nord et l'une des
                    nombreuses scientifiques inspirantes qui contribuent à
                    renforcer la prochaine génération de femmes leaders dans le
                    domaine de la santé et au-delà.
                </p>
                <h3 className='md:min-w-[110.61px] w-[110.61px] h-[20px] absolute md:top-[278px] top-[485.87px] md:left-[732px] font-bold size-[14.75px] leading-[20px] text-[#000000] md:mt-4 mt-10'>
                    En savoir plus
                </h3>
                <Link href={'#'} className='w-[16px] h-[16px] md:mt-4 mt-10 md:top-[280px] absolute top-[487.87px] md:left-[849.41px] left-[117.41px]'>
                    <svg className='w-[14px] h-[12px]  top-[2px]  absolute left-[1px]  text-[#7A00E6]' width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1162 6.95627C14.5068 6.56565 14.5068 5.93127 14.1162 5.54065L9.11616 0.540649C8.72554 0.150024 8.09116 0.150024 7.70054 0.540649C7.30991 0.931274 7.30991 1.56565 7.70054 1.95627L10.9974 5.25002H1.40991C0.856787 5.25002 0.409912 5.6969 0.409912 6.25002C0.409912 6.80315 0.856787 7.25002 1.40991 7.25002H10.9943L7.70366 10.5438C7.31304 10.9344 7.31304 11.5688 7.70366 11.9594C8.09429 12.35 8.72866 12.35 9.11929 11.9594L14.1193 6.9594L14.1162 6.95627Z" fill="#7A00E6" />
                    </svg>
                </Link>
                <div className='md:min-w-[684px] min-w-[358px] md:h-[342px] h-[201.38px] md:left-[500px]  rounded-[8px]'>
                    <img src={Card_Image2} className='md:min-w-[684px] relative min-w-[358px] md:h-[342px] h-[201.38px] rounded-[8px] ' alt="" />
                    <button className='w-[60px] h-[60px] md:top-[141px] top-[70.68px] absolute md:left-[312px] left-[149px] rounded-[30px] bg-[#EFEFEF]'>
                        <span className='w-[15] h-[20px] top-[20px] left-[22.5px] absolute'  >
                            <svg className='w-[15px] h-[17.5px] top-[1.25px] text-[#7A00E6]' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.35156 0.773493C2.77344 0.418024 2.04688 0.406305 1.45703 0.738337C0.867188 1.07037 0.5 1.69537 0.5 2.37506V16.1251C0.5 16.8047 0.867188 17.4297 1.45703 17.7618C2.04688 18.0938 2.77344 18.0782 3.35156 17.7266L14.6016 10.8516C15.1602 10.5118 15.5 9.90631 15.5 9.25006C15.5 8.59381 15.1602 7.99224 14.6016 7.64849L3.35156 0.773493Z" fill="#7A00E6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
            <div className='md:w-[1184px] w-[358px] md:h-[348.5px] h-[459.88px] md:top-[280.25px] top-[285.25px] relative'>
                <h1 className='md:min-w-[406.86px] w-[316.49px] md:h-[108px] h-[84px] md:top-0 top-[231.63px] font-bold md:size-[33.61px] size-[26.25px] md:leading-[54px] leading-[42px] text-[#000000] absolute md:text-[2rem] text-[1.5rem]'>
                    200 jours avant les Jeux
                    Paralympiques
                </h1>
                <p className='md:min-w-[398.78px] w-[357.33px] absolute md:h-[72px] h-[96px] md:top-[132px] top-[327.88px] font-normal md:size-[15px] size-[14.75px] leading-[24px] text-[#0D0D0D] '>
                    Si vous n'avez pas encore entendu parler du
                    #DrapeauMéningites, regardez la vidéo de Vaskange et
                    découvrez la signification de chaque couleur.
                </p>
                <h3 className='md:min-w-[118.61px] w-[110.61px] h-[20px] absolute md:top-[230px] top-[437.88px] font-bold size-[14.75px] leading-[20px] text-[#000000] md:mt-4 mt-10'>En savoir plus </h3>
                <svg className='w-[16px] h-[16px] md:mt-4 mt-10 md:top-[232px] top-[439.88px] absolute left-[117.41px] ml-3' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.41 0.5C9.85691 0.5 9.41003 0.946875 9.41003 1.5C9.41003 2.05313 9.85691 2.5 10.41 2.5H12.9944L6.70378 8.79375C6.31316 9.18437 6.31316 9.81875 6.70378 10.2094C7.09441 10.6 7.72878 10.6 8.11941 10.2094L14.41 3.91563V6.5C14.41 7.05312 14.8569 7.5 15.41 7.5C15.9632 7.5 16.41 7.05312 16.41 6.5V1.5C16.41 0.946875 15.9632 0.5 15.41 0.5H10.41ZM2.91003 1.5C1.52878 1.5 0.410034 2.61875 0.410034 4V14C0.410034 15.3813 1.52878 16.5 2.91003 16.5H12.91C14.2913 16.5 15.41 15.3813 15.41 14V10.5C15.41 9.94687 14.9632 9.5 14.41 9.5C13.8569 9.5 13.41 9.94687 13.41 10.5V14C13.41 14.275 13.185 14.5 12.91 14.5H2.91003C2.63503 14.5 2.41003 14.275 2.41003 14V4C2.41003 3.725 2.63503 3.5 2.91003 3.5H6.41003C6.96316 3.5 7.41003 3.05312 7.41003 2.5C7.41003 1.94687 6.96316 1.5 6.41003 1.5H2.91003Z" fill="#7A00E6" />
                </svg>
                <div className='md:min-w-[684px] min-w-[358px] md:h-[342px] h-[201.38px] md:left-[500px] absolute rounded-[8px]'>
                    <img src={Card_Image3} className='md:min-w-[684px] min-w-[358px] md:h-[342px] h-[201.38px] absolute rounded-[8px] ' alt="" />
                    <button className='min-w-[60px] h-[60px] md:top-[141px] top-[70.69px] relative  md:left-[312px] left-[149px] rounded-[30px] bg-[#EFEFEF]'>
                        <span className='min-w-[15] h-[20px] top-[20px] left-[22.5px] absolute'  >
                            <svg className='min-w-[15px] h-[17.5px] top-[1.25px] text-[#7A00E6]' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.35156 0.773493C2.77344 0.418024 2.04688 0.406305 1.45703 0.738337C0.867188 1.07037 0.5 1.69537 0.5 2.37506V16.1251C0.5 16.8047 0.867188 17.4297 1.45703 17.7618C2.04688 18.0938 2.77344 18.0782 3.35156 17.7266L14.6016 10.8516C15.1602 10.5118 15.5 9.90631 15.5 9.25006C15.5 8.59381 15.1602 7.99224 14.6016 7.64849L3.35156 0.773493Z" fill="#7A00E6" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card