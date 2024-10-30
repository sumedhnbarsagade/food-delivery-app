import React from 'react'

function RestaurantCards(props) {
    const {resData} = props;
  return (
    <div className="container">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}  alt="Biryani" className='resImage' />
        <h3>{resData.info.name}</h3>
        <p>{resData.info.cuisines.join(", ")}</p>
        <p>{resData.info.avgRating} Stars</p>
        <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
  )
}

export default RestaurantCards