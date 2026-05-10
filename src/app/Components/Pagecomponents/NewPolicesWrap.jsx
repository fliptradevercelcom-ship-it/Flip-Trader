'use client'
import React, { useState } from 'react'
import Polices from './Polices'
import CookiesPolicy from './Cookiesnew'
import RiskDisclosure from './RiskDisclosure'
import MoneyLaunderingPolicy from './MoneyLaunderingPolicy'
import ComplaintsHandlingProcedure from './ComplaintsHandlingProcedure'
import OrderExecutionPolicy from './OrderExecutionPolicy'
import TermCondition from './TermCondition'


const policesTabdata = [
  {
    id: 1 ,
    title : 'Privacy Policy',
    component : Polices
  },
    {
    id: 2 ,
    title : 'Cookies Policy',
    component : CookiesPolicy
  },
    {
    id: 3 ,
    title : 'Risk Disclosure',
    component : RiskDisclosure
  },
    {
    id: 4 ,
    title : 'Money Laundering Policy',
    component : MoneyLaunderingPolicy
  },
      {
    id: 5 ,
    title : 'Complaints Handling Procedure',
    component : ComplaintsHandlingProcedure
  },
        {
    id: 6 ,
    title : 'Order Execution Policy',
    component : OrderExecutionPolicy
  },
          {
    id: 7 ,
    title : 'Terms & Conditions',
    component : TermCondition
  },
]
const NewPolicesWrap = () => {
  const [activeTab, setactiveTab] = useState(1);

  const currentTab = policesTabdata.find(c => c.id === activeTab)

  const Section = currentTab.component
  return (
    <div>

      <div className="inn_container">
        <div className="flex flex-wrap justify-center pt-28 lg:pt-33 xl:pt-37 2xl:pt-45 pb-4 border-b-2 border-white">
          {
            policesTabdata.map((item, index)=>(
              <div onClick={()=>setactiveTab(item.id)} className={`text-white w-fit mx-auto rounded-full cursor-pointer  px-3 py-1 ${item.id === activeTab ? 'bg-primary' : ''}`} key={index}>
                {item.title}
              </div>
            ))
          }
        </div>
      </div>

      <div>
        {
          Section && <Section />
        }
      </div>
    </div>
  )
}

export default NewPolicesWrap
