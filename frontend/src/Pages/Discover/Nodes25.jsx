import React from 'react'
import StudentPresident25 from '../../components/important/StudentPresident25';
import EventPR25 from '../../components/important/Event_PR25';
import SocialMedia25 from '../../components/important/SocialMedia25';
import DesignBranding25 from '../../components/important/Design_Branding25';
import ResearchDev25 from '../../components/important/ResearchTeam25';
import EventLogistics25 from "../../components/important/EventLogistics25.jsx"



function Nodes25() {
  return (
    <>
      <div className='max-w-screen-lg mx-auto flex flex-wrap justify-center item-center mt-10 px-6 mb-20'>
      <div className='flex flex-wrap flex-col justify-center item-center text-center'>
      </div>
      <div className='mt-8 sm:mt-12'>
        <StudentPresident25/>
        <ResearchDev25/>
        <EventPR25/>
        <DesignBranding25/>
      <SocialMedia25/>
      <EventLogistics25/>
      </div>
    </div>
    </>
  )
}

export default Nodes25