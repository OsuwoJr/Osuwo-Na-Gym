import React from 'react'
import SectionWrapper from './SectionWrapper'
function Header (props){
    const {index, title, description} = props
    return (
        <div>
            <div>
              <p>{index}</p>
              <p>{title}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

const Generator = () => {
  return (
    <div className='min-h-screen'>
     <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
       <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure"}/>
     </SectionWrapper>
    </div>
  )
}

export default Generator
