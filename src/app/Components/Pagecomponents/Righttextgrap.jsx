import Image from 'next/image'
import React from 'react'
import Discription from '../Uiux/Discription'
import Link from 'next/link'
import Button from '../Uiux/Button'
import righttextlowerphloerph from "/public/images/righttextlowerph.webp";
import Title from '../Uiux/Title'

const Righttextgrap = ({desktopbanner,phonetabbanner,title,description,btnname,position}) => {
  return (
    <div>
      <div className="pt-16 hidden xl:block">
          <div className="relative">
            <Image
              src={desktopbanner.src}
              alt="banner"
              width={3000}
              height={500}
              className="w-full"
            />
            <div className={`absolute ${position ? position :'top-[20%] lg:top-[30%] xl:w-[43%] right-0'}`}>
              <div className="">
                <Title
                  title={title}
                  color="text-black"
                />
                <div className="pt-4">
                  <Discription
                    dispription={description}
                    color="text-black"
                  />
                </div>
                <div className="pt-10">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={btnname}
                      btn_bg="bg-primary"
                      text_color="text-white"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block xl:hidden relative">
         
          <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_4fr]">
            <div className="block">
              <Image
                src={phonetabbanner}
                alt="FlipTrade feature spotlight graphic"
                width={1000}
                height={500}
                className="object-cover h-full rounded-3xl"
              />
            </div>
            <div
              className=" relative bg-cover   bg-no-repeat block rounded-3xl"
              style={{ backgroundImage: `url(${righttextlowerphloerph.src})` }}
            >
              <div className="md:w-[90%] m-auto flex items-center justify-center h-full">
                <div className="p-6">
                  <Title
                    title={title}
                    color="text-black"
                  />
                  <div className="pt-4">
                    <Discription
                      dispription={description}
                      color="text-black"
                    />
                  </div>
                  <div className="pt-10">
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={btnname}
                        btn_bg="bg-primary"
                        text_color="text-white"
                        border_color="border-transparent"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Righttextgrap
