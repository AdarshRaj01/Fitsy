'use client'
import Image from "next/image"
import CustomButton from "./CustomButton";

const ClassHelper = ({image, name, description}:{image:string; name:string; description:string;}) => {
  return (
    <div>
        
            <Image src={image} alt="" fill className="object-cover"/>
            <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <h3 className="h3 text-accent relative">{name}</h3>
                <p className="text-white relative">{description}</p>
                <div>
                    <CustomButton containerStyles="w-[164px] h-[46px]" text="Read more"/>
                </div>
            </div>


    </div>

  )
}

export default ClassHelper