import React from 'react'

import './styles.css'

type Props = {
    handleClick: () => void
}

const Screen = ({handleClick}: Props) => {
  return (
    <div 
        className="screen__container"
        onClick={() => handleClick()}
    >

    </div>
  )
}

export default Screen