'use client'
import { AdvantageBox } from "@/components/AdvantageBox"
import {manPower, team, remoteAssistance} from "@/assets/Outsourcing"
import { TitleText } from "@/components/TitleText"
import { SectionContainer } from "@/components/SectionContainer"
import cx from "clsx"

const Recruitement = () => {

  let recruitements = [
    {
      title:"Manpower Service",
      description:"BAC sought to distinguish itself as a reliable partner of foreign and loca employers in providing a labor force; a solid believer in quality servicesl and a result-oriented enterprice that derives satisfaction from meeting the needs of its customers without compromising its highest ervice and ethical standards" , 
      image: manPower,
    },
    {
      title:"Expat Staff Deployment",
      description:"International applicants require a unique recruitment service. Having assisted several internal firms, we understand international cultues and the business requirements needed to recruit and deploy internal candidates for local emploment in the Philippines" , 
      image: team,
    },
    {
      title:"Local Staff Deployment",
      description:"When you are seeking local staff in the Philippines, we will provide you with a fast and cost-effective recruitment/deployment solution that will take the time, cost and hassle of looking for local talent here in the Philippines" , 
      image: remoteAssistance,
    }
  ] 

  return (
    <section >
      <SectionContainer className='flex justify-center flex-col flex-wrap '>
        <div className='grid place-items-center mb-6'>
        <TitleText
            size='head'
            direction='center'>
            Outsourcing
          </TitleText>
          <p>
            Regardless of the size of your ompany, our Business Asia Consulting professionals are ready to assist you.
          </p>
        </div>
        <div className={cx('flex justify-between gap-0 items-center', 'tablet:flex-col gap-16', 'phone:gap-5')}>
    {recruitements.map((recruite) => (<AdvantageBox title={recruite.title} description={recruite.description} image={recruite.image}/>)
    )}
        </div>
      </SectionContainer>
    </section>
  )
}

export default Recruitement
