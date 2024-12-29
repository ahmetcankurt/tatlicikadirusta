import React, { memo } from 'react'

function Container({ children , paddingTop = 50 , paddingBottom = 50 }) {
  return (
    <div   style={{paddingTop: paddingTop, paddingBottom: paddingBottom}}>
      {children}
    </div>
  )
}

export default  memo(Container)