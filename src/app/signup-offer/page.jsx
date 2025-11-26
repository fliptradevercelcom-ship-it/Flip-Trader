import { MessageCircle, Zap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Promoform from '../promo/Promoform'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-[#1a0f2e] via-[#0f0820] to-[#060608] pt-30'>
       <section className="relative overflow-hidden  px-4 py-12 md:py-18 lg:py-24 text-center">
   
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/4 top-20 h-[500px] w-[500px] animate-pulse rounded-full bg-[#6a40ec] blur-[120px]" />
          <div className="absolute right-1/4 top-40 h-[400px] w-[400px] animate-pulse rounded-full bg-[#9679f0] blur-[100px] [animation-delay:1s]" />
        </div>
       <div className="flex flex-col-reverse xl:flex-row px-[3%] gap-6">
         <div className="relative my-auto max-w-5xl xl:w-[60%]">
          <h1 className="mb-6 bg-gradient-to-r from-white via-[#b39cff] to-white bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-7xl leading-[normal] lg:leading-24 text-center xl:text-start">
         Sign Up and Unlock Your <br/> Welcome Rewards
          </h1>
          <h2 className="mb-4 text-xl sm:text-2xl md:text-3xl text-center xl:text-start text-white">
           Join FlipTrade Group and get an exclusive reward on your first account activation.
          </h2>
          <p className="mb-10 text-base  sm:text-lg md:text-xl text-center xl:text-start text-white">
            Start trading with extra value added automatically to your account.
          </p>
          <div className="flex flex-wrap justify-center xl:justify-start gap-4">
            <Link
              href={'https://client.fliptradegroup.com/trader/registration'}
              className="group relative inline-flex w-full max-w-xs items-center justify-center overflow-hidden rounded-full bg-primary px-8 py-3 text-base shadow-[0_0_30px_rgba(106,64,236,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(106,64,236,0.6)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                <Zap className="h-5 w-5" />
                Claim Your Reward
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
            <Link
              href="https://wa.me/+918852099227"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full max-w-xs items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366] px-8 py-3 text-base text-[#060608] transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-lg"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center pb-12 xl:pb-0 xl:w-[40%]">
        <Promoform title={'Activate Your Reward'} btnname={'Complete SignUp'}/>
        </div>
       </div>
        
      </section>
    </div>
  )
}

export default page
