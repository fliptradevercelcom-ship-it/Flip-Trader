import React from 'react'
import Title from '../Uiux/Title'
import Discription from '../Uiux/Discription'
import Link from 'next/link'
import Button from '../Uiux/Button'
import firebtnicon from "../../../../public/icons/firebtnicon.svg"
import Image from 'next/image'
import sidebanner from "../../../../public/images/whyfliptrade.webp"
const ForexBrokerBanner = ({title, description}) => {
    return (
        <div className='relative'>
            <video
                className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none brightness-[0.2]"
                src={'/videos/forexbgvideo.mp4'}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            />
            <div className="inn_container h-full pt-[140px] lg:pt-[180px]  2xl:pt-[150px] pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] relative z-[1]">
                    <div className="text-center lg:text-start max-w-[700px] px-0 md:px-[12] lg:px-0 lg:max-w-[unset] m-auto lg:m-0 flex items-center">
                        <div>
                            <Title title={title} color="gradient_text" ish1={true} />
                            <div className="pt-2 2xl:pt-4 xl:max-w-4xl">
                                <Discription
                                    dispription={description}
                                    color="text-[#D0D0D0]"
                                />
                            </div>
                            <div className="pt-8 2xl:pt-12">
                                <Link
                                    href={"https://client.fliptradegroup.com/trader/registration"}
                                >
                                    <Button
                                        btn_name="Start Trading"
                                        icon={firebtnicon.src}
                                        btn_bg="bg-primary"
                                        text_color="text-white"
                                        border_color="border-primary"
                                        shadow={true}
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={sidebanner}
                            alt=''
                            width={500}
                            height={500}
                            className='w-full m-auto max-w-[80%] md:max-w-[600px] lg:max-w-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForexBrokerBanner
