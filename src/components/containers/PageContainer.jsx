import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='flex flex-col p-4 items-center h-fit min-h-screen w-full bg-gray-950 justify-center'>
      <div className='flex flex-col max-w-[1000px] items-center'>
        {children}
      </div>
    </div>
  )
}

export default PageContainer