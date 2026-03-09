import React from 'react'
import GlobleBanner from '../Components/Uiux/GlobleBanner'
import Forexadvantages from '../Components/Pagecomponents/Forexadvantages'

const page = () => {
  return (
    <div>
      <GlobleBanner
        title={"Advantages of Forex"}
        description={
          "The Forex market is the world’s largest financial market and is open 24 hours a day, 5 days a week. Trade Forex whenever it suits you."
        }
        btn_name={"Trade Forex"}
        btn_link={"https://client.fliptradegroup.com/trader/registration"}
      />
      <Forexadvantages />
    </div>
  )
}

export default page
