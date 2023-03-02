import React, { type FC } from 'react'
import { NavBar, Toast } from 'antd-mobile'
import BottomBar from '../components/core/BottomBar'
interface props {
  children: React.ReactNode
}

const layout: FC<props> = props => {
  const back = () =>
    Toast.show({
      content: '点击了 返回区域',
      duration: 1000
    })
  return (
    <div className='page-container__wrap'>
      <NavBar onBack={back}>layout</NavBar>
      {props.children}
      <BottomBar></BottomBar>
    </div>
  )
}

export default layout
