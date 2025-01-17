import React from 'react'

function Container({children,className}) {
  return (
    <div className={`w-10/12 m-auto ${className}`}>{children}</div>
  )
}

export default Container