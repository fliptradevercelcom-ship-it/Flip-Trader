import React from 'react'
import economicbanner from '../../../../public/images/economicbanner.webp'
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Title from '../Uiux/Title';
import Discription from '../Uiux/Discription';
import Button from '../Uiux/Button';
import sidebanner from "../../../../public/images/ecosidebanner.webp";
import Image from 'next/image';
function Economicbanner({onScrollClick}) {
  return (
    <div 
     className='bg-cover'
     style={{backgroundImage:`url(${economicbanner.src})`}}
     >
      <div className="inn_container pt-40 2xl:pt-52">
         <div className="grid xl:grid-cols-[4fr_3fr]">
          <div className="text-center xl:text-start">
            <div >
              <Title
                title={`Economic Calendar`}
                color="gradient_text"
                ish1={true}
              />
              <div className="flex w-full pt-4">
                <Discription
                  dispription={`Stay ahead of market-moving events with FlipTrade’s <br/> Economic Calendar. Know when key releases <br/> happen and make informed trading decisions.`}
                  color="text-[#D0D0D0]"
                />
              </div>

              <div className="pt-12 pb-5" onClick={onScrollClick}>
                <Button
                  btn_name="View Economic Calendar"
                  border_color="border-primary"
                  btn_bg={"bg-primary"}
                  shadow={true}
                  text_color={"text-white"}
                  icon={firebtn}
                />
              </div>
            </div>
          </div>
          <div className="pt-8 xl:pt-0">
            <Image
              src={sidebanner}
              alt="side banner"
              width={1500}
              height={500}
              className="w-[80%]  m-auto"
            />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Economicbanner
