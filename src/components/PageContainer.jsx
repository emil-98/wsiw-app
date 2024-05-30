import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='flex flex-col p-4 items-center h-screen w-full bg-gray-900 backdrop-blur-lg'>
      <div className='max-w-[1000px]'>
        {children}
      </div>
    </div>
  )
}

export default PageContainer