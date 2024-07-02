import Link from 'next/link'
import React from 'react'
import NosProgress from './NosProgress'
import PlusLoin from './PlusLoin'

const Image_Card = 'https://s3-alpha-sig.figma.com/img/fe68/b318/f443624f74d5843e2c8ead6bd77bb6e2?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TmPiFCiX1ZoN94uKzUQCquIyRseTLymqaDAJ-BcCbGyQKxnJQj0PQMLRm4sFDi7tlzFQN-~jEcGmNjbbLbvIgDwLbQHESSwiGn56V05Lj6IrI0--7ImbGvagnPO2G4fnpfwsGnXkvY7r3z-hY5Z-PFYCra5H1MmH2XkKj8kt2BF9K3semQzHjoCp6s9v9nsNy6eT7REWuNb1200adBfM0q2K3KAHGlz3CUPUPtebgH8HkVgEhar4T4WmVl2RSt5COaD~bo-XckDwj2mbn8P92TrDlOx7JOg5sPOwrrqffg13usz~EwFAq~Y3BlUGXECMD2Wj31xP7vXTRCAPR8MRKA__'
const Image_Card2 = 'https://s3-alpha-sig.figma.com/img/abd4/88d3/5e4334e25ac436d8c93154b585123a0e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7Z7d9w4p59NFuegRAYdETAErL~~VdGnDbNA~vbZc5mvq2KU-4ryEvzmaM5TQpfEY2EEyBsbRbk~3q~4Xj324daa0CpCRcbPa3oJ-VX3Bfk-jqVgmcZL~kiY6V9BqayioYjS4iP32adoQ8DMP1Hlz9dTX58H4Z0FP6Fu~ZqvVXtD3E~tfDLU87tW8-pkfiFPYtvtLELyy23lLcwPDahRVozFHF5uVLJayQ-81~ukV2dDvPOBPVBR2R5AjNs0c2-5WSGp3B5AYbdw1oQurqiokW7oa-MAdWoOAONgQGJr-5nTMgLXpCfjTdrGC8-lxPpSHFgStI3~V2o-Bppg4TMLew__'
const Image_Card3 = 'https://s3-alpha-sig.figma.com/img/53ae/5c49/207e37d4b1e38ac22f0ed1be8c58f763?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QQ9ubIP-PJAVh8qYxR~h~u~4fxarZGtIs0cfr6hcEQikknAvaRJDmGiLIWIHj1xBCDMIPCY7OFeKsaDMO1eph~5wfr6A7B3vL4IBtWSRhSXc-DZ1YOjUCAgATDhWQHTJeC6BYMaK7fGGIcCAnbr0JR6jzrQQDS2Ft-WDaK1yBzcDLqPO6dotKolOf8VCw5PDow2xX~RnN46RafQ1n0PBq1YwVhvllIJ1Rci4ud3bws8cego9i5RrBAKPwhQxGyzdl-XNhzR07uJ~QsdpYOfs0jL0WUGvbVE5WzAl~7HxL~bPwLEo7dk~8t4aIsZWYbuNNc7S4ozmFGkfyPU5JMWwTg__'
const Image_card4 = 'https://s3-alpha-sig.figma.com/img/36e7/e5dc/ac73be40061f585038d83c1e6e2d0a12?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UtYvowVatzvKw2FuqEv-w4cZp0il0oXtw494rpkU7WUGSSmS0wZIGwxv~2l0t9i~VZWXHI3Zd9iAwfWUZQN3cKWwGfE9cxNuwXnLrMd8H0vIrM4x1ZXeeBAIPU-abb-nMvdFrWsC0kC7~yIVIZMoIsayLmSfoQ9W-KFNR4B4IJNJ8IesFy5WPSwh10fW3KlNpYyeQ2~3j7xBak5eHPU1E4jQ3OFFnSZL28Lh5nmebUqnoZ7Gbhs7kWRs~k1Cdw~mGRGWkQkQXQaNjJelneqr8U-krfWMLcx981J0ejFd26dL~ok~wz5qvXx9E1P3OPg6ebw4NaA66UGlZqUuGlPVlQ__'
const Image_Card5 = 'https://s3-alpha-sig.figma.com/img/60e9/0f1f/66d33d0bf92296caa50dfe9c6481e021?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lVpdekjqAP7RS3KNVv1efG~pRGLYr6kmTFwQVZGywdvV7Zj85ZxDdlxIqPTrtwxuK~81B0h4pusNteadNYnOQaN7B3uiy-3i7Ul-776dhhf1cmBb~jkSbLcxBod1py~7zlJKqDSDNeW3WFtkTHOoKy6OeYEe6HsCqu4CXMg4VB0IUKo5U2cx-7XJnL2f5PofOZFT06ISitPs-bELTAp-wq97lV6utvVlx56zOUplm9Rm6Jo-Xke0Qq4SGwbSjnGWB7BvVYYQBpFxq9OUvjbk5oSGHGU2cbJhRY5wfwC4C4BaMV00b7bi0afKhE0mjd~~tdyv-ncT5c-P3sdKHAnO9A__'
const CardInfo = [
    {
        id: 1,
        title: 'Transformer la pratique de la médecine',
        content: [
            'Prioriser et concentrer nos efforts nous permet de libérer et de maximiser le potentiel de nos médicaments, vaccins et solutions de santé pour les gens, et ce au sein de nos quatre entités commerciales globales : Médecine de Spécialités, Vaccins, Médecine Générale et Santé Grand Public.',
            'Nous souhaitons devenir un leader en immunologie et avoir un impact positif pour des millions de patients souffrant de maladies dermatologiques, respiratoires, gastroentérologiques et d’autres maladies déclenchées par le système immunitaire.',
            'Nous travaillons chaque jour à conserver notre leadership dans la prévention en protégeant un demi-milliard de personnes tous les ans grâce à notre portefeuille de vaccins et en explorant le potentiel de nos plateformes technologiques et de production, notamment l’ARN messager.'
        ],
        image: Image_Card2,
        position: 'right'
    },
    {
        id: 2,
        title: 'Faire avancer la science la plus innovante',
        content: [
            'Nous renforçons notre pipeline avec un flot constant de potentielles thérapies innovantes qui pourraient radicalement changer les choses dans le traitement et la prévention de maladies à travers le monde.  ',
            'Nous possédons une large variété de plateformes de recherche qui nous permettent de faire avancer la science dans six aires thérapeutiques : Immunologie et Inflammation, Oncologie, Maladies Rares, Maladies Rares du Sang, Neurologie et Vaccins.  '
        ],
        image: Image_Card3,
        position: 'left'

    },
    {
        id: 3,
        title: 'Avoir un impact sociétal',
        content: [
            'Les défis auxquels la société et la planète doivent faire face sont de plus en plus complexe. Les évolutions démographiques, les inégalités persistantes dans l’accès aux soins de santé et les menaces liées au changement climatique nous motivent à étendre nos engagements pour la société.  ',
            'Notre stratégie d’impact sociétal se différencie de celles de nos pairs et est intégrée à tous les niveaux de notre organisation. Nous souhaitons avoir un impact fort et durable sur la santé, le bien-être des gens, des communautés vulnérables, de nos employés, et de la planète.  '
        ],
        image: Image_card4,
        position: 'right'

    },
    {
        id: 4,
        title: 'Aller plus loin pour la Diversité, l’Équité et l’Inclusion',
        content: [
            'Nous prenons des initiatives pour construire un leadership représentatif de la société et créer un environnement de travail ou les gens peuvent présenter la meilleure et la plus authentique version d’eux-mêmes.  ',
            'Au-delà de l’environnement de travail, nous améliorons la diversité au sein de nos essais cliniques et avec nos fournisseurs. Notre Conseil Diversité, Equité et Inclusion, composé de leaders externes reconnus et de dirigeants, s’assure que nous implémentons avec diligence nos engagements.  '
        ],
        image: Image_Card5,
        position: 'left'

    }
]
const CardContent = () => {
    return (
        <div className='xl:min-w-[1184px] md:mx-[8.5rem] mt-10 bg-[#FFFFFF] overflow-hidden'>
            <div className='md:h[396.5px] xl:flex xl:flex-row flex flex-col md:pt-5 mx-5 lg:mx-0'>
                <div className='md:min-w-[700px] md:h-[396.5px] md:py-7 pb-8 relative  '>
                    <img src={Image_Card} className='w-full h-full object-cover xl:ml-0   relative rounded-[8px]' alt="" />
                    <button className='md:top-[166px] md:block hidden top-[110px] md:left-[320px] left-[140px] bg-[#EFEFEF] rounded-[30px] w-[60px] h-[60px] absolute '>
                        <svg className='absolute top-[20px] left-[20px]' width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.35156 2.27349C2.77344 1.91802 2.04688 1.90631 1.45703 2.23834C0.867188 2.57037 0.5 3.19537 0.5 3.87506V17.6251C0.5 18.3047 0.867188 18.9297 1.45703 19.2618C2.04688 19.5938 2.77344 19.5782 3.35156 19.2266L14.6016 12.3516C15.1602 12.0118 15.5 11.4063 15.5 10.7501C15.5 10.0938 15.1602 9.49224 14.6016 9.14849L3.35156 2.27349Z" fill="#7A00E6" />
                        </svg>
                    </button>
                </div>
                <div className=' xl:w-[700px]  h-[396.5px]  '>
                    <div className='xl:ml-5 mt-2   '>
                        <h1 className='font-bold text-[33.47px] xl:w-[500px]  leading-[54px] text-[#000000] xl:px-5 pt-2'>
                            Les Voix derrière notre
                            Raison d’être
                        </h1>
                        <p className='font-normal  xl:w-[500px] text-[14.63px] leading-[24px] text-[#000000] xl:px-5 pt-5'>
                            Nous poursuivons les miracles de la science pour améliorer la
                            vie des gens, et parfois cela signifie recommencer à zéro avec
                            un plan B, un plan C, ou même un plan Z. Ce film rassemble les
                            pensées personnelles et les ambitions des personnes chez
                            Sanofi, qui trouvent leur inspiration auprès de leurs proches,
                            leur motivation auprès de leur famille, et une force unie pour
                            se dépasser et avancer.
                        </p>
                    </div>
                </div>
            </div>
            {
                CardInfo.map((Info) => (
                    <CardFlexible title={Info.title} content={Info.content} key={Info.id} image={Info.image} position={Info.position} />
                ))
            }

            <NosProgress />
            <PlusLoin/>
        </div>
    )
}

