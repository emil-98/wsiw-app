import React from 'react'

const RatingScale = ({score, numRatings}) => {
  const barLenStyle = `w-[${score * 10}%]`

  return (
    <div className='flex w-full h-[5px]'>
      <div className='flex w-full h-[5px] rounded-full'></div>
      <div className={`flex absolute bg-green-400 rounded-full ${barLenStyle}`}></div>
    </div>
  )
}

export default RatingScale