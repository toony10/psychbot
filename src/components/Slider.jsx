import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import leo from '@/images/leo.jpg'
export default function Slider() {
  return (
    <Carousel
      slideInterval={1000}
      indicators={false}
      rightControl=" "
      leftControl=" "
      className="h-[10rem] w-[10rem]"
    >
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={leo}
        alt="lol"
        className="h-full object-cover"
      />
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={leo}
        alt="lol"
        className="h-full object-cover"
      />
      <Image
        width={0}
        height={0}
        sizes="100vw"
        src={leo}
        alt="lol"
        className="h-full object-cover"
      />
    </Carousel>
  )
}
