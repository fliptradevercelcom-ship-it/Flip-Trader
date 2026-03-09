import React from 'react'
import GlobleBanner from '../Components/Uiux/GlobleBanner'
import TradingConditionsHour from '../Components/Pagecomponents/TradingConditionsHour'

const page = () => {
  return (
    <div>
      <GlobleBanner
        title={"Trading Conditions & Hours"}
        description={
          "Flip Trade Group offers a trading environment with aggressive pricing, flexible trading conditions, and high-quality execution with low spreads. Traders can access the markets 24 hours a day, 5 days a week, with dedicated specialists available to provide support whenever needed."
        }
        btn_name={"Trade Forex"}
        btn_link={"https://client.fliptradegroup.com/trader/registration"}
      />
     
      <TradingConditionsHour />

    </div>
  )
}

export default page
