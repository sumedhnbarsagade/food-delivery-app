import React from 'react'
import { CDN_URL } from '../utils/constants';

function RestaurantCards(props) {
    const {resData} = props;
  return (
    <div className="container">
        <img src={CDN_URL + resData.info.cloudinaryImageId}  alt="Biryani" className='resImage' />
        <h3>{resData.info.name}</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>{resData.info.avgRating} Stars</p>
        <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
  )
}

export default RestaurantCards