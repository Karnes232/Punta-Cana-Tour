import React from 'react'
import TourCard from '../TourCardComponent/TourCard'

const FeaturedTours = () => {
    const tour = {
        image: 'https://images.ctfassets.net/h9wjlzs95u7s/65dCWCe6wEYB928De34Yik/99bdaa212ab9eb6cc57311826c2fdd76/photo-1510267790222-d919ba2cbcbf?h=250',
        title: 'The Coldest Sunset',
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
    }
  return (
    <div className='bg-slate-100 py-10'>
        <h3 className='font-lato tracking-wider text-3xl font-semibold md:text-4xl text-center'>Featured Tours</h3>
        <TourCard 
            tour={tour}
        />
    </div>
  )
}

export default FeaturedTours