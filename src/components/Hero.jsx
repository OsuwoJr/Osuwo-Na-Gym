import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-4'>
        <p>IT'S TIME TO BE</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl p-4'>A Bazuu <span className='text-blue-400'>Must Unfat</span>!</h1>
        </div>
      
      <p className='text-sm md:text-base font-light'>I hereby aceept with  whole my <span className='text-blue-400 font-medium uppercase'>heart,chest,stomach,liver,brain,soul,lungs</span> and any other preciously valued organ in my body.<span className='text-blue-400 font-medium'>To stay fit and be lean like never before.</span>Not to partake any stupidly processed diet and <span className='text-blue-400 font-medium'>to strictly follow</span> my gym lessons every day! </p>

      <Button func={() =>{
        window.location.href = '#generate'
      }} text={"Accept&Suffer"}></Button>
    </div>
  )
}

export default Hero

