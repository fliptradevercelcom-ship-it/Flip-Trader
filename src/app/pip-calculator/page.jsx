import React from 'react'
import Pipcalculatormain from './Pipcalculator'
export const metadata = {
  title: "Pip Calculator - Forex Pip Value Calculator | FlipTrade Group",
  description:
    "Use Flip Trade Group’s Pip Calculator to quickly calculate pip values for any forex pair. Manage risk, set position sizes, and trade smarter with ease."
};
function page() {
  return (
    <div>
      <Pipcalculatormain />
    </div>
  )
}

export default page
