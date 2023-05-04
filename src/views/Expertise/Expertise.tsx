import {
  construction,
  financing,
  fintech,
  foodAndBeverages,
  information,
  lending,
} from "@/assets/Expertise"
import { ExpertiseCard } from "@/components/ExpertiseCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"

const Expertise = () => {
  return (
    <SectionContainer>
      <TitleText
        size='head'
        direction='left'>
        Areas of Expertise
      </TitleText>
      <section className='flex flex-wrap gap-10 justify-evenly'>
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Construction'
          image={construction}
        />
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Fintech'
          image={fintech}
        />
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Information Technology'
          image={information}
        />
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Food & Beverages'
          image={foodAndBeverages}
        />
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Lending'
          image={lending}
        />
        <ExpertiseCard
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. '
          title='Financing'
          image={financing}
        />
      </section>
    </SectionContainer>
  )
}

export default Expertise
