import { feature1, feature2, feature3 } from "@/assets/Feature"
import { FeatureCard } from "@/components/FeatureCard"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleText } from "@/components/TitleText"

const Feature = () => {
  return (
    <SectionContainer>
      <TitleText
        size='md'
        direction='left'>
        Feature
      </TitleText>
      <section className='flex'>
        <FeatureCard
          date='19 Apr 2023'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
          image={feature1}
          tag='News'
        />
        <FeatureCard
          date='19 Apr 2023'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
          image={feature2}
          tag='News'
        />
        <FeatureCard
          date='19 Apr 2023'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
          image={feature3}
          tag='News'
        />
      </section>
    </SectionContainer>
  )
}

export default Feature
