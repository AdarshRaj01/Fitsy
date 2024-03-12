'use client'

import Link from "next/link"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import Image from "next/image"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"

const Header = () => {
  const [headerActive, setHeaderActive] = useState<boolean>(false)
  const [openNav, setOpenNav] = useState<boolean>(false)

  useEffect(()=>{
    const handleScroll = () => {
      setHeaderActive(window.scrollY>50)
    }
    window.addEventListener('scroll',handleScroll);
    //clear scroll event
    return ()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);

  console.log(headerActive)

  return (
    <header className={`${headerActive? 'h-[100px]':'h-[124px]'} fixed top-0 max-w-[1920px] w-full bg-primary-200 h-[100px] transition-all z-50 `}>
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href=''>
          <Image src={'/assets/img/logo.png'} width={117} height={55} alt='logo'/>
        </Link>

        {/* Mobile Nav Bar */}
        <MobileNav containerStyles={`${headerActive?'top-[90px]':'top-[124px]' }
          ${openNav?'max-h-max pt-8 pb-10 border-t border-white/10':'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'} 
        
          flex flex-col text-center gap-8 fixed text-white  bg-primary-200 w-full left-0 top-[124px] text-base uppercase font-medium transition-all xl:hidden`}/>


        {/* desktop nav hidden on small device */}
        <Nav containerStyles="flex gap-4 hidden xl:flex text-white text-base uppercase font-medium transition-all"/>

        {/* login and register button */}
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-accent transition-all text-base uppercase">Login</button>
            <button className="hover:text-accent transition-all text-base uppercase">Register</button>
          </div>

          {/* //hide/open menu button */}
          <div>
            <button onClick={()=>setOpenNav(!openNav)} className="text-white xl:hidden">
              <MdMenu className="text-4xl"/>
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header