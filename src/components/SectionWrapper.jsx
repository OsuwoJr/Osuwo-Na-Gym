import React from 'react'

const SectionWrapper = (props) => {
    const{children, header, title} = props
  return (
    <section className='min-h-screen flex flex-col gap-10'>
      <div className='bg-slate-950 py-10 flex flex-col gap-2 justify-center items-center'>
     <p>{header}</p>
     <h2>{title[0]} <span>{title[1]}</span> {title[2]}</h2>
      </div>
      {children}
    </section>
  )
}

export default SectionWrapper
