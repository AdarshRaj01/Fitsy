'use client'
import Image from "next/image"
import CustomButton from "./CustomButton"
import {motion} from 'framer-motion';
import { fadeIn } from "@/lib/variants"


const images = [
  {
    name :'bodybuilding',
    image:'/assets/img/classes/bodybuilding.jpg',
    description: 'Lorem ipsum dolor sit veniet quia eligendi odio inventore reprehenderit quo veritatis. Excepturi quos iste cum molestiae minus veniam u'

  },
  {
    name:'cardio',
    image:'/assets/img/classes/cardio.jpg',
    description: 'Lorem ipsum dolor sit veniet quia eligendi odio inventore reprehenderit quo veritatis. Excepturi quos iste cum molestiae minus veniam u'


  },
  {
    name:'crossfit',
    image:'/assets/img/classes/crossfit.jpg',
    description: 'Lorem ipsum dolor sit veniet quia eligendi odio inventore reprehenderit quo veritatis. Excepturi quos iste cum molestiae minus veniam u'


  },
  {
    name:'fitness',
    image:'/assets/img/classes/fitness.jpg',
    description: 'Lorem ipsum dolor sit veniet quia eligendi odio inventore reprehenderit quo veritatis. Excepturi quos iste cum molestiae minus veniam u'



  },
]


const Classes = () => {
  return (
    <section id="class">
      <motion.div className='grid grid-cols-1 lg:grid-cols-2'
        variants={fadeIn('up',0.6)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.2}}

      >

        
        {images.map((img,index)=>{
          return (
            <div className='relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center' key={index}>
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
                
                  {/* <ClassHelper image={img.image} name={img.name} description={img.description}/> */}

                  <Image src={img.image} alt="" fill className="object-cover"/>
                  <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                      <motion.h3 
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.2}}

                        
                        className="h3 text-accent relative">{img.name}</motion.h3>
                      <motion.p 
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once:false,amount:0.2}}
                      
                        className="text-white relative">{img.description}</motion.p>
                      <div>
                          <CustomButton containerStyles="w-[164px] h-[46px]" text="Read more"/>
                      </div>
                  </div>
              </div>
          )
        })}

        

      </motion.div>
    </section>
  )
}

export default Classes