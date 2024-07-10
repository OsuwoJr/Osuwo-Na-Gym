import React from 'react'
import SectionWrapper from './SectionWrapper'

const Workout = (props) => {
  const {Workout} = props
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}></SectionWrapper>
  )
}

export default Workout
