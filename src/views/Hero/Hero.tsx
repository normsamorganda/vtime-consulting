import { Text } from "@/components/Text"
import heroBg from "../../assets/Hero/modern-business-buildings-financial-district.png"
import { Button } from "@/components/Button"

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
      className='relative bg-no-repeat bg-cover bg-center h-[30rem]'>
      <div className='max-w-[20rem] p-4 rounded-lg bg-slate-800/30 absolute top-11 left-36'>
        <Text
          size='sm'
          className='text-white !font-thin'>
          Why Choose
        </Text>
        <Text
          size='3xl'
          className='text-white font-extrabold'>
          Business Asia
        </Text>
        <Text
          size='3xl'
          className='text-white font-extrabold'>
          Consulting
        </Text>
        <Text
          size='xs'
          className='!text-[10px] text-white'>
          At BAC, We understand the importance of making well-informed decisions
          in business, That’s why we advocate for the “Stop, Look, and Listen”
          approach to decision-making. By talking a moment to pause, observe,
          and listen to all the relevant factors, our clients can make more
          informed and successful business decisions. Our team of experts is
          dedicated to helping businesses implement this approach and achieve
          their goals with confidence.
        </Text>
        <Button content='Read More' />
      </div>
    </section>
  )
}

export default Hero
