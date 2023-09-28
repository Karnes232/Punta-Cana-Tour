import { Link } from 'gatsby'
import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const CtaButton = ({text}) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-5xl xl:max-w-6xl mx-auto">
        <Link to="/tours/" className="flex items-center justify-between no-underline text-2xl font-medium bg-primary-color text-secondary-color px-4 py-2 my-3 rounded-xl hover:opacity-70">
          {text} <RiArrowRightSLine className="ml-2" />
        </Link>
      </div>
  )
}

export default CtaButton