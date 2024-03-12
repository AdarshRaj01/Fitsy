'use client'

import {motion} from 'framer-motion'
import {fadeIn} from '@/lib/variants'
import Image from 'next/image'
import Link from 'next/link'

const brandData = [
  {
    img:'/assets/img/brands/brand-1.png',
    href:'',
  },

  {
    img:'/assets/img/brands/brand-2.png',
    href:'',
  },
  {
    img:'/assets/img/brands/brand-3.png',
    href:'',
  },
  {
    img:'/assets/img/brands/brand-4.png',
    href:'',
  },
  {
    img:'/assets/img/brands/brand-5.png',
    href:'',
  },

]

const brandContainerVariant = {
  hidden:{
    opacity:0,
  },
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.4,
      duration:0.5,
      ease:'linear'
    },
  },
};
const brandItem = {
  hidden:{
    y:28, opacity:0,
  },
  show:{
    opacity:1,
    transition:{
      duration:0.5,
      ease:[0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className="py-8 " id="contact">
      <div className='container mx-auto'>
        <motion.div 
          variants={brandContainerVariant}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.3}}
        
          className='grid grid-cols-2 lg:grid-cols-5 py-8'>
          {brandData.map((brandName, index)=>{
            return (
              <motion.div 
                variants={brandItem}
                key={index}>
                <Link href={brandName.href} className='group'>
                  <Image src={brandName.img} alt='' width={204} height={106} className="opacity-50 group-hover:opacity-100 transition-all mx-auto"/>

                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

    </section>
  )
}

export default Brands