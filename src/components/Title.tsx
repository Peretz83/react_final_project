import React from 'react'

interface Props{
  mainText: string
  subText?: string
}

const Title = ({mainText, subText}: Props) => {
  return (
   <h2 className='text-center mt-5'>{mainText}<br/>
   {subText &&
   <small className='text-muted'>{subText}</small>
   }
   </h2>
  )
}

export default Title