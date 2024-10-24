import React from 'react'
import banner1 from "../../public/banner1.png"
const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 flex my-10'>
      <div className="w-1/2 flex-row mt-32" >
      <h1 className='text-4xl font-bold'>
        Hello,Welcome here lo learn something <span className='text-pink-500'>new EveryDay!!</span>
      </h1>
       
      <p className='space-x-12 text-xl pt-10 text-xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellat quos consectetur explicabo magni esse aperiam! Iusto hic, non aliquid, culpa laudantium inventore eum similique corporis saepe unde, eius dicta.</p>
      <div className='pt-4'>
      <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="daisy@site.com" />
</label>
      </div>
      <button className="btn btn-secondary m-6">Secondary</button>

      </div>
      <div className="w-1/2 flex-row mt-32 pl-40 w-1/2 " >
       <img className="rounded-lg  " src="banner1.png" alt="" />
      </div>
    </div>
    </>
  )
}

export default Banner