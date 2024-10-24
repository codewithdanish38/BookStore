import React from 'react'

const Cards = ({item}) => {
  
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl px-10  py-10 m-10 hover:scale-105 duration-200"    >
  <figure>
    <img 
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.tittle}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline px-6 py-4">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-300 px-6 py-4 cursor-pointer border-black-1">Buy now</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Cards