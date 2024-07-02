import React from 'react'
import Hero from './Hero'
import SectionCard from './SectionCard'
import Articles from './Articles'
import PressReleasesList from './PressReleasesList'
import CardDiscover from './CardDiscover'
import FocusedBlock from './FocusedBlock'
import CardMuiBox from './CardMuiBox'

const Main = () => {
    return (
        <div className='bg-[#F5F5F5]  '>
            <Hero />
            <SectionCard />
            <CardMuiBox />
            <Articles />
            <PressReleasesList />
            <CardDiscover />
            <FocusedBlock />
        </div>
    )
}

export default Main