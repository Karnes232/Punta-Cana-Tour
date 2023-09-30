import React from 'react'

const Payment = ({location}) => {
    const params = new URLSearchParams(location.search);
    console.log(params)
  return (
    <div>payment</div>
  )
}

export default Payment