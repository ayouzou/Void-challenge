import React from 'react'
import NavConseil from './NavConseil'
import CardsConseil from './CardsConseil'
import TextConseil from './TextConseil'
import TableConseil from './TableConseil'
const InfoConseil = [
    {
        id: 1,
        title: 'Diversité du Conseil',
        content: [
            `L’activité du Groupe étant à la fois diversifiée et
mondiale, le Conseil d’Administration s’interroge
chaque année sur l’équilibre souhaitable de sa
composition et de celle de ses comités. Il
recherche notamment, une représentation
équilibrée des hommes et des femmes, une
grande diversité des compétences et des pays
d’origine, ainsi que des profils disposant d’une
expérience internationale.`,
            `43 % des administrateurs sont des femmes. Sept
administrateurs sont de nationalité autre que
française. Le Conseil recherche avant tout des
administrateurs compétents, disponibles,
impliqués et dotés d’une grande indépendance
d’esprit.`
        ]
    }, {
        id: 2,
        title: 'Indépendance des membres du Conseil',
        content: [`Aux termes du code AFEP-MEDEF de
gouvernement d’entreprise des sociétés cotées,
un administrateur est indépendant lorsqu’il
n’entretient aucune relation de quelque nature
que ce soit avec la Société, son Groupe ou sa
direction, qui puisse compromettre l’exercice de
sa liberté de jugement.`, `
79 % des administrateurs sont indépendants
(conformément à la législation, les
administrateurs représentant les salariés sont
exclus du calcul du pourcentage
d’administrateurs indépendants).`]
    }
]
const MainConseil = () => {
    return (
        <div className='bg-[#F5F5F5]  '>
            <NavConseil />
            <div className='md:mx-[160px] md:mt-14 mt-8 mx-[5px] md:pt-[60px] pt-[10px]  h-full bg-[#FFFFFF]'>
                <InfoMain />
                <CardsConseil />
                {InfoConseil.map((info) => (
                    <TextConseil key={info.id} title={info.title} content={info.content} />
                ))}
                <TableConseil />
                <div>
                    <p>
                        CA : Comité d’audit
                    </p>
                    <p>
                        CNG : Comité des nominations, de la gouvernance et de la RSE
                    </p>
                    <p>
                        CR : Comité des rémunérations
                    </p>
                    <p>
                        CS : Comité de réflexion stratégique
                    </p>

                    <p>
                        CSci : Comité scientifique
                    </p>
                    <p>
                        P : Président(e)
                    </p>
                </div>
            </div>

        </div>
    )
}
export default MainConseil
const InfoMain = () => {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='md:w-[550px] md:p-0 p-5'>
                    <h1 className='text-[25px] font-bold'>
                        Apercu
                    </h1>
                    <p className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D] pt-5 '>
                        La durée des fonctions des administrateurs est de quatre années au maximum ;
                        le renouvellement se fait par roulement.
                    </p>
                    <p className='font-normal text-[14.38px] leading-[24px] text-[#0D0D0D] pt-[60px]'>
                        Le Conseil d’Administration détermine les orientations stratégiques de l’activité
                        de la Société et veille à leur mise en œuvre. Sous réserve des pouvoirs
                        expressément attribués aux assemblées d’actionnaires et dans la limite de l’objet
                        social, il se saisit de toute question intéressant la bonne marche de la Société et
                        règle, par ses délibérations, les affaires qui la concernent.
                    </p>
                </div>
            </div>
            <div className='pt-[60px] '>
                <h1 className='text-[22.88px] leading-[36px] font-bold text-[#000000] '>
                    Composition du Conseil
                </h1>
                <p className='text-[14.5px] pt-10 md:w-[630px] leading-[24px] text-[#0D0D0D] font-normal'>
                    Le Conseil d'administration, nommé par les actionnaires, est composé de 16 membres dont deux
                    représentants des salariés.
                </p>
            </div>
        </>
    )
}