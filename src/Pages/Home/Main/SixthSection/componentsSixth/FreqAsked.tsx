import React from 'react'
import { arrowRight } from '../../../../../util/Icons'

interface Txt {
    textInfo: string
}

const FreqAsked = (props: Txt) => {
    const { textInfo } = props
  return (
    <div className="rounded-lg shadow-xl bg-orange-400 flex items-center justify-between px-8 txtHover w-full
    h-24 poppins">
        <h1 className="font-bold verySmall:text-sm sm:text-lg">
            {
                textInfo
            }
        </h1>

        {
            arrowRight
        }
    </div>
  )
}

export default FreqAsked