import React from 'react'
import ResearchDevelopment from '../../components/important/ResearchDevelopment'
import Finance from '../../components/important/Finance'
import MediaandBranding from '../../components/important/MediaandBranding'
import StudentPresident from '../../components/important/StudentPresident'
import Technology from '../../components/important/Technology'

function Nodes24() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6 mb-20'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      </div>
      <div className='mt-8 sm:mt-12'>
        <StudentPresident/>
      <ResearchDevelopment/>
      <Finance/>
      <Technology/>
      <MediaandBranding/>
      </div>
    </div>
    </>
  )
}

export default Nodes24