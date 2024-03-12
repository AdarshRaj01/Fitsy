'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaYoutube,
  FaLinkedinIn,

} from 'react-icons/fa'

import CustomButton from './CustomButton'
import {motion} from 'framer-motion'


const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className='container mx-auto pb-24'>
        <div className='text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12'>
          <div className='flex flex-col gap-4'>
            <Link href='#'>
              <Image src='/assets/img/logo.png' alt='logo' height={117} width={55} className='mb-2'/>

            </Link>
            <p className='text-white max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia </p>
            <ul className='flex flex-col gap-4'>
              <li className='flex items-center gap-4'>
                <FaMapMarkerAlt className='text-xl text-accent'/>
                <span>Bengaluru, India</span>
              </li>

              <li className='flex items-center gap-4'>
                <FaPhoneAlt className='text-xl text-accent'/>
                <span>+91 8899007755</span>
              </li>

              <li>
                <Link href='#' className='flex items-center gap-4'>
                  <FaEnvelope className='text-xl text-accent'/>

                
                  <span>salesforcedev789@gmail.com</span>
                  </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className='h4 text-screen mb-4'>Recent blog posts</h4>
            <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>
              <Link className='hover:text-accent transition-all' href='#'>
                <h5 className='h5 leading-snug'>
                  How to stay motivated for all exercises

                </h5>
                <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>September 11, 2024</p>
              </Link>
            </div>

            <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>

              <Link className='hover:text-accent transition-all' href='#'>
                <h5 className='h5 leading-snug'>
                  How to stay motivated for all exercises

                </h5>
                <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>September 11, 2024</p>
              </Link>
            </div>

            <div className='border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4'>

              <Link className='hover:text-accent transition-all' href='#'>
                <h5 className='h5 leading-snug'>
                  How to stay motivated for all exercises

                </h5>
                <p className='text-gray-400 text-[12px] tracking-[3px] uppercase'>September 11, 2024</p>
              </Link>
            </div>
          </div>
          <div>
            <h4 className='h4 mb-4'>Gallery</h4>
              <div className='flex flex-wrap gap-2'>
                <Link href='#'>
                  <Image src={'/assets/img/trainers/david.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/matt.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/rosy.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/sofia.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/david.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/matt.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/rosy.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/sofia.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>

                <Link href='#'>
                  <Image src={'/assets/img/trainers/david.jpg'} alt='logo' height={100} width={100} className='mb-2'/>
                </Link>


              </div>
          </div>
          <div>
            <h4 className='h4 mb-4'>Newsletter</h4>
            <div className='flex flex-col gap-4'>
              <p>
                Lorem ipsum dolor sit amet, elit. Illum fugit quaerat saepe sit.
              </p>
              <form className='items-center'>
                <input type='text' 
                  placeholder='Your email address'  
                  className='h-[50px] outline-none px-4 text-primary-300'/>
                <CustomButton text='Send' containerStyles='h-[50px] px-8'/>
              </form>
            </div>

          </div>

        </div>


      </div>

      <div className='text-white border-t border-white/20 py-12'>
        <div className='container mx-auto h-full'>
          <div className='items-center justify-between flex h-full'>
            <span className='text-white'>&copy; Copyright 2024 FitsyLLC</span>
            <ul className='gap-4 flex text-xl'>
              <li>
                <Link href='' className='text-white hover:text-accent transition-all'>
                  <FaLinkedinIn />

                </Link>
              </li>

              <li>
                <Link href='' className='text-white hover:text-accent transition-all'>
                  <FaInstagram />

                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer