import React, { useState } from 'react'

const ProductCard = ({id,name,price, view}) => {
  return (
    <>      
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>₹{price}</td>
        <td><button className='btn btn-outline-primary' onClick={view}>View</button></td>
      </tr>
    </>
  )
}

export default ProductCard
