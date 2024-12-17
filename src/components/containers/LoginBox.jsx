import React, { useEffect, useState } from 'react'
import GenericButton from '../input/GenericButton'
import { FaArrowRight, FaXmark } from 'react-icons/fa6'

const LoginBox = ({submitHandler}) => {

  const [whichExpanded , setWhichExpanded] = useState(0);
  const [submitBtnState, setSubmitBtnState] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    setSubmitBtnState(email != '' && password != '')
  }, [email, password])

  const loginOrSignUp = () => {
    const textBoxStyle = 'flex bg-gray-800 text-gray-200 p-2 rounded-full outline-none justify-between m-[4px] '
    const outerDivStyle = 'flex flex-col'

    switch (whichExpanded){
      case 1:
        return(
          <div className={outerDivStyle}>
            <input
              selected
              className={textBoxStyle}
              type='text'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className={textBoxStyle}
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <input
              className={textBoxStyle}
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
        )
      case 2:
        return(
          <div className={outerDivStyle}>
            <input 
              className={textBoxStyle}
              type='text'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className={textBoxStyle}
              type='password'
              placeholder='Password'
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setConfirmPassword(e.target.value)
              }}
            />
          </div>
        )
      default:
        return(<></>)
    }
  }

  return (
    <div className='flex flex-col fixed w-[200px] self-end z-30'>
      <div className='flex w-full justify-center'>
        <GenericButton
          label={'Sign Up'}
          clickEvent={() => {

            setWhichExpanded(1)
          }}
        />
        <GenericButton
          label={'Login'}
          clickEvent={() => setWhichExpanded(2)}
        />
      </div>

      <div>
        {loginOrSignUp()}
      </div>
      
      {
        whichExpanded > 0 ? 
          <div className='h-fit w-fit self-center p-2 m-[4px] rounded-full bg-gray-800 cursor-pointer' 
            onClick={() => {
              if(submitBtnState){
                submitHandler(email, password, whichExpanded)
              }else{
                setWhichExpanded(0)
              }
            }}
          >
            {submitBtnState ? <FaArrowRight className='text-gray-200'/> : <FaXmark className='text-gray-200'/>}
          </div>
        : <></>
      }
    </div>
  )
}

export default LoginBox