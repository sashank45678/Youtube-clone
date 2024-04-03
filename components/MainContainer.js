import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='flex-col col-span-9'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer