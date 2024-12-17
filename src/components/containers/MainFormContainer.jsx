import React from 'react'

const MainFormContainer = ({children}) => {
  return (
    <div className='flex flex-col p-4 h-fit min-h-screen w-full bg-gray-950 items-center justify-center'>
      <div className='flex flex-col max-w-[1000px] justify-center'>
        {children}
      </div>
    </div>
  )
}

export default MainFormContainer