const CardFlexible = ({ title, content, image, position }: { title: string, content: string[], image: string, position: string }) => {
    return (
        <div className='md:h[396.5px] xl:flex xl:flex-row flex flex-col md:pt-5 mx-5 lg:mx-0  mt-10 '>
            {
                position === "right" ?
                    <>
                        <div className='xl:w-[700px] min-h-[396.5px] ml-3 xl:order-first order-last xl:mt-0 mt-10'>
                            <div className='mr-5  mt-4 '>
                                <h1 className='font-bold text-[33.47px] leading-[54px] text-[#000000] pr-5 pt-2 '>
                                    {title}
                                </h1>
                                {
                                    content.map((_) => (
                                        <p className='font-normal text-[14.5px] leading-[24px] text-[#000000] pr-5  pt-5'>
                                            {_}
                                        </p>
                                    ))
                                }
                                <div className='mb-10'>
                                    <Link href={'#'} className='text-[14.75px] leading-[20px] font-bold text-[#000000] flex gap-3 pl-3 pt-6 items-center'>
                                        En savoir plus
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7063 6.70627C14.0969 6.31565 14.0969 5.68127 13.7063 5.29065L8.70625 0.290649C8.31563 -0.0999756 7.68125 -0.0999756 7.29063 0.290649C6.9 0.681274 6.9 1.31565 7.29063 1.70627L10.5875 5.00002H1C0.446875 5.00002 0 5.4469 0 6.00002C0 6.55315 0.446875 7.00002 1 7.00002H10.5844L7.29375 10.2938C6.90312 10.6844 6.90312 11.3188 7.29375 11.7094C7.68437 12.1 8.31875 12.1 8.70938 11.7094L13.7094 6.7094L13.7063 6.70627Z" fill="#7A00E6" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='xl:min-w-[700px] md:h-[396.5px] md:py-7 pb-8 xl:ml-6'>
                            <img src={image} className='w-full h-[384.75px] object-cover relative rounded-[8px]' alt="" />
                            <p>Abhishek Shettar, mRNA - Scientist DP-LNP formulation Development, États-Unis</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='xl:min-w-[700px] md:h-[396.5px] md:py-7 pb-8 '>
                            <img src={image} className='w-full h-[384.75px] object-cover relative rounded-[8px]' alt="" />
                            <p>Abhishek Shettar, mRNA - Scientist DP-LNP formulation Development, États-Unis</p>
                        </div>
                        <div className='xl:w-[700px] min-h-[396.5px] ml-3  mt-10 xl:mt-0 xl:ml-6'>
                            <div className='mr-5  mt-4 '>
                                <h1 className='font-bold text-[33.47px] leading-[54px] text-[#000000] pr-5 pt-2 '>
                                    {title}
                                </h1>
                                {
                                    content.map((_) => (
                                        <p className='font-normal text-[14.5px] leading-[24px] text-[#000000] pr-5  pt-5'>
                                            {_}
                                        </p>
                                    ))
                                }
                                <div className='mb-10'>
                                    <Link href={'#'} className='text-[14.75px] leading-[20px] font-bold text-[#000000] flex gap-3 pl-3 pt-6 items-center'>
                                        En savoir plus
                                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.7063 6.70627C14.0969 6.31565 14.0969 5.68127 13.7063 5.29065L8.70625 0.290649C8.31563 -0.0999756 7.68125 -0.0999756 7.29063 0.290649C6.9 0.681274 6.9 1.31565 7.29063 1.70627L10.5875 5.00002H1C0.446875 5.00002 0 5.4469 0 6.00002C0 6.55315 0.446875 7.00002 1 7.00002H10.5844L7.29375 10.2938C6.90312 10.6844 6.90312 11.3188 7.29375 11.7094C7.68437 12.1 8.31875 12.1 8.70938 11.7094L13.7094 6.7094L13.7063 6.70627Z" fill="#7A00E6" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
export default CardContent