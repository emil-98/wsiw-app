import React from 'react'

const MovieGridItem = ({title, posterPath, }) => {
  const posterURL = `https://image.tmdb.org/t/p/w154${posterPath}`
  return (
    <div style={{'--img-url': `url(${posterURL})`}}
         className='group bg-[image:var(--img-url)] w-[154px] h-[231px]'>
      <div className='group-hover:w-'>

      </div>
    </div>
  )
}

export default MovieGridItem