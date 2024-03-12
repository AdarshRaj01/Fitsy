import Image from "next/image"
import HeroSlider from "./HeroSlider"
const Hero = () => {
  return (
    <section className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat" id="home">
      <div className="container mx-auto h-full">
        {/* <Image src={'/assets/img/hero/bg.png'} alt='hero' width={1950} height={913} className="pt-8 left-0"/> */}

        <HeroSlider />

      </div>
    </section>
  )
}

export default Hero