import React from 'react'

const Button = ({size,type="button",bgColor,text}) => {
  return (
    <button type={type} className={`${bgColor} px-2 py-1 rounded-sm text-sm`}>
        {text}
    </button>
  )
}

export default Button